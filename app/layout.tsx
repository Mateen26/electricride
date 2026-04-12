import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geek-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GWV.EV Motorcycles | The Future of Riding",
  description: "Experience the thrill of electric riding with Green Wave Volts. High-performance 3000W EV motorcycles designed for power, efficiency, and sustainability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
