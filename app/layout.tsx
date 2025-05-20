import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const InterSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  icons:{
    icon: '/logo.svg'
  },
  title: "Kiskas | Custom Email Setup",
  description: "Affordable, hassle-free custom email addresses on your own domain — powered by Kiskas.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterSans.variable} antialiased scroll-smooth`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
