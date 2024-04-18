"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed w-screen px-10 bg-gray-100">
      <div className="flex justify-between items-center py-6">
        <p className="text-3xl font-bold">PlanJect</p>
        <div className="flex gap-5">
          <Button variant={"link"} onClick={() => router.push("/")}>
            Home
          </Button>
          <Button variant={"outline"} onClick={() => router.push("/auth")}>
            Log In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
