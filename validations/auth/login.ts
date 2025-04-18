import z from "zod"

export const loginValidation = z.object({
  email: z.string({ required_error: "Email is required"}).email({ message: "Invalid email"}),
  password: z.string({ required_error: "Password is required" })
});

export type LoginValues = z.infer<typeof loginValidation>;