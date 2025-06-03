import Image from "next/image";

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
