import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ByeWind Dashboard",
  description: "A high-fidelity clone of the ByeWind dashboard featuring dark/light mode, data visualization, and order management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground antialiased overflow-hidden font-sans h-full`}>
        {children}
      </body>
    </html>
  );
}