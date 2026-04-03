"use client";

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useMemo, useTransition } from 'react';
import { Loader2, Plus, Minus, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from '@/hooks/use-toast';

const orderFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  companyName: z.string().optional(),
  streetAddress: z.string().min(1, "Street address is required."),
  apartment: z.string().optional(),
  city: z.string().min(1, "Town / City is required."),
  postcode: z.string().min(1, "Postcode is required."),
  phone: z.string().min(1, "Phone is required."),
  email: z.string().email("Invalid email address."),
  orderNotes: z.string().optional(),
  shipToDifferentAddress: z.boolean().default(false),
  shipping: z.enum(['delivery', 'pickup']).default('pickup'),
});

type OrderFormValues = z.infer<typeof orderFormSchema>;

export function OrderForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { toast } = useToast();
  const dish = searchParams.get('dish');
  const priceString = searchParams.get('price');

  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "Delft",
      postcode: "",
      phone: "",
      email: "",
      shipToDifferentAddress: false,
      shipping: 'pickup'
    },
  });

  const shippingMethod = useWatch({ control: form.control, name: 'shipping' });

  const price = useMemo(() => {
    if (!priceString) return 0;
    return parseFloat(priceString.replace('€', '').replace(',', '.'));
  }, [priceString]);

  const subtotal = price * quantity;
  const shippingCost = shippingMethod === 'delivery' ? 5.00 : 0;
  const total = subtotal + shippingCost;

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };
  
  async function processOrder(data: OrderFormValues) {
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecHcfSAshKggQSb3srgGUKsb98jpDYCEn1zPL38Psy8E7Zgg/formResponse";
    
    const formData = new FormData();
    formData.append("entry.497349393", data.firstName);
    formData.append("entry.1639276764", data.lastName);
    formData.append("entry.1575538379", data.companyName || "");
    formData.append("entry.1588386655", "Netherlands");
    formData.append("entry.647121543", data.streetAddress);
    formData.append("entry.1612991386", data.apartment || "");
    formData.append("entry.1301291309", data.city);
    formData.append("entry.2045573858", data.postcode);
    formData.append("entry.1520191789", data.phone);
    formData.append("entry.441161009", data.email);
    formData.append("entry.292612972", data.orderNotes || "");
    formData.append("entry.1322787056", dish || "");
    formData.append("entry.82284634", quantity.toString());
    formData.append("entry.104603798", shippingMethod === 'delivery' ? 'Delivery' : 'Pickup');
    formData.append("entry.1796185331", `€${subtotal.toFixed(2)}`);
    formData.append("entry.489857107", `€${total.toFixed(2)}`);

    startTransition(async () => {
        try {
            await fetch(googleFormUrl, {
                method: "POST",
                body: formData,
                mode: "no-cors", 
            });
            
            // Redirect to thank you page with order details
            const queryParams = new URLSearchParams({
                name: data.firstName,
                dish: dish || "",
                quantity: quantity.toString(),
                total: total.toFixed(2),
            });
            router.push(`/order/thank-you?${queryParams.toString()}`);
            
        } catch (error) {
            toast({
                title: "Submission Error",
                description: "There was an issue submitting your order. Please try again or contact us directly.",
                variant: "destructive",
            });
        }
    });
  }

  if (!dish || !priceString) {
      return (
        <div className='text-center py-12'>
            <p className="text-muted-foreground mb-6">No dish selected. Please go back to the menu and select an item to order.</p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/menu">Go to Menu</Link>
            </Button>
        </div>
      )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processOrder)} className="space-y-12">
        <div>
          <h2 className="text-2xl font-headline font-semibold mb-8 text-foreground">Billing details</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem><FormLabel>First name *</FormLabel><FormControl><Input className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                    <FormItem><FormLabel>Last name *</FormLabel><FormControl><Input className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
            <FormField control={form.control} name="companyName" render={({ field }) => (
                <FormItem><FormLabel>Company name (optional)</FormLabel><FormControl><Input className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            
            <FormItem>
                <FormLabel>Country / Region *</FormLabel>
                <FormControl><Input value="Netherlands" disabled className="bg-muted/20 border-white/5 opacity-50" /></FormControl>
            </FormItem>

            <FormField control={form.control} name="streetAddress" render={({ field }) => (
                <FormItem><FormLabel>Street address *</FormLabel><FormControl><Input placeholder="House number and street name" className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="apartment" render={({ field }) => (
                <FormItem><FormLabel>Apartment, suite, unit, etc. (optional)</FormLabel><FormControl><Input placeholder="Apartment, suite, unit, etc." className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem><FormLabel>Town / City *</FormLabel><FormControl><Input className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="postcode" render={({ field }) => (
                    <FormItem><FormLabel>Postcode / ZIP *</FormLabel><FormControl><Input className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone *</FormLabel><FormControl><Input type="tel" className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email address *</FormLabel><FormControl><Input type="email" className="bg-background/50 border-white/10" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
          </div>
        </div>

        <Separator className="bg-white/5" />
        
        <FormField control={form.control} name="orderNotes" render={({ field }) => (
            <FormItem><FormLabel>Order notes (optional)</FormLabel><FormControl><Textarea placeholder="Notes about your order, e.g. special notes for delivery." className="bg-background/50 border-white/10 min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <Separator className="bg-white/5" />

        <div>
            <h2 className="text-2xl font-headline font-semibold mb-8 text-foreground">Your order</h2>
            <div className="glass-card-dark p-8 md:p-10 border-white/5">
                <div className="flow-root">
                    <div className="flex justify-between font-bold text-primary uppercase tracking-widest text-xs">
                        <span>Product</span>
                        <span>Subtotal</span>
                    </div>
                    <Separator className="my-6 bg-white/10"/>
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col'>
                            <span className="text-foreground font-semibold text-lg">{dish}</span>
                             <div className="flex items-center gap-4 mt-4">
                                <Button type='button' variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/20 hover:bg-primary hover:text-primary-foreground" onClick={() => handleQuantityChange(-1)}><Minus className="h-4 w-4"/></Button>
                                <span className="font-bold w-4 text-center text-foreground">{quantity}</span>
                                <Button type='button' variant="outline" size="icon" className="h-8 w-8 rounded-full border-white/20 hover:bg-primary hover:text-primary-foreground" onClick={() => handleQuantityChange(1)}><Plus className="h-4 w-4"/></Button>
                            </div>
                        </div>
                        <span className="font-bold text-lg text-foreground">€{subtotal.toFixed(2)}</span>
                    </div>
                    <Separator className="my-6 bg-white/10"/>
                    <div className="space-y-4">
                         <div className="flex justify-between text-muted-foreground"><span className='font-medium'>Subtotal</span> <span className="font-semibold text-foreground">€{subtotal.toFixed(2)}</span></div>
                         <div className="flex justify-between text-muted-foreground"><span className='font-medium'>Shipping</span> <span className="text-foreground">{shippingMethod === 'pickup' ? 'Pickup' : `Delivery: €${shippingCost.toFixed(2)}`}</span></div>
                    </div>
                     <Separator className="my-6 bg-white/10"/>
                     <div className="flex justify-between text-2xl"><span className='font-bold text-foreground'>Total</span> <span className="font-bold text-primary">€{total.toFixed(2)}</span></div>
                </div>
                <div className="mt-10">
                    <FormField
                        control={form.control}
                        name="shipping"
                        render={({ field }) => (
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormItem className="flex items-center space-x-3 space-y-0 p-4 rounded-2xl border border-white/10 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 transition-all">
                                    <FormControl><RadioGroupItem value="delivery" /></FormControl>
                                    <FormLabel className="font-semibold cursor-pointer text-foreground">Delivery (€5,00)</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 p-4 rounded-2xl border border-white/10 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 transition-all">
                                    <FormControl><RadioGroupItem value="pickup" /></FormControl>
                                    <FormLabel className="font-semibold cursor-pointer text-foreground">Pickup (Free)</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        )}
                    />
                </div>
                <div className="mt-8 p-6 bg-primary/10 rounded-2xl border border-primary/20 text-center">
                    <p className="font-bold text-primary tracking-wide">CASH OR TIKKIE PAYMENT ON DELIVERY / PICKUP</p>
                </div>
                 <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Need help? Place your order via Instagram DM.
                    </p>
                    <Button asChild variant="link" className="text-primary font-bold hover:no-underline">
                        <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer">Message on Instagram <ArrowRight className="ml-2 h-4 w-4"/></a>
                    </Button>
                </div>
            </div>
        </div>

        <div className="text-xs text-muted-foreground/60 leading-relaxed max-w-2xl">
             <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy. We value your privacy and trust.</p>
        </div>

        <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-white text-background font-bold text-xl py-8 rounded-2xl luxury-button transition-all border-none">
            {isPending ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> PLACING ORDER...</> : "PLACE ORDER"}
        </Button>
      </form>
    </Form>
  );
}
