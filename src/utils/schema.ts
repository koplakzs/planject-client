import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Must be valid email" })
    .min(1, { message: "This is Required" }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#/$%.,^&*])/, {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
    }),
});

export const registerSchema = z
  .object({
    username: z.string().min(1),
    role: z.string().refine((value) => ["pm", "pt"].includes(value)),
    email: z.string().email().min(1),
    password: z
      .string()
      .min(6, {
        message: "Password must contain at least 6 characters",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#/$%.,^&*])/, {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
      }),
    confirm: z.string(),
  })
  .refine((value) => value.password === value.confirm, {
    message: "Password not match",
    path: ["confirm"],
  });
