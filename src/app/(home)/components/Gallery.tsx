"use client";
import { GalleryDataProps } from "@/@types/types";
import { Button, MainHeading, SectionWithContainer } from "@/components";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Gallery: React.FC<GalleryDataProps> = ({
  title,
  images,
  subTitle,
  label,
  href,
}) => {
  const gridPattern = [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-2 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    <SectionWithContainer
      sectionId="gallery"
      sectionClassName="bg-gradient-to-b from-white to-secondary"
    >
      <div className="flex flex-col items-center justify-center w-full lg:gap-14 gap-7 our_features_swiper">
        <MainHeading
          title={title}
          h2
          className="text-center heading1  uppercase "
        />
        <MainHeading
          title={subTitle}
          h3
          className="text-primary text-center largeHeading font_go uppercase letter_spacing font-semibold"
        />
        <div className="lg:grid grid-cols-4 gap-6 auto-rows-[15rem] grid-flow-row w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full aspect-auto relative rounded-lg overflow-hidden ${gridPattern[index]}`}
            >
              <Image
                src={image}
                alt={title + index}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            modules={[Pagination, Navigation]}
            navigation
            pagination={{ clickable: true, el: ".pagination_1" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="w-full lg:aspect-[4/3] aspect-[4/3] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image}
                  alt={title + index}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="pagination_1 flex items-center justify-center gap-1 w-full"></div>

        <Button href={href} label={label} newTabe className="" />
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
