"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import { useToast } from "./ToastProvider";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showComingSoon } = useToast();

  // Handle anchor navigation with programmatic smooth scroll.
  // This ensures smooth scrolling works even when using Next's Link
  // and closes the mobile menu after navigation.
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        // Calculate offset to account for fixed header height
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.clientHeight : 80;
        const top =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight -
          12; // small gap

        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NAB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                NAB (Need A Beauty)
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => handleNavClick(e, "#features")}
            >
              Keunggulan
            </Link>
            <Link
              href="#products"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => handleNavClick(e, "#products")}
            >
              Produk
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              Tentang Kami
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={showComingSoon}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="#features"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => handleNavClick(e, "#features")}
              >
                Keunggulan
              </Link>
              <Link
                href="#products"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => handleNavClick(e, "#products")}
              >
                Produk
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => handleNavClick(e, "#about")}
              >
                Tentang Kami
              </Link>
              <Link
                href="/privacy-policy"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <div className="px-3 py-2">
                <button
                  onClick={showComingSoon}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                >
                  Konsultasi Gratis
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
