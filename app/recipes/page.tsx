import type { Metadata } from "next";
import RecipeViewer from "@/components/RecipeViewer";
import { atBarRecipes, atHomeRecipes } from "@/data/RecipeData";

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
  return (
    <section className="bg-shaded text-mist min-h-screen px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <h2 className="font-playfair text-elixir mb-4 text-3xl uppercase md:text-4xl">
          More Than Just Tonic. Explore a world of ritual, reimagined.
        </h2>
        <div className="bg-elixir mx-auto mb-10 h-1 w-24" />
        <p className="text-mist mb-6 text-lg leading-relaxed">
          Verità plays well with others. Whether you’re craving something
          bitter, something bright, or something floral, this gin-inspired
          extract unlocks creative zero-proof cocktails at home or behind the
          bar.
        </p>
        <ul className="text-mist mb-10 inline-block list-disc pl-6 text-left text-lg leading-relaxed">
          <li>A grapefruit spritz with soda and rosemary</li>
          <li>A zero-proof negroni with bitters and orange peel</li>
          <li>A “dark and stormless” with ginger beer and lime</li>
        </ul>
        <p className="text-mist italic">
          It’s not just about gin. It’s about what’s possible.
        </p>
      </div>

      <RecipeViewer atBarRecipes={atBarRecipes} atHomeRecipes={atHomeRecipes} />
    </section>
  );
}
