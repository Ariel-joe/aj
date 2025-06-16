import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});
export const metadata: Metadata = {
  title: "Ariel Joe Portfolio",
  description: "Ariel Joe is a full stack software engineer.",
  icons: "/unofficial-logo-rm-bg.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} ${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <Navbar />
        <main>{children}
          <Analytics />
        </main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
