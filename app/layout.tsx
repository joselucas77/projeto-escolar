import { AppProvider } from "@/contexts/context";
import Navbar from "../components/navbar";
import { Providers } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIU",
  description: "Sistema Inovador Escolar",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body>
        <AppProvider>
          <Providers>
            <Navbar />
            {children}
            <ToastContainer />
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
