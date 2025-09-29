"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Nav */}
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] transition-colors duration-300 rounded-[50px] min-h-[60px] py-[15px] px-[30px] ${
          scrolled
            ? "bg-white shadow-bottom border border-black text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* left block: logo + (desktop) links */}
          <div className="flex items-center gap-6 lg:gap-20">
            {/* Desktop logo */}
            <div className="hidden lg:block relative">
              <Image
                src={scrolled ? "/logo.webp" : "/logo-white.webp"}
                alt="Logo"
                width={130}
                height={130}
              />
              <span className="absolute top-0 right-[-25px] text-[12px] font-semibold">TM</span>
            </div>

            {/* Mobile logo */}
            <div className="lg:hidden relative">
              <Image
                src={scrolled ? "/logo.webp" : "/logo-white.webp"}
                alt="Logo"
                width={110}
                height={110}
              />
              <span className="absolute top-0 right-[-18px] text-[10px] font-semibold">TM</span>
            </div>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-10">
              <li><a href="">DOWNLOAD</a></li>
              <li><a href="">LEARN</a></li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              title="Open Dashboard"
              className={`min-w-[150px] text-[16px] border ${
                scrolled ? "border-none" : "border-white bg-transparent"
              }`}
            />
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Animated Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-white text-black flex flex-col h-screen"
          >
            {/* top row: logo + close */}
            <div className="flex items-center justify-between px-6 py-5">
              <div className="relative">
                <Image src="/logo.webp" alt="Logo" width={110} height={110} />
                <span className="absolute top-0 right-[-18px] text-[10px] font-semibold">TM</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-2xl p-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* center nav links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-10 text-xl font-medium">
              <a href="#">START NOW</a>
              <a href="#">OPEN DASHBOARD</a>
              <a href="#">DOWNLOAD</a>
              <a href="#">LEARN</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;