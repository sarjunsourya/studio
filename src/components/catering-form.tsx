"use client"

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

import { submitCateringInquiry } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/datepicker";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";


const cateringInquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  eventDate: z.date({ required_error: "Please select a date for the event." }),
  guestCount: z.coerce.number().min(1, { message: "Number of guests must be at least 1." }),
  address: z.string().min(10, { message: "Please provide your event address." }),
  foodType: z.enum(['Vegetarian', 'Vegan', 'Both'], { required_error: "Please select a food type."}),
  menuPreferences: z.string().min(10, { message: "Please provide some menu preferences (min. 10 characters)." }),
  message: z.string().optional(),
});

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
        {pending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Inquiry"}
      </Button>
    );
  }

export function CateringForm() {
    const [state, formAction] = useActionState(submitCateringInquiry, { message: "", errors: {} });
    const { toast } = useToast();

    const form = useForm<z.infer<typeof cateringInquirySchema>>({
        resolver: zodResolver(cateringInquirySchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            guestCount: 1,
            address: "",
            menuPreferences: "",
            message: "",
            ...state.values,
        },
    });

    useEffect(() => {
        if (state.message && !state.errors) {
            toast({
                title: "Success!",
                description: state.message,
                variant: "default",
            });
            form.reset();
        } else if (state.message && state.errors) {
             toast({
                title: "Error",
                description: state.message,
                variant: "destructive",
            });
        }
    }, [state, toast, form]);

  return (
    <Form {...form}>
        <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                            <Input placeholder="+31 12 345 6789" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>Event Date</FormLabel>
                        <FormControl>
                            <DatePicker date={field.value} setDate={field.onChange} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
            </div>
             <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Event Address</FormLabel>
                    <FormControl>
                        <Input placeholder="123 Main St, Delft" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormField
                    control={form.control}
                    name="guestCount"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Number of Guests</FormLabel>
                        <FormControl>
                            <Input type="number" min="1" placeholder="25" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="foodType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Food Preference</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select food preference" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                                    <SelectItem value="Vegan">Vegan</SelectItem>
                                    <SelectItem value="Both">Both</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField
                control={form.control}
                name="menuPreferences"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Menu Preferences</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="e.g., no nuts, focus on specific dishes..."
                        className="min-h-24"
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
             <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Additional Message (Optional)</FormLabel>
                    <FormControl>
                    <Textarea
                        placeholder="Any other details like venue specifics, occasion, etc."
                        {...field}
                    />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <SubmitButton />
        </form>
    </Form>
  );
}
