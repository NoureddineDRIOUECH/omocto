
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-background/50 backdrop-blur-sm rounded-full p-2 shadow-lg">
      <ul className="flex items-center gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}>
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
