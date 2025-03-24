import type { Metadata } from "next";
// import { ThemeProvider } from "next-themes";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
});
export const metadata: Metadata = {
  title: "Ariel Joe Portfolio - Beautiful Shadcn UI Landing Page",
  description: "Ariel Joe is a full stack software engineer.",
  icons: "/unofficial-logo-rm-bg.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${geistSans.className} antialiased`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
