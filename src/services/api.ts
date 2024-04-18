import { clientHttp } from "@/lib/clientHttp";

interface bodyProps {
  username?: string;
  email?: string;
  role?: string;
  password?: string;
}

const { post } = clientHttp;

export const postRegister = (body: bodyProps) => post("auth/register", body);
