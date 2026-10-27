import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AXS Architects | Design. Build. Deliver.",
  description:
    "Thoughtful architecture, considered interiors, and carefully planned spaces shaped around your vision. Architecture, interior design, planning and execution in Chennai, Tamil Nadu.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Romena:wght@400;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
