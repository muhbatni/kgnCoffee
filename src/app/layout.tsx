import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KGN Coffee | Your Daily Brew, Perfected",
  description: "A trendy, modern coffee shop offering premium ethically sourced specialty coffee and signature artisan pastries in a cozy, creative-friendly environment.",
  keywords: "coffee, specialty coffee, KGN Coffee, artisan pastries, local cafe, creative hub, espresso, cold brew, young creatives cafe",
  authors: [{ name: "KGN Coffee Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Simple variable font injection or using the font class directly
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="bg-[#FDFBF7] min-h-screen text-[#60241E]">
        {children}
      </body>
    </html>
  );
}
