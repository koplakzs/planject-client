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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import useAuth from "@/features/auth/useAuth";
import { LoadingSpinner } from "../ui/loading-spinner";
import { UseFormReturn } from "react-hook-form";
import { registerSchema } from "@/utils/schema";
import { TypeOf, z } from "zod";

interface propsRegisterForm {
  isLoading: boolean;
  formRegister: UseFormReturn<z.infer<typeof registerSchema>>;
  handleRegister: (value: TypeOf<typeof registerSchema>) => Promise<void>;
}

export function RegisterForm({
  isLoading,
  formRegister,
  handleRegister,
}: propsRegisterForm) {
  return (
    <section>
      <Form {...formRegister}>
        <form onSubmit={formRegister.handleSubmit(handleRegister)}>
          <div className="space-y-3">
            <FormField
              control={formRegister.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} type="email" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-x-5"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="pt" />
                        </FormControl>
                        <FormLabel>Project Team</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="pm" />
                        </FormControl>
                        <FormLabel>Project Manager</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
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
            <FormField
              control={formRegister.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirm Password"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type={isLoading ? "button" : "submit"}
            className="w-full mt-7 gap-3"
          >
            {isLoading ? (
              <>
                <LoadingSpinner className="w-6 h-6" /> Loading
              </>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
}
