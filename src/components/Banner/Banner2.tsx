"use client";
import React from "react";
import Section from "../SectionComponents/Section";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import { LocationIcon, PlayIcon } from "@/icons/icons";

type BannerProps = {
  title: string;
  subTitle?: string;
  location: string;
  link: {
    href: string;
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
  logo: {
    src: string;
    alt: string;
  };
};

const Banner2 = ({ title, image, logo, location, link }: BannerProps) => {
  return (
    <Section className="!p-0">
      <div className="w-full md:aspect-[16/8] sm:aspect-[16/18] aspect-[16/24] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover "
          />
        </div>

        <div className={`absolute w-[99%] h-[99%] border flex items-center`}>
          <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
            <div className="relative max-w-60 w-full aspect-[4/3]">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="object-contain"
                fill
              />
            </div>

            <div className="text-white">
              <p className="text-center flex items-center gap-2 justify-center">
                <LocationIcon /> {location}
              </p>
              <h2 className="md:text-5xl text-3xl text-center font-bold uppercase max-w-96 mt-4">
                {title}
              </h2>
            </div>

            <div className="mt-20 flex md:flex-row flex-col items-center gap-4">
              <button className="flex items-center justify-center uppercase gap-2 w-fit px-6 py-3 bg-transparent border text-white barlow font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:shadow-lg rounded-sm">
                <PlayIcon /> PLAY VIDEO
              </button>
              <LinkButton
                icon={false}
                label={link.label}
                href={link.href}
                className="bg-white !text-black !px-10"
              />
            </div>

            <div className="md:absolute md:bottom-10 bottom-0 left-0 w-full flex justify-center mt-3">
              <div
                className="cursor-pointer flex flex-col gap-2 items-center"
                onClick={() => {
                  const nextSection = document.getElementById("next-section");
                  nextSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src={"/images/Mouse.png"}
                  alt="Mouse Icon"
                  width={25}
                  height={25}
                />
                <span className="text-white">Scroll to Explore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Banner2;
