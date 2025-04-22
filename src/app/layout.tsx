import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from '@/providers/StyledComponentsRegistry';

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BProSys | Productos Financieros",
  description: "Soluciones financieras innovadoras para tus necesidades personales y empresariales",
  keywords: "fintech, productos financieros, inversiones, cuentas, tarjetas, préstamos, seguros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
        {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
