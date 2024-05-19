"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { GlobalContext } from "@/app/contexts/GlobalContext";
import { navLinks } from "@/app/constants/links";

const Navbar = () => {
  const { isLoggedIn } = useContext(GlobalContext);

  return (
    <nav className="h-16 sticky top-0 left-0 right-0 z-10">
      <div className="mx-auto max-w-7xl h-full flex justify-around">
        <div />
        <ul className="flex items-center h-full justify-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-white text-md link-hover">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {!isLoggedIn && (
          <div className="flex items-center justify-center filter invert gap-3">
            <Image
              src="/User.png"
              alt="Account"
              width={28}
              height={28}
              className="cursor-pointer"
            />
            <Image
              src="/cart.png"
              alt="Cart"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
