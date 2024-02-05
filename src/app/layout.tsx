import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["100","300","400","500","700","900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <main className="max-w-4xl mx-auto border">
        {children}

        <footer className="border-t p-8 text-center text-gray-500 mt-16">
          &copy; 2024 All rights reserved
        </footer>
      </main>  
      </body>
    </html>
  );
}
