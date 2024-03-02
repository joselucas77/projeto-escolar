import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { AppProvider } from "../utils/context";
import { Providers } from "./providers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIE",
  description: "Sistema Inovador Escolar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={poppins.className}>
        <AppProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
