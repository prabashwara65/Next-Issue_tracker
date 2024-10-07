"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const CurrentPath = usePathname();
  console.log(CurrentPath)

  return (
    <nav className="flex gap-4 border-b mb-4 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
           className={`${link.href === CurrentPath ? 'text-zinc-900' : 'text-zinc-500'}  hover:text-zinc-800 translate-color`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
