import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name must be at least one character." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z
    .string()
    .min(1, { message: "Message must be at least one character." }),
});

export type FormData = z.infer<typeof formSchema>;
