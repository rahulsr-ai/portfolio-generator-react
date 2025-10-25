// components/Navbar.js
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        navbar navbar-expand-lg fixed-top z-50
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-white shadow-lg py-8" : "bg-[#050CDD] py-8"}
      `}
    >
      <div className="container-fluid px-4 lg:px-8">
       
        <Link
          href="/"
          className={`
            navbar-brand font-bold text-2xl tracking-tight
            transition-colors duration-300
            ${scrolled ? "text-gray-900" : "text-white"}
          `}
        >
          Personite.
        </Link>
        <Link
        href="/Portfolios"
          className={`
         px-4 py-2 text-sm font-semibold inline rounded  cursor-pointer no-underline
        ${
          !scrolled
            ? "bg-[#050CDD] shadow-lg text-white "
            : "bg-gray-200  text-black"
        }
      `}
        >
          Portfolios
        </Link>
      </div>
    </nav>
  );
}
