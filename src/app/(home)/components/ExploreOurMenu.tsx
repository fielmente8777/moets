"use client";
import { MainHeading, SectionWithContainer } from "@/components";
import SliderSwip from "@/components/SliderSwip";
import {
  BtnIcon1,
  HeaderLogo2,
  OutLineBtnNext,
  OutLineBtnPrev,
} from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface exploreOurMenu {
  title: string;
  cards: {
    id: number;
    category: string;
    src: string;
  }[];
  buttons: {
    label: string;
    href: string;
  }[];
}
const ExploreOurMenu: React.FC<exploreOurMenu> = ({
  title,
  cards,
  buttons,
}) => {
  const categories = [...new Set(cards.map((card) => card.category))];
  const [selectCategory, setSelectCategory] = useState(categories[0]);

  const filteredCards = cards.filter(
    (card) => card.category === selectCategory
  );

  return (
    <SectionWithContainer
      sectionClassName="bg-gradient-to-b from-white to-secondary"
      sectionId="menu"
    >
      <div className="flex flex-col gap-6 lg:gap-10 items-center justify-center max-sm:overflow-hidden">
        <div className="">
          <HeaderLogo2 />
          <MainHeading
            h2
            title={title}
            className="text-center heading1 artifex tracking-wider"
          />
        </div>
        <div className="flex items-center justify-center gap-4 overflow-x-scroll w-full hide-scrollbar">
          {categories?.map((category, index) => (
            <button
              key={index}
              className={`${selectCategory === category ? "bg-primary text-white" : "bg-[#F5F5F5] text-primary border border-[#C29355]"} text-nowrap avenir py-2 px-4 rounded-lg font-medium transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100`}
              onClick={() => setSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="w-full relative commonSwiper">
          <SliderSwip
            data={filteredCards}
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{ clickable: true, el: ".pagination_2" }}
            // autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{
              nextEl: ".menu_next",
              prevEl: ".menu_prev",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
            }}
          >
            {(card) => (
              <div className="w-full aspect-[4/5.5] relative">
                <Image
                  src={card.src}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </SliderSwip>
          <button className="menu_prev shadow-xl hidden absolute -left-6 top-1/2 -translate-y-1/2 filter backdrop:blur-md w-12 aspect-square rounded-full bg-white text-clr2 lg:flex items-center justify-center disabled:opacity-0 z-10">
            <OutLineBtnPrev />
          </button>
          <button className="menu_next shadow-xl hidden absolute -right-6 top-1/2 -translate-y-1/2 filter backdrop:blur-md w-12 aspect-square rounded-full bg-white text-clr2 lg:flex items-center justify-center disabled:opacity-0 z-10">
            <OutLineBtnNext />
          </button>
          <div className="pagination_2 flex items-center justify-center gap-1 mt-4"></div>
        </div>
        <div className="flex flex-col items-center lg:gap-2 lg:mt-4">
          <Link
            href={buttons[0].href}
            className=" text-primary underline avenir-book underline-offset-1 text-base capitalize py-3 px-6 description2 rounded-full font-medium  transition-all duration-300 ease-in-out active:scale-100"
          >
            {buttons[0].label}
          </Link>
          <div className="flex flex-col items-center gap-2">
            <Link
              href={buttons[1].href}
              className="text-white bg-primary avenir-book text-base capitalize py-3 px-6 description2 rounded-full font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100"
            >
              {buttons[1].label}
            </Link>
            <BtnIcon1 />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ExploreOurMenu;
