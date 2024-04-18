import { postRegister } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useCreateRegister = () => {
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await postRegister(values);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const formSchema = z
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "",
      password: "",
      confirm: "",
    },
  });
  return {
    form,
    onSubmit,
  };
};
