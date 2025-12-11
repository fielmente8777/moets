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
      "Nestled along the water’s edge, Moets Waterfront Estate combines modern elegance with natural beauty, offering spacious living areas, stylish interiors, and top-notch amenities. The property is designed to provide guests with a tranquil retreat, featuring expansive outdoor spaces and a fully equipped kitchen for a seamless stay. With its stunning location and attention to detail, Moets Waterfront Estate Raison ensures a memorable experience for anyone seeking comfort and sophistication in a peaceful waterfront setting.",
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
        name: "Praveen Trivedi",
        review:
          "What an amazing stay, amazing riverfront property and delicious food. The entire staff like Naresh ji and chef Rama ji were amazing. Rama ji prepared the food exactly as per our taste every time. Rooms were beautiful, especially the first-floor ones with a nice river view. Overall an amazing stay.",
      },
      {
        name: "Padmanabha Sarkar",
        review:
          "Love the ambience and the service was exceptional. Amenities were ample with tons of recreational options. Highly recommended for Manali visitors.",
      },
      {
        name: "Yogesh Sawant",
        review:
          "The little mansion is right next to the Beas river with a massive lawn and outdoor spaces. The food was exceptionally good with amazing flavours and texture. Had an amazing 4-day stay close to Manali yet secluded.",
      },
      {
        name: "Akhilesh Kumar Trivedi",
        review:
          "We had a great stay at Moets Waterfront Estate at Raison. The riverfront was amazing, and we took long leisurely walks along it. The food was particularly good, and the people were nice. Maintenance could have been better, but overall, it was an excellent experience.",
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
