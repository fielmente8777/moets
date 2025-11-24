"use client";
import { Container, Section } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import SwiperCarousel from "@/components/Sliders/SwiperCarousel";
import Image from "next/image";
import React from "react";

type ExperienceProps = {
  title: string;
  subTitle?: string;

  cards: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
  }[];

  link: {
    label: string;
    href: string;
  };
};

const Experience = ({ title, subTitle, cards, link }: ExperienceProps) => {
  return (
    <Section className="md:mt-16">
      <Container className="">
        <div className="flex justify-end">
          <div className="flex flex-col items-end max-w-96 w-full">
            <h2>{title}</h2>
            <h3 className="md:text-5xl text-3xl text-end text-primary2">
              {subTitle}
            </h3>
          </div>
        </div>

        <div className="lg:grid hidden md:grid-cols-3 gap-5 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative w-full aspect-[4/4.4] border ${index == 1 && `mt-16`} ${index == 2 && `mt-32`}`}
            >
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 bg-white/60 w-full flex justify-center py-2">
                <h2>{card.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden block mt-12">
          <SwiperCarousel
            data={cards}
            className="w-full h-full"
            renderSlide={(card, index) => (
              <div
                key={index}
                className={`relative w-full aspect-[4/4.4] border`}
              >
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  className="object-cover"
                />

                <div className="absolute bottom-0 bg-white/60 w-full flex justify-center py-2">
                  <h2>{card.title}</h2>
                </div>
              </div>
            )}
          />
        </div>

        <div className="flex justify-center mt-6">
          <LinkButton href={link.href} label={link.label} />
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
