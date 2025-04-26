import { Circle } from "lucide-react";

type IngredientCardProps = {
  name: string;
  description: string;
};

export default function IngredientCard({
  name,
  description,
}: IngredientCardProps) {
  return (
    <div className="border-elixir/30 bg-mist/5 rounded-lg border p-6 transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-4 flex items-start">
        <Circle className="text-elixir mt-1 mr-2 h-5 w-5 flex-shrink-0" />
        <h3 className="font-cormorant text-chamomile text-xl font-medium">
          {name}
        </h3>
      </div>
      <p className="text-chamomile pl-7 font-sans opacity-80">{description}</p>
    </div>
  );
}
