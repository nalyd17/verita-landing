import Image from "next/image";

export default function Home() {
  return (
    <main className="text-evergreen bg-white">
      <section
        className="text-chamomile relative flex min-h-screen flex-col items-center bg-cover bg-center px-4 pt-36 text-center"
        style={{ backgroundImage: "url('/verita-splash.jpg')" }}
      >
        <div className="bg-evergreen/75 absolute inset-0 z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <Image
            src="/verita-crest-logo.png"
            alt="Verità Logo"
            width={140}
            height={140}
            priority
            className="mb-6"
          />
          <h1 className="font-serif text-2xl tracking-wide uppercase md:text-4xl">
            The Art of Drinking Differently
          </h1>
          <p className="mt-4 max-w-xl text-lg md:text-xl">
            A zero-proof botanical tincture crafted with intention for the sober
            curious and mindful drinkers.
          </p>
        </div>
      </section>

      <section className="bg-chamomile text-evergreen px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-xl font-bold tracking-wider uppercase md:text-2xl">
            Zero-Proof Ritual, Redefined
          </h2>
          <p className="text-md md:text-lg">
            Distilled with juniper berry, black peppercorn, coriander seed,
            citrus peel, and botanical oils, Verità is a precise, modern ritual.
            Combine 1ml with 4oz chilled tonic for a refined,{" "}
            <strong>less than 0.5% ABV</strong> experience. Best enjoyed over
            ice with citrus or cucumber.
          </p>
        </div>
      </section>

      <section className="bg-chamomile px-4 py-12 text-center md:px-8">
        <div className="text-evergreen mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Suggested Use</h3>
            <p>
              Combine 1ml Verità with 4oz chilled tonic water. Garnish with
              citrus or cucumber. <br />
              <em>Not intended for undiluted consumption.</em>
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Ingredients</h3>
            <p>
              Grain alcohol (USB), juniper berry, black peppercorn, coriander
              seed, citrus peel, peppermint leaves, botanical oils.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Details</h3>
            <p>
              Net contents: 2 fl oz (60ml) <br />
              Serving size: 1ml - Yields 60 servings <br />
              <em>
                Contains alcohol. Not for minors. Keep out of reach of children.
              </em>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-evergreen text-chamomile px-4 py-10 text-center">
        <p className="mx-auto max-w-2xl text-sm md:text-base">
          Handcrafted in small batches in Charleston, SC. Crafted with the
          precision of science and the soul of tradition.
        </p>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} Verità. All rights reserved. |{" "}
          <a href="https://www.drinkverita.com" className="underline">
            www.drinkverita.com
          </a>
        </p>
      </footer>
    </main>
  );
}
