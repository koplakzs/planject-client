interface bodyProps {
  username?: string;
  email?: string;
  role?: string;
  password?: string;
}

export const clientHttp = {
  post: async (endpoint: string, body: bodyProps) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
    const config: RequestInit = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, config);

    const data = await response.json();

    return data;
  },
};
