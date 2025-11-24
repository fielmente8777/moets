import { Container, Section } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import Image from "next/image";

import React from "react";

type AboutUsProps = {
  title: string;
  subtitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: {
    label: string;
    href: string;
  };
};
const About = ({ title, subtitle, description, image, link }: AboutUsProps) => {
  return (
    <Section id="next-section" className="bg-bg md:!pt-32">
      <Container className="!mx-0 !max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:block hidden col-span-7 relative w-full aspect-[4/3] ">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[98%] h-[98%] border" />
          </div>

          <div className="md:col-span-5 flex flex-col items-center justify-center space-y-6 w-full">
            <div className="relative max-w-40 w-full aspect-[4/2]">
              <Image
                src={"/images/Home.png"}
                alt={image.alt}
                className="object-contain"
                fill
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-center">{title}</h2>
              <h3 className="text-center md:text-6xl text-3xl text-primary2">
                {subtitle}
              </h3>
            </div>

            <div className="lg:hidden block relative w-full aspect-[4/3] ">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[98%] h-[98%] border" />
            </div>

            <div className="space-y-6">
              <p className="text-center">{description}</p>

              <div className="flex justify-center">
                {" "}
                <LinkButton label={link.label} href={link.href} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
