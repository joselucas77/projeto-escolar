import { AppProvider } from "@/contexts/context";
import { Providers } from "./providers";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SuccessToast from "@/components/toast/success";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIU",
  description: "Sistema Inovador Escolar",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="bg-gray-300 dark:bg-gray-900">
        <AppProvider>
          <Providers>
            <Navbar />
            {children}
            <SuccessToast />
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
