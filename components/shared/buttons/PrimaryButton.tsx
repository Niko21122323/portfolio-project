import Link from "next/link";
import { cloneElement, ReactElement, SVGProps } from "react";

interface PrimaryButtonProps {
  text: string;
  link: string;
  children?: ReactElement<SVGProps<SVGSVGElement>>;
}

const PrimaryButton = ({ text, link, children }: PrimaryButtonProps) => {
  const icon =
    children &&
    cloneElement(children, {
      className: "text-white text-sm",
    });

  return (
    <Link
      href={link}
      className="relative flex items-center bg-black py-3 px-6 w-fit rounded-full overflow-hidden hover:bg-[#2092e9] transition-colors duration-500 ease-in-out group"
    >
      {icon && <div className="relative z-10 pr-3">{icon}</div>}
      <div>
        <span className="relative z-10 text-white text-base pl-3 border-l border-white/30">
          {text}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2092e9] group-hover:h-full transition-all duration-300 ease-in-out z-0"></div>
    </Link>
  );
};

export default PrimaryButton;
