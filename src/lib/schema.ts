import {z} from "zod";


export const NewsletterFormSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    agreeToEmails: z.boolean().refine(val => val, {
        message: 'You must agree to receive emails'
    })
});

export type NewsletterFormValues = z.infer<typeof NewsletterFormSchema>;
