import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Container from "@/components/shared/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventy- Discover amazing events nearby",
  description:
    "Explore a world of excitement with events just around the corner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gray-950 text-gray-50 overflow-y-scroll`}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
