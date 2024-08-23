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

// interface userResponse {
//   token: string;
//   userId: string;
//   username: string;
//   role: string;
// }

// interface postLoginResponse {
//   status: string;
//   statusCode: number;
//   data: userResponse;
// }

const useAuth = () => {
  const router = useRouter(); // Initialize useRouter hook
  const [state, setState] = useState({
    isLoading: false,
    isSuccesRegis: false,
    isFailRegis: false,
  });

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
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const response = await postLogin({
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
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  // Register

  const handleRegister = async (values: z.infer<typeof registerSchema>) => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const response = await postRegister(values);
      if (response.statusCode !== 200) {
        setState((prevState) => ({ ...prevState, isFailRegis: true }));
      } else {
        setState((prevState) => ({ ...prevState, isSuccesRegis: true }));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  const closeSuccessRegis = () =>
    setState((prevState) => ({ ...prevState, isSuccesRegis: false }));
  const closeFailRegis = () =>
    setState((prevState) => ({ ...prevState, isFailRegis: false }));

  return {
    state,
    formLogin,
    formRegister,
    handleLogin,
    handleRegister,
    closeSuccessRegis,
    closeFailRegis,
  };
};

export default useAuth;
