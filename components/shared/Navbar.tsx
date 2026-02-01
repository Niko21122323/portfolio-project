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
  const buttonRef = useRef(null);

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
      // Get button dimensions
      const buttonWidth = buttonRef.current?.offsetWidth || 0;
      const buttonHeight = buttonRef.current?.offsetHeight || 0;

      gsap.to(menuRef.current, {
        width: `${buttonWidth}px`,
        height: `${buttonHeight}px`,
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
      <div className="relative container mx-auto xl:max-w-7xl px-6">
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
              ref={buttonRef}
              type="button"
              onClick={toggleMenu}
              className="relative z-[60] flex items-center bg-black py-3 px-6 w-fit rounded-full overflow-hidden cursor-pointer"
            >
              <div className="relative z-10 pr-3">
                <GoPerson className="text-base text-white" />
              </div>
              <div>
                <span className="relative z-10 text-white text-base pl-3 border-l border-white/30">
                  My Socials
                </span>
              </div>
            </button>
          </div>
        </div>
        {/* Animated wrapper */}
        <div
          ref={menuRef}
          style={{
            width: "0px",
            height: "0px",
            overflow: "hidden",
          }}
          className="absolute top-0 right-6 bg-black z-50 rounded-3xl"
        >
          <div
            ref={contentRef}
            style={{ opacity: 0 }}
            className="w-[400px] h-[400px] p-10 text-white"
          >
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
