"use client";

import { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/data/RecipeData";

type Props = {
  atBarRecipes: Recipe[];
  atHomeRecipes: Recipe[];
};

export default function RecipeViewer({ atBarRecipes, atHomeRecipes }: Props) {
  const [activeSet, setActiveSet] = useState<"bar" | "home">("home");
  const recipes = activeSet === "bar" ? atBarRecipes : atHomeRecipes;

  return (
    <>
      {/* Toggle */}
      <div className="border-elixir bg-mist/10 relative mx-auto mb-12 max-w-fit rounded-full border-2 px-1 py-1">
        <div className="flex space-x-1 text-sm font-medium">
          {["home", "bar"].map((key) => (
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
    </>
  );
}
