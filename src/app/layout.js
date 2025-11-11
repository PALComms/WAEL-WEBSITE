import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (for App Router)
export const metadata = {
  title: {
    default: "West Atlantic Energy Nigeria Limited",
    template: "%s | West Atlantic Energy Nigeria Limited",
  },
  description: "West Atlantic Energy Nigeria Limited – Your trusted partner in energy operations.",
  keywords: ["West Africa", "energy", 'Nigeria', "Modern energy operations"],
  authors: [{ name: "Wael Team", url: "https://yourdomain.com" }],
  creator: "Wael Team",
  metadataBase: new URL("https://yourdomain.com"), // change to your actual domain
  openGraph: {
    title: "West Atlantic Energy Nigeria Limited",
    description: "Wael – Your trusted partner in energy operations.",
    url: "https://wael.com",
    siteName: "West Atlantic Energy Nigeria Limited",
    images: [
      {
        url: "/wael-logo.png", // place in /public
        width: 1200,
        height: 630,
        alt: "West Atlantic Energy Nigeria Limited Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West Atlantic Energy Nigeria Limited",
    description: "WAEL – Your trusted partner in energy operations.",
    creator: "@yourtwitter", // optional
    images: ["/wael-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // place this in /public
  },
  manifest: "/site.webmanifest", // place this in /public
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}  flex flex-col min-h-screen  antialiased`}>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
