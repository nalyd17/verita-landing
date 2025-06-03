export default function FAQPage() {
  const faqs = [
    {
      question: "What is Verità?",
      answer:
        "Verità is a sophisticated botanical concentrate designed for mindful drinkers who crave ritual without compromise. Inspired by the classic profile of a London Dry gin, Verità offers a rich sensory experience (aromatic, herbal, and lightly spiced) with no buzz and no regrets.",
    },
    {
      question: "How do I use Verità?",
      answer: `Verità is sold as a two-piece set:\n\nBotanical Elixir (2 oz dropper bottle)\n\nAccento Aromatic Spray (1 oz)\n\nMix 1 ml of Verita Botanical Elixir with 4 oz of your favorite mixer. Mist Accento Aromatic Spray once over your glass just before sipping to elevate the aroma and finish. Enjoy.\n\nMix. Mist. Awaken the spirit.`,
    },
    {
      question: "Does Verità contain alcohol?",
      answer:
        "Verità contains a trace amount of alcohol due to its tincture base (extracted using high-proof spirits), but when prepared as directed, the final drink contains less than 0.5% ABV—comparable to kombucha or vanilla extract. It is crafted for those seeking a zero-proof lifestyle.",
    },
    {
      question: "What does Verità taste like?",
      answer:
        "Expect bold juniper, vibrant citrus, a touch of peppery warmth, and a clean herbal finish. It’s crisp, dry, and refined, designed to pair beautifully with tonic and serve as a grown-up alternative to traditional spirits.",
    },
    {
      question: "Is Verità safe for pregnancy or recovery?",
      answer:
        "While the final dilution is extremely low in alcohol, Verità is not marketed as “alcohol-free” and should be used at your discretion. Always consult your physician or care provider if you are pregnant, in recovery, or sensitive to alcohol in any form.",
    },
    {
      question: "What makes Verità different from other non-alcoholic drinks?",
      answer:
        "Most zero-proof spirits are water-based. Verità is an alcohol-extracted tincture that delivers deep botanical intensity in tiny doses. Paired with the Accento aromatic spray, it offers a multi-sensory ritual unlike anything else in the non-alcoholic space.",
    },
    {
      question: "Is Verità sweetened or flavored?",
      answer:
        "No. Verità contains no sugar, no artificial sweeteners, and no added flavorings—only whole botanicals, carefully extracted and precisely blended for purity and depth.",
    },
    {
      question: "How long does a bottle last?",
      answer:
        "Each set makes approximately 40–50 servings, depending on your pour size. Shelf-stable and travel-ready, Verità is ideal for everyday unwinding or special occasions.",
    },
  ];

  return (
    <section className="bg-chamomile min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-evergreen font-playfair mb-6 text-3xl uppercase md:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="bg-elixir mx-auto mb-10 h-1 w-24" />

          <div className="space-y-10 text-left">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <div className="mb-4 flex items-center gap-4">
                  <div className="bg-elixir h-1 w-6 shrink-0" />
                  <h3 className="text-evergreen font-playfair text-xl md:text-2xl">
                    {faq.question}
                  </h3>
                  <div className="bg-elixir h-1 flex-grow" />
                </div>
                {faq.answer.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className="text-shaded mb-4 font-sans text-lg leading-relaxed whitespace-pre-wrap"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
