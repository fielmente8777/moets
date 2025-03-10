import { footerLinkProps, navLinkProps, socialLinkProps } from "@/@types/types";
import {
  FillFacebook,
  FillInstagram,
  FillTwitter,
} from "@/icons/icons";

export const imageUrl =
  "https://eazotel-client-webp-image.s3.ap-south-1.amazonaws.com/yakumi/";

export const NavLink: navLinkProps[] = [
  {
    id: 1,
    label: "home",
    href: "#",
  },
  {
    id: 2,
    label: "About us",
    href: "#about",
  },
  {
    id: 3,
    label: "Menu",
    href: "#features",
  },
  {
    id: 4,
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 5,
    label: "gallery",
    href: "#reviews",
  },
];

export const SocialLink: socialLinkProps[] = [
  {
    id: 1,
    label: "instagram",
    icon: <FillInstagram />,
    href: "https://www.instagram.com/burgergullykolkata/?hl=en",
  },
  {
    id: 2,
    label: "twitter",
    icon: <FillTwitter />,
    href: "",
  },
  {
    id: 3,

    label: "facebook",
    icon: <FillFacebook />,
    href: "https://www.facebook.com/people/Burger-Gully-Kolkata/61559753117983/#",
  },
];

export const FooterLink: footerLinkProps[] = [
  {
    id: 1,
    title: "quick links",
    links: [
      {
        id: 1,
        label: "About us",
        href: "#about",
      },
      {
        id: 2,
        label: "Menu",
        href: "#features",
      },
      {
        id: 3,
        label: "Testimonials",
        href: "#testimonials",
      },
      {
        id: 4,
        label: "Gallery",
        href: "#reviews",
      },
    ],
  },
  {
    id: 2,
    title: "get in touch",
    links: [
      {
        id: 1,
        title: "address",
        label:
          "LGF, Elan Epics, Southern Peripheral Rd, Opp. Tulip Voilet, Sector 70, Gurugram, Haryana - 122001",
        href: "https://maps.app.goo.gl/9di9cekSU5ygmrhc6",
      },
      {
        id: 3,
        title: "call",
        label: "+91 93559 31110",
        href: "tel:+91 93559 31110",
      },
      {
        id: 2,
        title: "email",
        label: "operations.elanmall@moets.com",
        href: "mailto:operations.elanmall@moets.com",
      },
    ],
  },
  {
    id: 3,
    title: "opening hours",
    links: [
      {
        id: 1,
        label: "Mon to Sun",
        href: "12:30PM – 12AM",
      },
    ],
  },
];
