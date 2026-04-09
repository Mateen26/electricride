import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geek-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electric Ride | Future of Mobility",
  description: "Experience the ultimate electric scooter. Futuristic design, unmatched performance.",
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
