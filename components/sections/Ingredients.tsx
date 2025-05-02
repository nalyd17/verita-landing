import IngredientCard from "@/components/IngredientCard";

const ingredients = [
  {
    name: "Juniper Berry",
    description:
      "The essential gin botanical, providing distinctive pine notes",
  },
  {
    name: "Black Peppercorn",
    description: "Adds warmth and subtle spice to the flavor profile",
  },
  {
    name: "Coriander Seed",
    description: "Contributes citrus and subtle floral qualities",
  },
  {
    name: "Citrus Peel",
    description: "Bright, zesty notes that enhance freshness",
  },
  {
    name: "Peppermint Leaves",
    description: "Provides a cooling, refreshing finish",
  },
  {
    name: "Botanical Oils",
    description: "A proprietary blend for complexity and depth",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-evergreen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-elixir font-playfair mb-6 text-3xl uppercase md:text-4xl">
            Crafted from Nature
          </h2>

          <div className="bg-elixir mx-auto mb-6 h-1 w-24" />

          <p className="text-chamomile mx-auto max-w-3xl font-sans text-lg">
            Our tincture is crafted using only the finest botanicals,
            meticulously selected and balanced to create a sophisticated flavor
            profile reminiscent of traditional gin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient, index) => (
            <IngredientCard
              key={index}
              name={ingredient.name}
              description={ingredient.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
