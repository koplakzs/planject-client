import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/style/globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Plan Ject",
  description: "Assigment Your Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-gray-100 font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="px-10">{children}</main>
      </body>
    </html>
  );
}
