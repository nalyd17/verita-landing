import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-shaded py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="relative mb-4 h-20 w-20">
            <Image
              src="/verita-crest-logo.png"
              alt="Verità Crest Logo"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </div>

          <h3 className="text-elixir mb-6 font-serif text-2xl">VERITÀ</h3>

          {/* <div className="mb-8 flex space-x-8">
            <Link
              href="#"
              className="text-chamomile hover:text-elixir transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-chamomile hover:text-elixir transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-chamomile hover:text-elixir transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div> */}

          <div className="mb-6 flex flex-wrap justify-center space-x-6 text-lg">
            <Link
              href="#about"
              className="font-cormorant text-chamomile hover:text-elixir mb-2 transition-colors"
            >
              About
            </Link>
            <Link
              href="#ingredients"
              className="font-cormorant text-chamomile hover:text-elixir mb-2 transition-colors"
            >
              Ingredients
            </Link>
            <Link
              href="#ritual"
              className="font-cormorant text-chamomile hover:text-elixir mb-2 transition-colors"
            >
              Ritual
            </Link>
          </div>

          <div className="text-center">
            <p className="text-chamomile mb-1 font-sans text-sm opacity-70">
              Handcrafted in small batches by Verità Spirits in Charleston, SC.
            </p>
            <p className="text-chamomile mb-4 font-sans text-sm opacity-70">
              Contains alcohol. Not for sale to minors. Keep out of reach of
              children.
            </p>
            <p className="text-chamomile font-sans text-xs opacity-50">
              &copy; {new Date().getFullYear()} Verità. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
