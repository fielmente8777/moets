"use client";

import { Section } from "@/components";
import LinkButton from "@/components/buttons/LinkButton";
import SwiperCarousel from "@/components/Sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

type Testimonial = {
  title: string;
  subTitle: string;
  cards: {
    name: string;
    review: string;
  }[];
  images: {
    src: string;
    alt: string;
  }[];
  link: {
    label: string;
    href: string;
  };
};

const Testimonial = ({ title, subTitle, cards, images, link }: Testimonial) => {
  const isNavigation = images?.length > 1 ? true : false;
  return (
    <Section className="bg-bg !p-0">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 items-center">
        <div className="md:col-span-8 col-span-1 relative testimonial-card">
          <SwiperCarousel
            data={images}
            navigation={isNavigation}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
            }}
            renderSlide={(img) => {
              return (
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }}
          />

          <div className="absolute bottom-6 w-full flex justify-center z-50">
            <LinkButton
              label={link.label}
              href={link.href}
              download
              icon={false}
            />
          </div>
        </div>

        <div className="lg:col-span-4 col-span-1 space-y-6 p-3">
          <div>
            <h2>{title}</h2>
            <h3 className="md:text-5xl text-3xl text-primary2 font-medium mendl">
              {subTitle}
            </h3>
          </div>
          <GoogleIcon />

          <SwiperCarousel
            data={cards}
            renderSlide={(item) => (
              <div className="space-y-4">
                <p>{item.review}</p>
                <h2 className="font-bold">{item.name}</h2>
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;

const GoogleIcon = () => {
  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_14_1983"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="62"
        height="62"
      >
        <path d="M62 0H0V62H62V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_14_1983)">
        <path
          d="M13.7406 37.4676L11.5824 45.5243L3.69444 45.6912C1.33712 41.3188 0 36.3163 0 31.0003C0 25.8598 1.25017 21.0121 3.46618 16.7437H3.46788L10.4904 18.0311L13.5666 25.0115C12.9228 26.8886 12.5719 28.9036 12.5719 31.0003C12.5721 33.276 12.9843 35.4562 13.7406 37.4676Z"
          fill="#FBBB00"
        />
        <path
          d="M61.4605 25.209C61.8165 27.0842 62.0021 29.0209 62.0021 31.0002C62.0021 33.2195 61.7687 35.3844 61.3242 37.4727C59.8151 44.5789 55.8719 50.784 50.4095 55.1751L50.4078 55.1733L41.5627 54.7221L40.3108 46.9073C43.9354 44.7816 46.7679 41.455 48.26 37.4727H31.6836V25.209H48.502H61.4605Z"
          fill="#518EF8"
        />
        <path
          d="M50.4045 55.1735L50.4062 55.1752C45.0937 59.4453 38.3451 62.0003 30.9989 62.0003C19.1933 62.0003 8.92932 55.4018 3.69336 45.6913L13.7394 37.4678C16.3573 44.4547 23.0974 49.4283 30.9989 49.4283C34.3952 49.4283 37.5771 48.5102 40.3074 46.9074L50.4045 55.1735Z"
          fill="#28B446"
        />
        <path
          d="M50.7858 7.13678L40.7432 15.3585C37.9175 13.5923 34.5772 12.572 30.9986 12.572C22.9182 12.572 16.0522 17.7738 13.5654 25.0112L3.46654 16.7433H3.46484C8.62416 6.79614 19.0176 0 30.9986 0C38.5204 0 45.417 2.67932 50.7858 7.13678Z"
          fill="#F14336"
        />
      </g>
    </svg>
  );
};
