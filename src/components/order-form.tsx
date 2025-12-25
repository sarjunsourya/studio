

"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useMemo } from 'react';
import { Loader2, Plus, Minus, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

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
  const dish = searchParams.get('dish');
  const priceString = searchParams.get('price');

  const [quantity, setQuantity] = useState(1);

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
  const shippingCost = shippingMethod === 'delivery' ? 5.00 : 0; // Example shipping cost
  const total = subtotal + shippingCost;


  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };
  
  function processOrder(data: OrderFormValues) {
    const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSecHcfSAshKggQSb3srgGUKsb98jpDYCEn1zPL38Psy8E7Zgg/viewform?usp=pp_url";
    
    const params = new URLSearchParams({
        "entry.497349393": data.firstName,
        "entry.1639276764": data.lastName,
        "entry.1575538379": data.companyName || "",
        "entry.1588386655": "Netherlands",
        "entry.647121543": data.streetAddress,
        "entry.1612991386": data.apartment || "",
        "entry.1301291309": data.city,
        "entry.2045573858": data.postcode,
        "entry.1520191789": data.phone,
        "entry.441161009": data.email,
        "entry.292612972": data.orderNotes || "",
        "entry.1322787056": dish || "",
        "entry.82284634": quantity.toString(),
        "entry.104603798": shippingMethod === 'delivery' ? 'Delivery' : 'Pickup',
        "entry.1796185331": `€${subtotal.toFixed(2)}`,
        "entry.489857107": `€${total.toFixed(2)}`,
    });

    const finalUrl = `${baseUrl}&${params.toString()}`;
    window.open(finalUrl, '_blank');
  }

  if (!dish || !priceString) {
      return (
        <div className='text-center text-destructive'>
            <p>No dish selected. Please go back to the menu and select an item to order.</p>
            <Button asChild variant="link" className="mt-4">
                <Link href="/menu">Go to Menu</Link>
            </Button>
        </div>
      )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(processOrder)} className="space-y-8">
        <div>
          <h2 className="text-2xl font-headline font-semibold mb-6">Billing details</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem><FormLabel>First name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                    <FormItem><FormLabel>Last name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
            <FormField control={form.control} name="companyName" render={({ field }) => (
                <FormItem><FormLabel>Company name (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            
            <FormItem>
                <FormLabel>Country / Region *</FormLabel>
                <FormControl><Input value="Netherlands" disabled /></FormControl>
            </FormItem>

            <FormField control={form.control} name="streetAddress" render={({ field }) => (
                <FormItem><FormLabel>Street address *</FormLabel><FormControl><Input placeholder="House number and street name" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="apartment" render={({ field }) => (
                <FormItem><FormLabel>Apartment, suite, unit, etc. (optional)</FormLabel><FormControl><Input placeholder="Apartment, suite, unit, etc." {...field} /></FormControl><FormMessage /></FormItem>
            )} />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem><FormLabel>Town / City *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="postcode" render={({ field }) => (
                    <FormItem><FormLabel>Postcode / ZIP *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone *</FormLabel><FormControl><Input type="tel" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Email address *</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                )} />
            </div>
          </div>
        </div>

        <Separator />
        
        {/* We can add ship to different address logic here if needed */}

        <FormField control={form.control} name="orderNotes" render={({ field }) => (
            <FormItem><FormLabel>Order notes (optional)</FormLabel><FormControl><Textarea placeholder="Notes about your order, e.g. special notes for delivery." {...field} /></FormControl><FormMessage /></FormItem>
        )} />

        <Separator />

        <div>
            <h2 className="text-2xl font-headline font-semibold mb-6">Your order</h2>
            <div className="border rounded-lg p-6 bg-secondary/30">
                <div className="flow-root">
                    <div className="flex justify-between font-semibold">
                        <span>Product</span>
                        <span>Subtotal</span>
                    </div>
                    <Separator className="my-4"/>
                    <div className="flex justify-between items-center">
                        <div className='flex flex-col'>
                            <span className="text-muted-foreground">{dish}</span>
                             <div className="flex items-center gap-2 mt-2">
                                <Button type='button' variant="outline" size="icon" className="h-6 w-6" onClick={() => handleQuantityChange(-1)}><Minus className="h-3 w-3"/></Button>
                                <span className="font-bold w-4 text-center">{quantity}</span>
                                <Button type='button' variant="outline" size="icon" className="h-6 w-6" onClick={() => handleQuantityChange(1)}><Plus className="h-3 w-3"/></Button>
                            </div>
                        </div>
                        <span className="font-semibold">€{subtotal.toFixed(2)}</span>
                    </div>
                    <Separator className="my-4"/>
                    <div className="space-y-2">
                         <div className="flex justify-between"><span className='font-semibold'>Subtotal</span> <span className="font-semibold">€{subtotal.toFixed(2)}</span></div>
                         <div className="flex justify-between"><span className='font-semibold'>Shipping</span> <span>{shippingMethod === 'pickup' ? 'Pickup' : `Delivery: €${shippingCost.toFixed(2)}`}</span></div>
                    </div>
                     <Separator className="my-4"/>
                     <div className="flex justify-between text-xl"><span className='font-bold'>Total</span> <span className="font-bold">€{total.toFixed(2)}</span></div>
                </div>
                <div className="mt-6">
                    <FormField
                        control={form.control}
                        name="shipping"
                        render={({ field }) => (
                            <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-2">
                                <FormItem className="flex items-center space-x-3 space-y-0 p-3 rounded-md border has-[[data-state=checked]]:border-primary">
                                    <FormControl><RadioGroupItem value="delivery" /></FormControl>
                                    <FormLabel className="font-normal mb-0!">Delivery</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0 p-3 rounded-md border has-[[data-state=checked]]:border-primary">
                                    <FormControl><RadioGroupItem value="pickup" /></FormControl>
                                    <FormLabel className="font-normal mb-0!">Pickup</FormLabel>
                                </FormItem>
                            </RadioGroup>
                        )}
                    />
                </div>
                <div className="mt-6 p-4 bg-background rounded-md border border-primary/50 text-center">
                    <p className="font-semibold">Cash or Tikkie payment on Delivery / Pickup</p>
                </div>
                 <div className="mt-6 text-center text-sm">
                    <p>
                      You can also place an order directly via Instagram DM.
                    </p>
                    <Button asChild variant="link" className="text-primary">
                        <a href="https://instagram.com/thedivinekitchen5/" target="_blank" rel="noopener noreferrer">Go to Instagram <ArrowRight className="ml-1 h-4 w-4"/></a>
                    </Button>
                </div>
            </div>
        </div>

        <div className="text-sm text-muted-foreground">
             <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 mt-6">
            Place order
        </Button>
      </form>
    </Form>
  );
}
