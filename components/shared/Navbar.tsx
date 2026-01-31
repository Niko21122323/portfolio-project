"use client";

import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const contentRef = useRef(null);

  const navbarLinks = [
    {
      id: 1,
      label: "About",
      link: "/about",
    },
    {
      id: 2,
      label: "Projects",
      link: "/projects",
    },
  ];

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        width: "400px",
        height: "400px",
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(contentRef.current, {
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        width: "0%",
        height: "0%",
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.06,
        ease: "power3.out",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-10">
      <div className="relative container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">Nikola</Link>
          </div>
          <div className="flex items-center gap-10">
            {navbarLinks.map((link) => (
              <Link key={link.id} href={link.link}>
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleMenu}
              className="relative z-[60] flex items-center bg-black py-3 px-6 w-fit overflow-hidden cursor-pointer hover:bg-[#2092e9] transition-colors duration-500 ease-in-out group"
            >
              <div className="relative z-10 pr-3">
                <GoPerson className="text-base text-white" />
              </div>
              <div>
                <span className="relative z-10 text-white text-base pl-3 border-l border-white/30">
                  My Socials
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2092e9] group-hover:h-full transition-all duration-300 ease-in-out z-0"></div>
            </button>
          </div>
        </div>

        {/* Animated wrapper */}
        <div
          ref={menuRef}
          style={{
            width: "0%",
            height: "0%",
            overflow: "hidden",
          }}
          className="absolute top-0 right-6 bg-black z-50"
        >
          {/* Fixed-size content container */}
          <div
            ref={contentRef}
            style={{ opacity: 0 }}
            className="w-[400px] h-[400px] p-10 text-white"
          >
            {/* Your content here */}
            <h3 className="text-xl font-bold mb-4">My Socials</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#2092e9] transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2092e9] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2092e9] transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
