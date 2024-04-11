import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppProvider } from "@/contexts/context";
import "./style.css";
import SuccessToast from "@/components/toast/success";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Login",
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
          <SuccessToast />
        </AppProvider>
      </body>
    </html>
  );
}
