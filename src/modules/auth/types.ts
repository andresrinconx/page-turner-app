import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignInFormData = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
