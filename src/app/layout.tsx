import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import {Montserrat, Quicksand, Zilla_Slab, Roboto} from 'next/font/google';
import "./globals.css";
import ThemeWrapper from "./components/wrappers/ThemeWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: '400',
});
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: '400',
})

export const metadata: Metadata = {
  title: "Vintage Wheels",
  description: "Ecommerce especializado en la venta y reparación de bicicletas vintage.",
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${quicksand.variable} antialiased`}>
        <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}
