"use server";

import { cookies } from "next/headers";

const { set, get } = cookies();

export const setUserToken = (value: string) => {
  set("userToken", value, {
    httpOnly: true,
    path: "/",
  });
};
export const setUserId = (value: string) => {
  set("userId", value, {
    httpOnly: true,
    path: "/",
  });
};
// export const getUserToken = () => get("userToken");
export const getUserId = () => get("userID");
