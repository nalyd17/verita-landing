import RitualCard from "@/components/RitualCard";

const ritualSteps = [
  {
    number: "1",
    title: "Select Your Glassware",
    description:
      "Choose a quality highball or copa glass to showcase your creation. Chill the glass beforehand for an optimal experience. A well-prepared vessel enhances the visual clarity and elevates the sensory perception.",
  },
  {
    number: "2",
    title: "Precise Measurement",
    description:
      "Add ice, pour 4oz of tonic gently at an angle. Add 1mL of Verità botanical extract and stir allowing the nuanced flavors to unfold. This concentrated amount delivers the perfect flavor intensity.",
  },
  {
    number: "3",
    title: "Mindful Preparation",
    description:
      "Just before serving, spritz Accento 1-2 times above the glass for an aromatic flourish. Garnish with fresh citrus or cucumber. Take a moment to appreciate the aromas before sipping.",
  },
];

export default function Ritual() {
  return (
    <section id="ritual" className="bg-chamomile py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-evergreen font-playfair mb-6 text-3xl uppercase md:text-4xl">
            The Ritual
          </h2>

          <div className="bg-elixir mx-auto mb-6 h-1 w-24" />

          <p className="text-evergreen mx-auto max-w-3xl font-sans text-lg">
            Elevate your zero-proof experience through the art of ritual. The
            care and attention you bring to preparing your Verità drink is part
            of what makes it special.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ritualSteps.map((step) => (
            <RitualCard
              key={step.title}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-cormorant text-evergreen text-xl italic">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Crafted with the precision of science and the soul of tradition"
          </p>
        </div>
      </div>
    </section>
  );
}
