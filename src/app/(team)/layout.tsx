import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/style/globals.css";
import { cn } from "@/lib/utils";
import SideBarTeam from "@/components/navigation/sidebarTeam";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "PlanJect",
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
          "min-h-screen bg-gray-100 font-sans antialiased ",
          fontSans.variable
        )}
      >
        <SideBarTeam />
        <main className="px-10 w-10/12 bg-gray-100 inset-y-0 right-0 absolute">
          {children}
        </main>
      </body>
    </html>
  );
}
