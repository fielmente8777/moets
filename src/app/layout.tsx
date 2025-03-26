import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import { Call, Footer, Navbar, Whatsapp } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moets",
  description: "Moets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
        <Whatsapp whatsAppNumber="9667752735" />
        <Call callNumber="91 96677 52735" />
      </body>
    </html>
  );
}
