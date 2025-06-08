import type { Metadata } from "next";
import RecipePageClient from "./RecipePageClient";

export const metadata: Metadata = {
  title: "Verità Recipes | Botanical Mixes for Every Mood",
  description:
    "Browse zero-proof recipes designed for at-home or at-bar enjoyment. Curated to complement Verità's botanicals for mindful drinkers.",
  openGraph: {
    title: "Verità Recipes | Botanical Mixes for Every Mood",
    description:
      "Browse zero-proof recipes designed for at-home or at-bar enjoyment.",
    url: "https://www.drinkverita.com/recipes",
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

export default function RecipesPage() {
  return <RecipePageClient />;
}
