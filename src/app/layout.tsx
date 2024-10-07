import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const museoSans300 = localFont({
  src: "../assets/fonts/Museo Sans Cyrl 300.ttf",
  variable: "--font-300",
  weight: "300",
});
const museoSans700 = localFont({
  src: "../assets/fonts/Museo Sans Cyrl 700.ttf",
  variable: "--font-700",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Flowers-Ukraine",
  description: "Make a perfect present",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${museoSans300.variable} ${museoSans700.variable}`}>
        {children}
      </body>
    </html>
  );
}
