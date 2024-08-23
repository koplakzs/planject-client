"use client";
import { RegisterForm } from "@/components/form/register";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import useAuth from "@/features/auth/useAuth";
import Link from "next/link";

const RegisterPage = () => {
  const {
    state: { isLoading, isFailRegis, isSuccesRegis },
    closeSuccessRegis,
    closeFailRegis,
    formRegister,
    handleRegister,
  } = useAuth();

  return (
    <main className="flex items-center justify-center h-screen pt-14 ">
      <div className=" border-2 border-primary rounded-xl px-10 py-5 flex flex-col w-5/12">
        <p className="text-2xl font-bold text-center mb-4">Register</p>
        <div>
          <RegisterForm
            isLoading={isLoading}
            formRegister={formRegister}
            handleRegister={handleRegister}
          />
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
      <Dialog open={isSuccesRegis} onOpenChange={closeSuccessRegis}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogHeader>
              <DialogTitle className="text-xl">Registrasi Berhasil</DialogTitle>
              <DialogDescription>
                Silahkan kembali ke menu login :)
              </DialogDescription>
            </DialogHeader>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Dialog open={isFailRegis} onOpenChange={closeFailRegis}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogHeader>
              <DialogTitle className="text-xl">Registrasi Gagal</DialogTitle>
              <DialogDescription>
                Silahkan Registrasi Kembali !
              </DialogDescription>
            </DialogHeader>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default RegisterPage;
