'use server';

import { z } from "zod";

// Define form schema using Zod (can be shared or redefined here)
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters."
  }),
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  console.log("Form data submitted:", data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // In a real app, you would send this data to your backend/API endpoint
  // For now, we'll just return a success status
  // Example: Send email, save to DB, etc.

  // You might want to add proper error handling here in a real scenario
  // For instance, if an email service fails to send.
  // For now, we assume it always succeeds after the delay.
  return { success: true, message: "Message sent successfully!" };
}

// Export the schema type if needed elsewhere
export type ContactFormData = z.infer<typeof formSchema>;
