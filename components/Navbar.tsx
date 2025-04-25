import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-evergreen flex items-center justify-center py-4">
      <Link href="/" aria-label="Go to homepage">
        <Image
          src="/verita-title-logo.png"
          alt="Verità logo"
          width={167}
          height={48}
          priority
          className="h-[36px] w-[125px] sm:h-[48px] sm:w-[167px]"
        />
      </Link>
    </nav>
  );
}
