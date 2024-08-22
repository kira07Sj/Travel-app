
import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/Ux App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <body >
        <Navbar></Navbar>
        <main className=" relative overflow-hidden">
        {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
