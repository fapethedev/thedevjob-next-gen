import {z} from "zod";


export const NewsletterFormSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    agreeToEmails: z.boolean().refine(val => val, {
        message: 'You must agree to receive emails'
    })
});

export type NewsletterFormValues = z.infer<typeof NewsletterFormSchema>;


export const ContactFormSchema = z.object({
    fullName: z.string().trim().min(2, "Full name must be at least 2 characters"),
    email: z.string().trim().toLowerCase().email("Invalid email address"),
    subject: z.string().trim().min(5, "Subject must be at least 5 characters"),
    message: z.string().trim().min(10, "Message must be at least 10 characters"),
    newsletter: z.boolean().default(false),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
