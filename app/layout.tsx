import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './ui/components/Footer'
import Navbar from "@/app/ui/components/Navbar";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyköpings Moské",
  description: "Nyköpings Moské är placerad i centrum av Nyköping. Vi erbjuder gemenskap och lärande.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv en">



      <body className={inter.className} >

        <Navbar />
        <div className="text-center text-sm text-gray-600 py-2">
          Webbplatsen är under konstruktion. Fler funktioner kommer snart!
        </div>

        <main className="min-h-screen "> {children} </main>

        <Footer />
      </body>


    </html>

  );
}
