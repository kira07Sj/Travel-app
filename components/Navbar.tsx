'use client'

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constant";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'



const Navbar = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  const [open, setOpen] = useState(false);

  // Function to toggle the menu
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="flexBetween max-container items-center
     padding-container relative z-30 py-5 ">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flex hidden">
        <Button
          variant="btn_dark_green"
          icon="/icon.png"
          type="button"
          title="Login"
        />
      </div>

      {/* Menu/Close Icon for Mobile */}
      <Image
        src={open ? "/close.png" : "/menu.svg"} // Change icon based on open state
        width={32}
        height={32}
        alt={open ? "close menu" : "open menu"}
        className="inline-block cursor-pointer lg:hidden fixed
        right-8 z-[25]"
        onClick={handleToggle} // Toggle the menu on click
      />

      {/* Mobile Menu */}
      {open && (
        <div className="fixed lg:hidden flex 
        flex-col w-full top-0 right-0 backdrop-blur-lg
         " data-aos='fade-down' data-aos-duration='500'>
          <ul className="h-full flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="bold-16 text-black flexCenter cursor-pointer pb-1.5 my-5 transition-all hover:font-bold"
                onClick={() => setOpen(false)} // Close the menu on link click
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
