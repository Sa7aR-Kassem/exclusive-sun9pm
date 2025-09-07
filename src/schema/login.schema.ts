import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(6, "Password must be at least 6 characters long"),
});

export type LoginFormPayload = z.infer<typeof loginFormSchema>;
