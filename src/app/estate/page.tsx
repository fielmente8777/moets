import Banner2 from "@/components/Banner/Banner2";
import React from "react";
import { pageData } from "./pageData";
import { Container } from "@/components";
import Form1 from "@/components/Forms/Form1";
import About from "./components/About";
import OnlinePlatforms from "./components/OnlinePlatforms";
import Accomodation from "./components/Accomodation";
import Experience from "./components/Experience";
import Testimonial from "./components/Testimonial";
import OfferSlider from "@/components/Sliders/OfferSlider";
import Image from "next/image";

const Title = [
  "LIMITED TIME OFFER: UP TO 10% OFF – ENDS THIS DECEMBER",
  "LIMITED TIME OFFER: UP TO 10% OFF – ENDS THIS DECEMBER",
  "LIMITED TIME OFFER: UP TO 10% OFF – ENDS THIS DECEMBER",
];

const page = () => {
  return (
    <div>
      <Banner2 {...pageData.bannerData} />

      <div className="relative w-full h-32 mt-6">
        <Image
          className="object-cover"
          fill
          src="/images/HandImage.png"
          alt="Home Image"
        />
      </div>

      <div className="md:top-12 md:relative z-30 max-md:py-4 max-md:my-8 max-md:bg-dark2">
        <Container className="!py-2 !px-2 w-full bg-black">
          <div className="md:p-0">
            <Form1 />
          </div>
        </Container>
      </div>

      <About {...pageData.aboutData} />
      <OnlinePlatforms {...pageData.onlinePlatforms} />
      <Accomodation {...pageData.accomodation} />
      <Experience {...pageData.experienceData} />
      <div className="relative w-full bg-black">
        <OfferSlider offersTitle={Title} />

        <div className="absolute -top-9 left-0 w-20 aspect-[4/2]">
          <Image
            src={"/images/Home.png"}
            alt="Home Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Testimonial {...pageData?.testimonialData} />
    </div>
  );
};

export default page;
