import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide text-center">MINI CAKES</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl tracking-wide text-center">
            MINI CAKES
          </Link>
          <div className="hidden xl:flex gap-6">
            <Link href="/" className="hover:text-gray-500">
              Homepage
            </Link>
            <Link href="/order" className="hover:text-gray-500">
              Order
            </Link>
            <Link href="/about" className="hover:text-gray-500">
              About
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex items-center gap-8 justify-center">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
