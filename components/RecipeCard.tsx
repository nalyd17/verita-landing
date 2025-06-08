"use client";

import Image from "next/image";
import { useState } from "react";
import { Circle } from "lucide-react";
import { Recipe } from "@/data/RecipeData";

type RecipeCardProps = {
  recipe: Recipe;
  imageName: string;
};

export default function RecipeCard({ recipe, imageName }: RecipeCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group border-elixir/30 bg-mist/5 relative flex flex-col overflow-hidden rounded-lg border shadow-md transition duration-300 hover:shadow-lg md:flex-row"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Desktop Image */}
      <div className="relative hidden h-auto w-full max-w-xs flex-shrink-0 md:block">
        <Image
          src={`/recipes/${imageName}`}
          alt={recipe.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile Flip Image */}
      <div
        className={`md:hidden ${
          flipped ? "block" : "hidden"
        } relative h-64 w-full`}
      >
        <Image
          src={`/recipes/${imageName}`}
          alt={recipe.name}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      {/* Recipe Content */}
      <div className={`p-6 ${flipped ? "hidden md:block" : "block"}`}>
        <div className="mb-2 flex items-start">
          <Circle className="text-elixir mt-1 mr-2 h-5 w-5 flex-shrink-0" />
          <div>
            <h3 className="font-cormorant text-chamomile text-xl font-medium">
              {recipe.name}
            </h3>
            {recipe.mood && (
              <p className="text-chamomile mt-0.5 text-sm italic opacity-80">
                {recipe.mood}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-2 pl-7">
          {recipe.glass && (
            <p className="text-chamomile text-sm">
              <strong>Glass:</strong> {recipe.glass}
            </p>
          )}

          <div>
            <p className="text-chamomile text-sm font-semibold">Ingredients:</p>
            <ul className="text-chamomile list-disc pl-5 text-sm opacity-80">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {recipe.garnish && (
            <p className="text-chamomile text-sm">
              <strong>Garnish:</strong> {recipe.garnish}
            </p>
          )}

          {recipe.instructions && (
            <p className="text-chamomile text-sm">
              <strong>Instructions:</strong> {recipe.instructions}
            </p>
          )}

          <p className="text-chamomile text-sm">
            <strong>Notes:</strong> {recipe.notes}
          </p>
        </div>
      </div>
    </div>
  );
}
