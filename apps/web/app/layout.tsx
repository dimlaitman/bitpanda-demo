import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CryptoProvider from "./providers";
import { PrimitiveMiddleware } from "./middleware";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "BitPanda demo | DeFi",
  description: "BitPanda demo | DeFi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen overflow-hidden">
      <body className="flex items-center justify-center h-full w-full bg-black">
        <div className="h-[700px] w-[400px]  rounded-xl shadow-lg overflow-hidden outline  outline-1 outline-zinc-500">
          <CryptoProvider>
            <PrimitiveMiddleware>{children}</PrimitiveMiddleware>
          </CryptoProvider>
        </div>
      </body>
    </html>
  );
}
