import Dashboard from "@/components/views/dashboard";
import { getDashboard } from "@/services/api";
import { GetServerSideProps } from "next";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

// const getDataDashboard = async () => {
//   const cookie = getUserToken();
//   return cookie;
// };

export default async function Page() {
  // const { get } = cookies();
  // const dataId = get("userId");
  // const data = get("userToken");
  // console.log(data?.value, dataId?.value);

  return (
    <main>
      <div>
        {/* <Dashboard /> */}
        <p>PT</p>
        {/* <p> {data?.value} </p> */}
      </div>
    </main>
  );
}
