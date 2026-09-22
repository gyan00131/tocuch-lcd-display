import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://touchlcddisplays.com"),
  title: {
    default: "Touch LCD Displays | HMI Touch Screen & TFT LCD Display Panels – DWIN",
    template: "%s | Touch LCD Displays",
  },
  description:
    "Leading supplier of DWIN UART LCD displays, HMI touch screen panels, and TFT LCD modules for industrial, automotive, medical, and military applications. Sizes 1.3\" to 21.5\".",
  keywords: [
    "touch LCD display",
    "HMI touch screen",
    "TFT LCD display",
    "DWIN display",
    "UART LCD",
    "industrial display",
    "capacitive touch panel",
    "LCD display India",
    "HMI panel",
    "touch screen module",
  ],
  authors: [{ name: "Touch LCD Displays" }],
  creator: "Touch LCD Displays",
  publisher: "Touch LCD Displays",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://touchlcddisplays.com",
    siteName: "Touch LCD Displays",
    title: "Touch LCD Displays | HMI Touch Screen & TFT LCD Display Panels",
    description:
      "Leading supplier of DWIN UART LCD displays, HMI touch screen panels for industrial, automotive, medical & military applications.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Touch LCD Displays" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Touch LCD Displays | HMI Touch Screen & TFT LCD",
    description:
      "DWIN UART LCD, HMI Touch Panels for industrial, automotive, medical & military. Sizes 1.3\" – 21.5\".",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
