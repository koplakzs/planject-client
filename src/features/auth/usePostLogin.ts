import { postLogin } from "@/services/api";
import { loginSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface userResponse {
  token: string;
  userId: string;
  username: string;
  role: string;
}

interface postLoginResponse {
  status: string;
  statusCode: number;
  data: userResponse;
}

export const usePostLogin = () => {
  const router = useRouter(); // Initialize useRouter hook
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const response: postLoginResponse = await postLogin({
        email: values.email,
        password: values.password,
      });

      // console.log(response);
      if (response.statusCode !== 200) throw new Error("failed");
      if (response.data.role === "pt") {
        router.push("/dashboard"); // Redirect on the client-side
      } else if (response.data.role === "pm") {
        router.push("/manager"); // Redirect on the client-side
      }
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    resolver: zodResolver(loginSchema),
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
