import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Google Font - Merienda
const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merienda",
});

export const metadata: Metadata = {
  title: "The AI Revolution",
  description: "How Artificial Intelligence Is Reshaping Our World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merienda.variable} font-merienda antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
