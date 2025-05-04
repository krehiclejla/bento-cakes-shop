import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/CartContext"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bento Cakes Shop",
  description: "We sell mini bento cakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider> {/* Wrap the application with CartProvider */}
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
