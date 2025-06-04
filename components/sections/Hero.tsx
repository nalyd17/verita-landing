import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex max-h-[1600px] min-h-screen items-center justify-center bg-[url('/verita-splash.jpg')] bg-cover bg-center">
      <div className="bg-evergreen/70 absolute inset-0" />

      <div className="text-chamomile relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-6">
          <Image
            src="/verita-title-logo.png"
            alt="Verità Title Logo"
            width={335}
            height={96}
            priority
            className="mx-auto h-auto w-[250px] object-contain md:w-[300px] lg:w-[335px]"
          />

          <h1 className="text-elixir text-xl tracking-wide uppercase md:text-2xl">
            The Art of Drinking Differently
          </h1>

          <div className="bg-elixir mx-auto mb-4 h-1 w-24" />

          <div className="text-lg leading-relaxed md:text-xl">
            <p className="text-xl font-semibold md:text-2xl">
              A Botanical Ritual, Reinvented
            </p>
            <p>Inspired by the flavor traditions of gin.</p>
            <p>Crafted as a concentrated botanical extract.</p>
            <p>Designed for tonic, and beyond.</p>
            <p>No alcohol. No compromises. Just complexity in every drop.</p>
          </div>

          <Link
            href="/recipes"
            className="border-elixir font-cormorant text-chamomile hover:bg-elixir hover:text-evergreen mt-4 inline-block border-2 bg-transparent px-8 py-3 text-lg tracking-wide transition duration-300"
          >
            Mix, Mist, Awaken the Spirit.
          </Link>
        </div>
      </div>
    </section>
  );
}
