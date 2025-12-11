"use client";
import { Section } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import AmenitiesPopUp from "@/components/Popup/AmenitiesPopUp";
import SwiperCarousel from "@/components/Sliders/SwiperCarousel";
import Image from "next/image";

import React from "react";
import { Navigation } from "swiper/modules";

type AccomodationProps = {
  title: string;
  subtitle: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  link: {
    label: string;
    href: string;
  };
};

const Accomodation = ({
  title,
  subtitle,
  description,
  images,
  link,
}: AccomodationProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isNavigation = images?.length > 1 ? true : false;
  const viewAllAmenties = [
    {
      amenityType: "Amenities",
      amenities: [
        "Bonfire",
        "BBQ",
        "Lawn",
        "Balcony / Terrace",
        "Heater",
        "Wi-Fi",
        "Indoor / Outdoor Games",
        "Bathtub",
        "Music System / Speaker",
        "TV",
        "Refrigerator",
        "Driver / Staff Accommodation",
        "Bar",
        "Parking",
        "Daily Housekeeping",
        "Bathroom",
        "In-room Dining",
        "Mineral Water",
        "Room Service",
      ],
    },
  ];
  return (
    <Section className="bg-primary2 md:!pt-32 text-white relative">
      <div className="w-full h-full">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-16">
          <div className="lg:col-span-5 col-span-1 flex flex-col space-y-6 w-full md:px-16 px-6">
            <div className="relative max-w-40 w-full aspect-[4/2]">
              <Image
                src={"/images/Home.png"}
                alt={"Home Image"}
                className="object-contain"
                fill
              />
            </div>

            <div className="space-y-4">
              <h2 className="avenir">{title}</h2>
              <h3 className="md:text-6xl text-3xl mendl">{subtitle}</h3>

              <button
                className="underline inline-block"
                onClick={() => setIsOpen(!isOpen)}
              >
                VIEW AMENITIES
              </button>

              <AmenitiesPopUp
                viewAllAmenities={viewAllAmenties}
                isOpen={isOpen}
                setIsOpenAmenityPopup={() => setIsOpen(false)}
              />
            </div>

            <div className="lg:hidden block w-full aspect-square">
              <SwiperCarousel
                data={images}
                className="w-full h-full"
                renderSlide={(img) => {
                  return (
                    <div className="w-full h-full relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[98%] h-[98%] border" />
                    </div>
                  );
                }}
              />
            </div>

            <div className="space-y-6">
              <p className="text-justify">{description}</p>

              <div>
                <LinkButton
                  className="!text-primary2 bg-white"
                  label={link.label}
                  href={link.href}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block col-span-7 relative w-full aspect-[4/3] room-card">
            <SwiperCarousel
              data={images}
              className="w-full h-full"
              navigation={isNavigation}
              modules={[Navigation]}
              renderSlide={(img) => {
                return (
                  <div className="w-full h-full relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[98%] h-[98%] border" />
                  </div>
                );
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute right-16 top-5 w-28 h-28">
        <Image
          src={"/images/Waves.png"}
          alt="Waves"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute right-16 top-5 w-28 h-28">
        <Image
          src={"/images/Waves.png"}
          alt="Waves"
          fill
          className="object-contain"
        />
      </div>

      <div className="md:block hidden absolute right-6 -bottom-16 w-28 h-28 bg-white z-40">
        <Image
          src={"/images/Logo.png"}
          alt="Waves"
          fill
          className="object-cover"
        />
      </div>
    </Section>
  );
};

export default Accomodation;
