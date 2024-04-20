import { postRegister } from "@/services/api";
import { registerSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const usePostRegister = () => {
  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      const response = await postRegister(values);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
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
