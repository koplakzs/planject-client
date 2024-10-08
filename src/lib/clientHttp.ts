interface bodyProps {
  username?: string;
  email?: string;
  role?: string;
  password?: string;
}

interface fecthResponse<T = any> {
  data?: T;
  message?: string;
  statusCode?: number;
  status?: string;
}

export const clientHttp = {
  post: async (endpoint: string, body: bodyProps): Promise<fecthResponse> => {
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
  get: async (endpoint: string): Promise<fecthResponse> => {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);

    const config: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 18|9B9MCPIIDuIozhnrBSbudjIcdAer68kX7NeuYf9X7dc2d593",
      },
    };
    const response = await fetch(url, config);

    const data = await response.json();

    return data;
  },
};
