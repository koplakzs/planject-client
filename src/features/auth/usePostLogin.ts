import { postLogin } from "@/services/api";
import { setUserId, setUserToken } from "@/utils/helper";
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

  const setAuthCookies = async (userToken: string, userId: string) => {
    setUserId(userId);
    setUserToken(userToken);
  };
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const response: postLoginResponse = await postLogin({
        email: values.email,
        password: values.password,
      });

      if (response.statusCode !== 200) {
        throw new Error("failed");
      } else if (response.statusCode === 200) {
        console.log("success", response);
        await setAuthCookies(response.data.token, response.data.userId);
        if (response.data.role === "pt") {
          router.push("/dashboard");
        } else if (response.data.role === "pm") {
          router.push("/manager");
        }
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
