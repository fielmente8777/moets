import {
  FillCallIcon,
  FillFaceBookIcon,
  FillInstaIcon,
  FillLocationIcon,
  FillMailIcon,
} from "@/icons/icons";
import { contact } from "@/utils/constent";

interface FooterData {
  logo: string;
  description: string;
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/images/Logo2.png",
  description:
    "Discover the perfect fusion of luxury, adventure, and Himalayan serenity at Northwind57, your ultimate escape in Bir.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: `Address: ${contact.address}`,
          href: contact.addressLink,
        },
        {
          title: "Phone: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
        // {
        //   icon: <FillLinkedinIcon />,
        //   label: "Linkedin",
        //   href: contact.socialMedia.instagram,
        // },
      ],
    },
  ],
};

export const footerData2: FooterData = {
  logo: "/images/Logo2.png",
  description:
    "Discover the perfect fusion of luxury, adventure, and Himalayan serenity at Northwind57, your ultimate escape in Bir.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: `Address: ${contact.address}`,
          href: contact.addressLink,
        },
        {
          title: "Phone: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
        // {
        //   icon: <FillLinkedinIcon />,
        //   label: "Linkedin",
        //   href: contact.socialMedia.linkedin,
        // },
      ],
    },
  ],
};
