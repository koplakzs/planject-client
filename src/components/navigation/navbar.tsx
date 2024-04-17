"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const route = useRouter();
  return (
    <nav className="flex justify-between items-center py-6">
      <p className="text-3xl font-bold">PlanJect</p>
      <div className="flex gap-5">
        <Button variant={"link"} onClick={() => route.push("/")}>
          Home
        </Button>
        <Button variant={"outline"} onClick={() => route.push("/auth")}>
          Sign In
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
