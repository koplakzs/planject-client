import { LoginForm } from "@/components/form/login";
import { RegisterForm } from "@/components/form/register";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen ">
      <div className="border border-2 border-primary rounded-xl px-10 py-5 flex flex-col w-5/12">
        <p className="text-2xl font-bold text-center mb-4">Register</p>
        <div>
          <RegisterForm />
          <p className="text-sm mt-3 text-center text-primary">
            Already registered ?{" "}
            <Link
              href={"/auth"}
              className="text-secondary-foreground hover:border-b-2 pointer border-primary"
            >
              Log in to your account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
