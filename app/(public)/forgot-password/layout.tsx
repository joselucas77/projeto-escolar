import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./style.css";
import { AppProvider } from "@/contexts/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forgot Password",
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
          {children}
          <ToastContainer limit={3} />
        </AppProvider>
      </body>
    </html>
  );
}
