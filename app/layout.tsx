import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import Navbar from "@/components/navbar";
import GlobalContextProvider from "./contexts/GlobalContext";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Samplicity",
  description: "Free and premium, high quality sample packs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <body className={roboto.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </GlobalContextProvider>
  );
}
