"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-shaded border-b-elixir fixed top-0 right-0 left-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/verita-crest-logo.png"
            alt="Verità Crest Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain md:hidden"
          />
          <Image
            src="/verita-title-logo.png"
            alt="Verità Title Logo"
            width={140}
            height={40}
            priority
            className="hidden h-10 w-[140px] object-contain md:block"
          />
        </Link>

        <div className="hidden space-x-8 md:flex">
          <NavLink href="/recipes" label="Recipes" />
          <NavLink href="/faq" label="FAQ" />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-chamomile focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="px-6 pt-2 pb-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <NavLink
              href="/recipes"
              label="Recipes"
              onClick={() => setMenuOpen(false)}
            />
            <NavLink
              href="/faq"
              label="FAQ"
              onClick={() => setMenuOpen(false)}
            />
            {/* Add more links here as needed */}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-chamomile hover:text-elixir text-lg transition-colors duration-300 md:text-xl"
    >
      {label}
    </Link>
  );
}
