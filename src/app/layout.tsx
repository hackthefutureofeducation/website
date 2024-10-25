import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/deviders.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hack the Future of Education",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
