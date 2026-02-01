import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anish | Full Stack Web Developer",
  description: "Freelance Full Stack Web Developer based in India. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
  keywords: ["Anish", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Node.js", "Freelance", "India"],
  authors: [{ name: "Anish" }],
  openGraph: {
    title: "Anish | Full Stack Web Developer",
    description: "Freelance Full Stack Web Developer based in India. Specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    type: "website",
    url: "https://https://Anish3d.netlify.app//",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish | Full Stack Web Developer",
    description: "Freelance Full Stack Web Developer based in India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-[#0a0a0a]" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
