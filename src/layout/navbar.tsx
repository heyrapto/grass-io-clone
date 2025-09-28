"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import React, { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-[90%] transition-colors duration-300 rounded-[50px] min-h-[60px] py-[15px] px-[30px] ${
        scrolled ? "bg-white shadow-bottom border border-black" : "bg-transparent"
      }`}
    >
        <div className="flex gap-20">
        <div className="relative">
        <Image
        src="/logo.webp"
        alt="Logo"
        width={130}
        height={130}
        />

        <span className="absolute top-0 right-[-25px] text-[12px] font-semibold">TM</span>
        </div>

        <ul className="flex items-center gap-10">
            <li><a href="">DOWNLOAD</a></li>
            <li><a href="">LEARN</a></li>
        </ul>
        </div>

        <Button 
        title="Open Dashboard"
        className={`min-w-[150px] text-[16px]`}
        />
    </nav>
  )
}

export default Navbar;