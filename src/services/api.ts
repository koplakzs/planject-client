import { clientHttp } from "@/lib/clientHttp";

interface bodyProps {
  username?: string;
  email?: string;
  role?: string;
  password?: string;
}

const { post, get } = clientHttp;

export const postRegister = (body: bodyProps) => post("auth/register", body);
export const postLogin = (body: bodyProps) => post("auth", body);

export const getDashboard = () => get("dashboard");
export const getManager = () => get("pm/dashbaord");
