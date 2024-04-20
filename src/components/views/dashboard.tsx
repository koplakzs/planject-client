"use client";

import { getDashboard } from "@/services/api";
import { useEffect } from "react";

export default function Dashboard() {
  const data = async () => {
    try {
      const res = await getDashboard();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <p>yoooo</p>
    </>
  );
}
