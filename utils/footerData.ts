type FooterData = {
  id: number;
  title: string;
  content?: {
    id: number;
    label: string;
  }[];
  links?: {
    id: number;
    label: string;
    link: string;
    target: "_self" | "_blank";
  }[];
};

export const getFooterData = (): FooterData[] => {
  const now = new Date();
  const currentTime =
    now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/Skopje",
    }) + " GMT+1";

  return [
    {
      id: 1,
      title: "Location & Time",
      content: [
        {
          id: 1,
          label: "Skopje, Macedonia",
        },
        {
          id: 2,
          label: currentTime,
        },
      ],
    },
    {
      id: 2,
      title: "Navigation",
      links: [
        {
          id: 1,
          label: "Home",
          link: "/",
          target: "_self",
        },
        {
          id: 2,
          label: "About",
          link: "/about",
          target: "_self",
        },
        {
          id: 3,
          label: "Projects",
          link: "/projects",
          target: "_self",
        },
      ],
    },
    {
      id: 3,
      title: "Contact",
      links: [
        {
          id: 1,
          label: "stojanovski21n@gmail.com",
          link: "mailto:stojanovski21n@gmail.com",
          target: "_self",
        },
        {
          id: 2,
          label: "+ 389 78 333 705",
          link: "tel:078333705",
          target: "_self",
        },
      ],
    },
    {
      id: 4,
      title: "Socials",
      links: [
        {
          id: 1,
          label: "LinkedIn",
          link: "/",
          target: "_blank",
        },
        {
          id: 2,
          label: "Github",
          link: "/",
          target: "_blank",
        },
      ],
    },
  ];
};
