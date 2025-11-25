"use server";

import { z } from "zod";

const cateringInquirySchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  eventDate: z.date({ required_error: "Please select a date for the event." }),
  guestCount: z.coerce.number().min(1, { message: "Number of guests must be at least 1." }),
  menuPreferences: z.string().min(10, { message: "Please provide some menu preferences (min. 10 characters)." }),
  message: z.string().optional(),
});

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitCateringInquiry(prevState: any, formData: FormData) {
  const validatedFields = cateringInquirySchema.safeParse({
    name: formData.get("name"),
    eventDate: new Date(formData.get("eventDate") as string),
    guestCount: formData.get("guestCount"),
    menuPreferences: formData.get("menuPreferences"),
    message: formData.get("message"),
  });
  
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  // In a real application, you would process this data (e.g., send an email, save to a database)
  console.log("Catering Inquiry Received:", validatedFields.data);

  return { message: "Thank you! Your catering inquiry has been submitted successfully." };
}


export async function submitContactForm(prevState: any, formData: FormData) {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please correct the errors and try again.",
        };
    }

    // In a real application, you would process this data
    console.log("Contact Form Submission:", validatedFields.data);

    return { message: "Thank you for your message! We will get back to you shortly." };
}
