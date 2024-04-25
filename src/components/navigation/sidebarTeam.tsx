"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
const SideBarTeam = () => {
  const pathName = usePathname();

  return (
    <main className="w-2/12 bg-gray-900 flex flex-col px-5 py-6 fixed h-screen">
      <p className="text-center text-xl font-semibold mb-10 border-b-2 border-slate-50 text-slate-50">
        Dashboard Team
      </p>

      <section className="flex flex-col gap-y-2">
        <Link
          href={"/dashboard"}
          className={`${
            pathName === "/dashboard"
              ? "text-gray-900 bg-gray-100"
              : "text-gray-50 hover:bg-gray-100 hover:text-gray-900"
          } mt-5 p-3 rounded-xl  duration-300 flex items-center gap-x-3`}
        >
          <FaHome /> Home
        </Link>
        <Link
          href={"/task"}
          className={`${
            pathName === "/task"
              ? "text-gray-900 bg-gray-100"
              : "text-gray-50 hover:bg-gray-100 hover:text-gray-900"
          } mt-5 p-3 rounded-xl  duration-300 flex items-center gap-x-3`}
        >
          <FaTasks /> Task
        </Link>
        <div className="border-b-2 border-red-900 "></div>
        <Link
          href={"/"}
          className="text-slate-50 mt-5 p-3 rounded-xl bg-red-500 hover:bg-red-600 duration-300 flex items-center gap-x-3"
        >
          <BiLogOut /> Log Out
        </Link>
      </section>
    </main>
  );
};

export default SideBarTeam;
