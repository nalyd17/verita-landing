"use client";

import { Circle } from "lucide-react";
import { useState } from "react";

interface Recipe {
  name: string;
  ingredients: string[];
  notes: string;
  instructions?: string;
  mood?: string;
  glass?: string;
  garnish?: string;
}

const atBarRecipes: Recipe[] = [
  {
    name: "The Summerville Slip",
    mood: "Breezy Southern aperitif",
    glass: "Nick & Nora",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "1.5 oz white peach nectar (lightly strained)",
      "0.5 oz fresh lemon juice",
      "3 oz dry tonic water (e.g., Q Light or Fever-Tree Light)",
    ],
    garnish: "Lemon wheel and a sprig of thyme",
    notes:
      "The fruit and florals of peach awaken Verità's citrus and cardamom notes. Lemon adds tension; thyme adds a savory snap.",
  },
  {
    name: "Herbalist's Highball",
    mood: "Crisp, alpine, cerebral",
    glass: "Tall highball with a minimalist profile",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "0.5 oz celery juice",
      "0.25 oz fresh lime juice",
      "1 dash celery bitters (non-alcoholic, if available)",
      "6 oz club soda",
    ],
    garnish: "Ribboned cucumber & cracked white pepper on top",
    notes:
      "Bright green and clean. Amplifies Verità's herbal backbone and lets the peppercorn shine in a refreshing, structured delivery.",
  },
  {
    name: "Nocturne Bloom",
    mood: "Evening elegance, dusky romance",
    glass: "Coupe",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "3 oz chilled brewed hibiscus tea (strong)",
      "0.5 oz honey-lavender syrup (light touch)",
      "0.25 oz lemon juice",
    ],
    instructions: "Mist Accento over top before serving.",
    garnish: "Edible flower or floating dried rose petals",
    notes:
      "Hibiscus and lavender pair beautifully with Verità's floral top notes. Ideal for slow sipping or social rituals.",
  },
  {
    name: "The Verità Negroni (Zero-Proof Edition)",
    mood: "Sophisticated and bitter; aperitivo hour",
    glass: "Rocks, large cube",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "2 oz Wilfred's Aperitif or Lyre's Italian Orange",
      "2 oz Ghia Original or non-alcoholic vermouth-style aperitif",
    ],
    garnish: "Expressed orange peel",
    instructions:
      "Stir all ingredients over ice. Strain into a rocks glass. Garnish with orange peel.",
    notes:
      "A bold, complex sipper that mirrors the Negroni's bitter charm. Verità's botanical spine holds its own against strong companions.",
  },
  {
    name: "Garden Smoke",
    mood: "Rustic intrigue, savory and earthy",
    glass: "Old Fashioned or ceramic tumbler",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "0.75 oz smoked rosemary syrup",
      "3 oz chilled green tea (strongly steeped, unsweetened)",
      "2 dashes apple cider vinegar",
    ],
    instructions: "Mist Accento + rosemary essential oil over the glass.",
    garnish: "Smoked rosemary sprig (lightly charred at the tip)",
    notes:
      "A deep, smoky-acidic cocktail that leans umami. This is for your experimental drinker—surprising, grounded, unforgettable.",
  },
];

const atHomeRecipes: Recipe[] = [
  {
    name: "Citrus Spritz",
    mood: "Lively, brunch-ready",
    glass: "Wine glass or stemmed goblet",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "2 oz orange juice (fresh preferred)",
      "3 oz sparkling water or lemon seltzer",
      "Squeeze of lemon (optional for added acidity)",
    ],
    garnish: "Orange wheel or lemon twist",
    notes:
      "A bright, citrus-forward refresher that highlights Verità's orange peel and coriander without overcomplicating.",
  },
  {
    name: "Pepper Mint Cooler",
    mood: "Afternoon chill, herbal snap",
    glass: "Highball",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "6 oz plain or mint sparkling water (e.g., Polar or Spindrift Mint)",
      "Ice",
    ],
    garnish: "Fresh mint and cracked black pepper on top",
    notes:
      "Extremely easy to build. The mint water draws out Verità's peppermint; the black pepper hits the finish with energy.",
  },
  {
    name: "Verità Lemonade",
    mood: "Garden party or casual gathering",
    glass: "Mason jar or collins glass",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "4 oz lemonade",
      "2 oz soda water",
    ],
    instructions: "1-2 spritz of Accento",
    garnish: "Lemon wedge and basil leaf",
    notes:
      "Bright, refreshing, and approachable. The basil ties in beautifully with Verità's green herbals.",
  },
  {
    name: "Ginger Grove",
    mood: "Spicy and revitalizing",
    glass: "Rocks",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "4 oz ginger beer (not ginger ale; use a strong one like Fever-Tree)",
      "Squeeze of lime",
    ],
    garnish: "Lime wedge or crystallized ginger",
    notes:
      "A grown-up take on a mule. The pepper and cardamom in Verità deepen the spice beautifully.",
  },
  {
    name: "Verità Soda with a Twist",
    mood: "Clean, minimal, anytime sipper",
    glass: "Tall glass or chilled rocks glass",
    ingredients: [
      "1.0 ml Verità Botanical Elixir",
      "6 oz soda water",
      "Dash of cranberry or pomegranate juice (optional splash for color and bite)",
    ],
    instructions:
      "Start with a splash of fresh fruit juice. Add ice, Verità and soda water. Mix.",
    garnish: "Lime wheel or cucumber slice",
    notes:
      "A simple, everyday serve that still feels refined. The dash of tart juice lifts the drink without overwhelming it.",
  },
  {
    name: "Cucumber Mist",
    ingredients: [
      "4 oz soda water",
      "2 oz cucumber juice",
      "1 ml Verità",
      "Mint leaves",
      "Ice",
    ],
    instructions:
      "Shake cucumber juice and Verità with ice. Strain into a glass over fresh ice, top with soda, mist with Accento.",
    notes:
      "A verdant, spa-like refresher that balances elegance with ease. Herbaceous, effervescent, and endlessly drinkable—this is Verità at its most revitalizing.",
  },
  {
    name: "Stormless Mule",
    glass: "Copper mug",
    ingredients: ["5 oz ginger beer", "1 ml Verità", "Lime wedge"],
    instructions:
      "Add Verità to ginger beer in a copper mug over ice. Squeeze lime and mist with Accento.",
    notes:
      "Bright lime zest leads the nose, lifted by subtle hints of piney juniper and crushed coriander from the Verità. A faint herbal citrus note lingers underneath, reminiscent of lemon balm and soft peppercorn.",
  },
];

export default function RecipesPage() {
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {recipes.map((recipe, idx) => (
          <div
            key={idx}
            className="border-elixir/30 bg-mist/5 rounded-lg border p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >
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

            {/* Spacer between title/mood and rest of card */}
            <div className="mt-4 space-y-2 pl-7">
              {recipe.glass && (
                <p className="text-chamomile text-sm">
                  <strong>Glass:</strong> {recipe.glass}
                </p>
              )}

              <div>
                <p className="text-chamomile text-sm font-semibold">
                  Ingredients:
                </p>
                <ul className="text-chamomile list-disc pl-5 text-sm opacity-80">
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
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
        ))}
      </div>
    </section>
  );
}
