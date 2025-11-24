import {
  BookingRatingIcon,
  ExpediaRatingIcon,
  HotelRatingIcon,
  TripAdvisorRatingIcon,
} from "@/icons/icons";
import { contact } from "@/utils/constent";

export const pageData = {
  bannerData: {
    title: "Perfection by the Riverside",
    subTitle: "",
    location: "Manali, Himachal Pradesh",
    image: {
      src: "/images/BannerImage.jpg",
      alt: "BannerImage",
    },
    logo: {
      src: "/images/Logo.png",
      alt: "BannerImage",
    },

    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
  },
  aboutData: {
    title: "ABOUT US",
    subtitle: "Moets Waterfront Estate",
    description:
      "True to its name, Moets Waterfront Estate spans 2 acres near the river, featuring a charming country façade, landscaped lawns, and scenic walkways. Its elegant bedrooms offer stunning mountain views, creating a serene escape surrounded by greenery, water, and hills.",
    image: {
      src: "/images/AboutImage.jpg",
      alt: "Abstract futuristic web development illustration",
    },
    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
  },
  onlinePlatforms: {
    title: "HIGHEST RATINGS ON ONLINE PLATFORMS",
    cards: [
      {
        icon: <TripAdvisorRatingIcon />,
        src: "/images/Tripadvisor-Logo.png",
        partnerName: "TripAdvisor",
        ratings: "4.5/5",
      },
      {
        icon: <HotelRatingIcon />,

        src: "/images/makemytrip-logo.png",
        partnerName: "Booking.com",
        ratings: "9.7/10",
      },
      {
        icon: <BookingRatingIcon />,
        src: "/images/Booking.Com-logo.png",
        partnerName: "Hotels.com",
        ratings: "9.5/10",
      },
      {
        icon: <ExpediaRatingIcon />,
        src: "/images/cleartrip-logo.png",
        partnerName: "Expedia",
        ratings: "9.6/10",
      },
    ],
  },
  accomodation: {
    title: "LUXURY ACCOMMODATION AT",
    subtitle: "Moets Waterfront Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      {
        src: "/images/Room1.jpg",
        alt: "Abstract futuristic web development illustration",
      },
      // {
      //   src: "/images/AboutImage.jpg",
      //   alt: "Abstract futuristic web development illustration",
      // },
    ],
    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
  },
  experienceData: {
    title: "EXPERIENCES & ACTIVITIES AT",
    subTitle: "Moets Waterfront Estate",
    cards: [
      {
        title: "ATV RIDING",
        image: {
          src: "/images/Experience1.jpg",
          alt: "ATV RIDING",
        },
      },
      {
        title: "BONFIRE",
        image: {
          src: "/images/Experience2.jpg",
          alt: "BONFIRE",
        },
      },
      {
        title: "KARAOKE UNDER THE STARS",
        image: {
          src: "/images/Experience3.jpg",
          alt: "KARAOKE UNDER THE STARS",
        },
      },
    ],
    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
  },
  testimonialData: {
    title: "TESTIMONIALS",
    subTitle: "Appreciation From Our Guests",

    cards: [
      {
        name: "Lorem",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
      {
        name: "John Doe",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
    ],

    images: [
      {
        src: "/images/AboutImage.jpg",
        alt: "Abstract futuristic web development illustration",
      },
    ],

    link: {
      label: "Book Now",
      href: `tel:${contact.phone[0]}`,
    },
  },
};
