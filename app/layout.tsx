import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Verità | Zero-Proof Botanical Tincture for Mindful Drinkers",
  description:
    "Discover Verità — the modern ritual for the sober curious. Distilled with botanicals like juniper berry, black peppercorn, and citrus peel, Verità is a zero-proof tincture crafted in Charleston, SC for clarity, intention, and flavor. Just 1 drop in 4 oz tonic. Less than 0.5% ABV. Elevate your non-alcoholic experience at drinkverita.com.",
  openGraph: {
    title: "Verità | Zero-Proof Botanical Tincture for Mindful Drinkers",
    description:
      "Discover Verità — the modern ritual for the sober curious. Distilled with botanicals like juniper berry, black peppercorn, and citrus peel, Verità is a zero-proof tincture crafted in Charleston, SC for clarity, intention, and flavor. Just 1 drop in 4 oz tonic. Less than 0.5% ABV. Elevate your non-alcoholic experience at drinkverita.com.",
    url: "https://www.drinkverita.com/",
    type: "website",
    images: [
      {
        url: "https://www.drinkverita.com/verita-og.png",
        width: 1536,
        height: 1024,
        alt: "Verita OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
