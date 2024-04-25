import { postLogin } from "@/services/api";
import { setUserId, setUserToken } from "@/utils/helper";
import { loginSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { postRegister } from "@/services/api";
import { registerSchema } from "@/utils/schema";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { handler } from "tailwindcss-animate";

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

const useAuth = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [isLoading, setIsLoading] = useState(false);
  // const setAuthCookies = async (userToken: string, userId: string) => {
  //   setUserId(userId);
  //   setUserToken(userToken);
  // };

  // Form
  const formRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      role: "",
      password: "",
      confirm: "",
    },
  });
  const formLogin = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Login
  const handleLogin = async (values: z.infer<typeof loginSchema>) => {
    setIsLoading(true);
    try {
      const response: postLoginResponse = await postLogin({
        email: values.email,
        password: values.password,
      });

      if (response.statusCode !== 200) {
        throw new Error("failed");
      } else if (response.statusCode === 200) {
        console.log("success", response);
        // await setAuthCookies(response.data.token, response.data.userId);
        if (response.data.role === "pt") {
          router.push("/dashboard");
        } else if (response.data.role === "pm") {
          router.push("/manager");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Register

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    setIsLoading(true);
    try {
      const response = await postRegister(values);

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    formLogin,
    formRegister,
    handleLogin,
    handleRegister,
  };
};

export default useAuth;
