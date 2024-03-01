import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Samples",
    href: "/samples",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <nav className="h-16 sticky top-0 left-0 right-0 z-10 pt-4">
      <div className="mx-auto max-w-7xl h-full">
        <ul className="flex items-center h-full justify-center gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-lg hover:text-red-600 transition after:content-[''] after:block after:h-[2px] after:rounded-md after:mx-auto after:w-0 after:bg-red-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
