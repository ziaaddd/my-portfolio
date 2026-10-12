import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }).max(100),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters' }).max(150),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }).max(2000),
  budget: z.string().optional(),
  services: z.array(z.string()).optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
