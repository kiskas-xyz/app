"use client";
import ArrowDown from "@/public/images/arrowDown";
import ArrowRight from "@/public/images/arrowRight";
import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHeaderVisible(currentScroll < lastScroll || currentScroll < 100);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navList = [
    {
      title: "Features",
      icon: <ArrowDown color="#000" />,
    },
    {
      title: "Pricing",
      icon: <ArrowDown color="#000" />,
    },
    {
      title: "How It Works",
      icon: <ArrowDown color="#000" />,
    },
    {
      title: "Contact",
      icon: <ArrowDown color="#000" />,
    },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-white px-8 py-4 ${
        isHeaderVisible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <img src={"/logoText.svg"} alt="Logo" />

        {/* Mobile menu toggle */}
        <div className="xl:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden xl:flex justify-between gap-6 items-center">
          <nav className="md:flex space-x-6 text-lg font-medium text-text-black">
            {navList.map((items, index) => (
              <a
                key={index}
                href="#features"
                className="hover:text-black transition flex gap-3 items-center"
              >
                {items.title} {items.icon}
              </a>
            ))}
          </nav>

          <div className="gap-6 flex justify-between text-lg font-medium">
            <button className="border border-border-grey py-4 px-10 rounded-lg text-primary">
              Login
            </button>
            <button className="flex gap-3 items-center border border-primary py-4 px-10 rounded-lg bg-primary text-white">
              Try Kiskas free
              <ArrowRight color="#fff" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-[70%] bg-bg-grey z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium text-text-black xl:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Close Menu"
            className="absolute top-5 right-5 text-text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <a
            href="#features"
            onClick={toggleMenu}
            className="hover:text-black transition"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={toggleMenu}
            className="hover:text-black transition"
          >
            Pricing
          </a>
          <a
            href="#how"
            onClick={toggleMenu}
            className="hover:text-black transition"
          >
            How It Works
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-black transition"
          >
            Contact
          </a>

          <button className="border border-border-grey py-4 px-10 rounded-lg text-primary">
            Login
          </button>
          <button className="flex gap-3 items-center border border-primary py-4 px-10 rounded-lg bg-primary text-white">
            Try Kiskas free
            <ArrowRight color="#fff" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
