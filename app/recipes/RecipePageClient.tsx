"use client";

import { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { atBarRecipes, atHomeRecipes } from "@/data/RecipeData";

export default function RecipePageClient() {
  const [activeSet, setActiveSet] = useState<"bar" | "home">("bar");
  const recipes = activeSet === "bar" ? atBarRecipes : atHomeRecipes;

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

      {/* Toggle */}
      <div className="border-elixir bg-mist/10 relative mx-auto mb-12 max-w-fit rounded-full border-2 px-1 py-1">
        <div className="flex space-x-1 text-sm font-medium">
          {["bar", "home"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveSet(key as "bar" | "home")}
              className={`relative z-10 w-32 rounded-full px-4 py-2 transition-colors duration-300 ${
                activeSet === key
                  ? "bg-elixir text-shaded shadow-md"
                  : "text-elixir hover:bg-elixir/10"
              }`}
            >
              {key === "bar" ? "Behind the Bar" : "Crafted at Home"}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8">
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe} imageName={recipe.imageName} />
        ))}
      </div>
    </section>
  );
}
