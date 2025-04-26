type RitualCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function RitualCard({
  number,
  title,
  description,
}: RitualCardProps) {
  return (
    <div className="border-elixir/30 bg-parchment rounded-lg border p-6 text-center shadow-sm">
      <div className="bg-chamomile mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
        <span className="text-elixir font-serif text-2xl">{number}</span>
      </div>

      <h3 className="font-cormorant text-evergreen mb-4 text-xl">{title}</h3>

      <p className="text-evergreen font-sans opacity-80">{description}</p>
    </div>
  );
}
