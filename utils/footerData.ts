type Target = "_self" | "_blank";

type FooterLink = {
  id: number;
  label: string;
  url: string;
  target: Target;
};

type FooterContent = {
  id: number;
  label: string;
};

type ContentData = {
  id: number;
  title: string;
  type: "content";
  content: FooterContent[];
};

type LinkData = {
  id: number;
  title: string;
  type: "links";
  links: FooterLink[];
};

export type FooterData = ContentData | LinkData;

const getLocalTime = (): string => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Europe/Skopje",
    timeZoneName: "short",
  }).format(new Date());
};

export const getFooterData = (): FooterData[] => {
  return [
    {
      id: 1,
      title: "Location & Time",
      type: "content",
      content: [
        { id: 1, label: "Skopje, Macedonia" },
        { id: 2, label: getLocalTime() },
      ],
    },
    {
      id: 2,
      title: "Navigation",
      type: "links",
      links: [
        { id: 1, label: "Home", url: "/", target: "_self" },
        { id: 2, label: "About", url: "/about", target: "_self" },
        { id: 3, label: "Projects", url: "/projects", target: "_self" },
      ],
    },
    {
      id: 3,
      title: "Contact",
      type: "links",
      links: [
        {
          id: 1,
          label: "stojanovski21n@gmail.com",
          url: "mailto:stojanovski21n@gmail.com",
          target: "_self",
        },
        {
          id: 2,
          label: "+ 389 78 333 705",
          url: "tel:078333705",
          target: "_self",
        },
      ],
    },
    {
      id: 4,
      title: "Socials",
      type: "links",
      links: [
        {
          id: 1,
          label: "LinkedIn",
          url: "https://linkedin.com",
          target: "_blank",
        },
        { id: 2, label: "Github", url: "https://github.com", target: "_blank" },
      ],
    },
  ];
};
