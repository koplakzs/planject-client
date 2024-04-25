"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/features/auth/useAuth";

export function LoginForm() {
  const { isLoading, formLogin, handleLogin } = useAuth();
  return (
    <Form {...formLogin}>
      <form
        onSubmit={formLogin.handleSubmit(handleLogin)}
        className="space-y-8"
      >
        <FormField
          control={formLogin.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formLogin.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type={isLoading ? "button" : "submit"} className="w-full">
          {isLoading ? "Loading" : "Login"}
        </Button>
      </form>
    </Form>
  );
}
