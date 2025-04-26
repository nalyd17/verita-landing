import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
      <body
        className={`${cormorant.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
