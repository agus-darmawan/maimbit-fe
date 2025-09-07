"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/diri-sendiri", label: "Diri Sendiri" },
  { href: "/beasiswa", label: "Beasiswa" },
  { href: "/lingkungan", label: "Lingkungan" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-200/20 bg-transparent backdrop-blur-lg uppercase">
      <div className="flex flex-wrap items-center justify-between px-10 py-2 mx-auto ">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/images/logo/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-10"
          />
          <span className="text-lg font-semibold text-white">MAIMBIT</span>
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-white hover:bg-white/20"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden lg:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-blue-500"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 bg-black/70 backdrop-blur-md">
          <ul className="flex flex-col space-y-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 px-2 rounded-md text-lg font-medium transition-colors ${
                      isActive
                        ? "text-blue-500 bg-white/10"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
