"use server";

import { z } from "zod";
import { cookies } from "next/headers";

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

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const adminLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function submitCateringInquiry(prevState: any, formData: FormData) {
  const validatedFields = cateringInquirySchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    eventDate: new Date(formData.get("eventDate") as string),
    guestCount: formData.get("guestCount"),
    address: formData.get("address"),
    foodType: formData.get("foodType"),
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

/**
 * Handles custom admin login.
 */
export async function adminLogin(prevState: any, formData: FormData) {
  const validatedFields = adminLoginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return { error: "Invalid input" };
  }

  const { username, password } = validatedFields.data;

  // STRICT CREDENTIALS CHECK
  // Note: In production, use hashed passwords and secret management.
  if (username === "roopag14" && password === "TheDivineKitchen1!") {
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "tdk_secret_session_active", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return { success: true };
  }

  return { error: "Invalid username or password" };
}

/**
 * Logs out the admin.
 */
export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
}

/**
 * Checks if admin session is active.
 */
export async function checkAdminSession() {
  const cookieStore = await cookies();
  return cookieStore.get("admin_session")?.value === "tdk_secret_session_active";
}
