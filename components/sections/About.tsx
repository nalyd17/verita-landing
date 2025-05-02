export default function About() {
  return (
    <section id="about" className="bg-chamomile py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-evergreen font-playfair mb-6 text-3xl uppercase md:text-4xl">
            Zero-Proof Ritual, Redefined
          </h2>

          <div className="bg-elixir mx-auto mb-6 h-1 w-24" />

          <p className="text-evergreen mb-8 font-sans text-lg leading-relaxed">
            Verità is an exquisite zero-proof gin tincture that captures the
            essence and complexity of traditional spirits without the alcohol
            content. Handcrafted in small batches in Charleston, SC, our
            tincture is designed to elevate your drinking experience with
            sophisticated botanicals and meticulous attention to detail.
          </p>

          <p className="text-evergreen font-sans text-lg leading-relaxed">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Whether you're abstaining from alcohol or simply seeking a refined
            alternative, Verità offers the perfect balance of flavor and
            tradition. Our innovative approach honors the ritual of drinking
            while offering a new way to experience the pleasure of a perfectly
            crafted beverage.
          </p>
        </div>
      </div>
    </section>
  );
}
