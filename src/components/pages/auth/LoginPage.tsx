import { LoginForm } from "@/components/form/login";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen ">
      <div className="border-2 border-primary rounded-xl p-10 flex flex-col w-5/12">
        <p className="text-2xl font-bold text-center mb-4">Log In</p>
        <div>
          <LoginForm />
          <p className="text-sm mt-3 text-center text-primary">
            Not registred ?{" "}
            <Link
              href={"/auth/register"}
              className="text-secondary-foreground hover:border-b-2 pointer border-primary"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
