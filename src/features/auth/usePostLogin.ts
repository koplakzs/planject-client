import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const usePostLogin = () => {
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const formSchema = z.object({
    email: z
      .string()
      .email({ message: "Must be valid email" })
      .min(1, { message: "This is Required" }),
    password: z
      .string()
      .min(6, {
        message: "Username must be at least 2 characters.",
      })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#/$%.,^&*])/, {
        message:
          "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    form,
    onSubmit,
  };
};
