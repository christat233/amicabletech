import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMICABLE TECH | Phone Technical Support & Software Services",
  description:
    "Phone repair and maintenance, software support, and unlocking enquiries from AMICABLE TECH in Uyo, Akwa Ibom State.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
