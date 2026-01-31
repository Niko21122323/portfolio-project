"use client";

import { useRef } from "react";
import Link from "next/link";

import { getFooterData } from "@/utils/footerData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerData = getFooterData();
  const footerRef = useRef(null);
  const footerContainerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-height: 600px)", () => {
      gsap.fromTo(
        footerContainerRef.current,
        {
          y: "-35%",
        },
        {
          y: "0",
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    });

    return () => mm.revert();
  });

  return (
    <footer ref={footerRef} className="bg-[#101113] overflow-hidden">
      <div
        ref={footerContainerRef}
        className="container mx-auto px-6 will-change-transform"
      >
        <div className="flex flex-col gap-24 sm:gap-44 pt-24 lg:pt-36 max-sm:pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {footerData.map((data) => (
              <div key={data.id}>
                <h4 className="text-white/50 text-xl font-medium pb-4 sm:pb-6">
                  {data.title}
                </h4>
                {data.type === "content" && (
                  <div className="flex flex-col gap-1">
                    {data.content.map((contentData) => (
                      <p key={contentData.id} className="text-white/90">
                        {contentData.label}
                      </p>
                    ))}
                  </div>
                )}
                {data.type === "links" && (
                  <div className="flex flex-col gap-1">
                    {data.links.map((linkData) => (
                      <Link
                        key={linkData.id}
                        href={linkData.url}
                        target={linkData.target}
                        className="block text-white/90"
                      >
                        {linkData.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <Link
              href="mailto:stojanovski21n@gmail.com"
              className="block text-white/90 text-6xl sm:text-[100px] md:text-[150px] lg:text-[200px] xl:text-[250px] leading-none"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
