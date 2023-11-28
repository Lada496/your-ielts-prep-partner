"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAV_LINKS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Writing",
    path: "/writing",
  },
  {
    label: "Speaking",
    path: "/speaking",
  },
] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const isActive = (path: string) => {
    if (path === "/") {
      return pathName === path;
    } else {
      return pathName.includes(path);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold text-white">
          <Link href="/">Your IELTS Prep Partner</Link>
        </div>
        <div className="hidden space-x-4 md:block lg:flex">
          {/* Navigation links for larger screens */}
          {NAV_LINKS.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`${isActive(nav.path) ? "text-rose-300" : ""}`}
            >
              {nav.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden lg:hidden">
          {/* Hamburger menu icon for small screens */}
          <button onClick={toggleMenu}>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu modal for small screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50">
          <div className="animate-slideInRight flex h-screen flex-col bg-sky-950 px-4 py-6">
            {/* Close button */}
            <button
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-200"
              onClick={closeMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Menu links */}
            {NAV_LINKS.map((nav) => (
              <Link
                key={nav.path}
                href={nav.path}
                className={`${
                  isActive(nav.path) ? "text-rose-300" : "text-white"
                }`}
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
