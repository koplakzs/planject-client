import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-screen px-10 bg-gray-100 border-b-2 border-gray-300">
      <div className="flex justify-between items-center py-6">
        <p className="text-3xl font-bold">PlanJect</p>
        <div className="flex gap-5">
          <Link href={"/"}>
            <Button variant={"link"}>Home</Button>
          </Link>
          <Link href={"/auth"}>
            <Button variant={"outline"}>Log In</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
