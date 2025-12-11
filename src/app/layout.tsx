import { Call, Whatsapp } from "@/components";
import Footer from "@/components/footer/Footer";
import type { Metadata } from "next";
import { Geist, Nunito } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

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

      <Script id="chatbot-config" strategy="afterInteractive">
        {`
    window.eazbotConfig = {
       ndid: "ce30daa1-5102-4a78-83b1-90d926cd6cb7",
       hid: "48977167",
    };
  `}
      </Script>

      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
      <body
        className={`${geistSans.variable} ${nunito.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
        <Whatsapp whatsAppNumber="9667752735" />
        <Call callNumber="91 96677 52735" />
      </body>
    </html>
  );
}
