import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import CookieConsent from "./cookie-consent";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AMICABLE TECH | Phone Support, Repairs & Unlocking",
    template: "%s | AMICABLE TECH",
  },
  description:
    "Explore phone repair and maintenance, software support, and unlocking enquiries with AMICABLE TECH in Uyo, Akwa Ibom State.",
  applicationName: "AMICABLE TECH",
  icons: {
    icon: [{ url: "/brand/amicable-tech-icon.png", type: "image/png", sizes: "256x256" }],
    apple: "/brand/amicable-tech-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "AMICABLE TECH",
    title: "AMICABLE TECH | Phone Support, Repairs & Unlocking",
    description:
      "Phone repair and maintenance, software support, and unlocking enquiries in Uyo, Akwa Ibom State.",
    images: [{ url: "/brand/amicable-tech-logo.jpeg", width: 1254, height: 1254, alt: "AMICABLE TECH brand logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMICABLE TECH | Phone Support, Repairs & Unlocking",
    description:
      "Phone repair and maintenance, software support, and unlocking enquiries in Uyo, Akwa Ibom State.",
    images: ["/brand/amicable-tech-logo.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}<CookieConsent /></body>
    </html>
  );
}
