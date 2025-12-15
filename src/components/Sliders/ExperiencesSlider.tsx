"use client";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import { ExperienceProps } from "@/app/(estate)/components/Experience";

interface ExperiencesSliderProps {
  cards: ExperienceProps["cards"];
}

const ExperiencesSlider: React.FC<ExperiencesSliderProps> = ({ cards }) => {
  const mobileCards = cards.map((card) => card.images); // Extract mobile card sources

  // Flatten the array of mobile card sources
  const arrayCards = mobileCards.reduce<
    { title: string; image: { src: string; alt: string } }[]
  >((acc, curr) => acc.concat(curr), []);

  console.log(arrayCards);
  return (
    <div className="w-full">
      {/* Desktop grid Slider */}
      <div className="lg:grid hidden md:grid-cols-3 gap-5 mt-12">
        {cards.map((card, index) => (
          <div
            className={`relative w-full aspect-[4/4.4] border ${index == 1 && `mt-16`} ${index == 2 && `mt-32`}`}
            key={index}
          >
            <SwiperCarousel
              speed={100}
              data={card.images}
              slidesPerView={1}
              spaceBetween={0}
              modules={[EffectFade, Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              effect={"fade"}
              fadeEffect={{
                crossFade: true,
              }}
              renderSlide={(card) => (
                <div className={`relative w-full aspect-[4/4.4]`}>
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
        ))}
      </div>
      {/* mobile slider */}
      <div className="w-full md:hidden block mt-12">
        <SwiperCarousel
          data={
            arrayCards as {
              title: string;
              image: { src: string; alt: string };
            }[]
          }
          slidesPerView={1}
          spaceBetween={0}
          modules={[EffectFade, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect={"fade"}
          fadeEffect={{
            crossFade: true,
          }}
          renderSlide={(src) => (
            <div className="w-full relative aspect-[4/2.8]">
              <Image
                src={src.image.src}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={`Experience`}
                className="object-cover"
              />

              <div className="absolute bottom-0 bg-white/60 w-full flex justify-center py-2">
                <h2>{src.title}</h2>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ExperiencesSlider;
