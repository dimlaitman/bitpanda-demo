import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { PrimitiveMiddleware } from "./middleware";
import { Links } from "./components/footer-links";

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
      <body className="flex items-center justify-center h-full w-full bg-black flex-col space-y-2">
        <div className="h-[700px] w-[400px]  rounded-xl shadow-lg overflow-hidden outline  outline-1 outline-zinc-500">
          <Providers>
            <PrimitiveMiddleware>{children}</PrimitiveMiddleware>
          </Providers>
        </div>
        <Links />
      </body>
    </html>
  );
}
