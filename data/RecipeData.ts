export interface Recipe {
  name: string;
  ingredients: string[];
  notes: string;
  imageName: string;
  instructions?: string;
  mood?: string;
  glass?: string;
  garnish?: string;
}

export const atBarRecipes: Recipe[] = [
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
    imageName: "Summerville Slip.png",
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
    imageName: "Herbalists Highball.png",
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
    imageName: "Nocturne Bloom.png",
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
    imageName: "Verita Negroni.png",
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
    imageName: "Garden Smoke.png",
  },
];

export const atHomeRecipes: Recipe[] = [
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
    imageName: "Citrus Spritz.png",
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
    imageName: "Pepper Mint Cooler.png",
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
    imageName: "Verita Lemonade.png",
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
    imageName: "Ginger Grove.png",
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
    imageName: "Verita Soda with a Twist.png",
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
    imageName: "Cucumber Mist.png",
  },
  {
    name: "Stormless Mule",
    glass: "Copper mug",
    ingredients: ["5 oz ginger beer", "1 ml Verità", "Lime wedge"],
    instructions:
      "Add Verità to ginger beer in a copper mug over ice. Squeeze lime and mist with Accento.",
    notes:
      "Bright lime zest leads the nose, lifted by subtle hints of piney juniper and crushed coriander from the Verità. A faint herbal citrus note lingers underneath, reminiscent of lemon balm and soft peppercorn.",
    imageName: "Stormless Mule.png",
  },
];
