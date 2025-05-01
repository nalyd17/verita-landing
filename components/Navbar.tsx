import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-shaded border-b-elixir fixed top-0 right-0 left-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6 sm:justify-between">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/verita-title-logo.png"
            alt="Verità Title Logo"
            width={140}
            height={40}
            priority
            className="h-10 w-[140px] object-contain"
          />
        </Link>

        <div className="hidden space-x-8 sm:flex">
          <NavLink href="#about" label="About" />
          <NavLink href="#ingredients" label="Ingredients" />
          <NavLink href="#ritual" label="Ritual" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-chamomile hover:text-elixir text-lg transition-colors duration-300 md:text-xl"
    >
      {label}
    </Link>
  );
}
