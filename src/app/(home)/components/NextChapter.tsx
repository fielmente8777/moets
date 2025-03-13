import {
  MainHeading,
  SectionWithContainer,
  Section,
  Button,
} from "@/components";
import { BtnIcon1, HeaderLogo2 } from "@/icons/icons";
import Image from "next/image";

interface theNextChapter {
  title: string;
  subtitle: string;
  desc: string;
  label: string;
  href: string;
}
const NextChapter: React.FC<theNextChapter> = ({
  title,
  subtitle,
  desc,
  label,
    href,
}) => {
  return (
    <Section id="nextChapter" className="bg-secondary bg_image">
      <SectionWithContainer containerClassName="relative p-4">
        <div className="flex flex-col lg:gap-6 gap-4 items-center justify-center">
          <div className="">
            <HeaderLogo2 />
            <MainHeading
              h2
              title={title}
              className="text-center artifex font-medium heading1 tracking-wider"
            />
          </div>
          <MainHeading
            h3
            title={subtitle}
            className="text-center largeHeading mendl text-primary uppercase"
          />
          <p className="description1 avenir text-center max-w-[59rem] mx-auto w-full">
            {desc}
          </p>
          <div className="flex items-center gap-5">
            {/* <button className="text-white bg-primary avenir-book text-base capitalize py-3 px-6 description2 rounded-full font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100">
              {label}
            </button> */}
            <div className="flex flex-col gap-2 items-center">
              <Button
                href={href}
                label={label}
                className="avenir-book "
              />
              <BtnIcon1 />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0  max-sm:left-3 max-sm:-top-6">
          {/* <div className="relative aspect-[4/1.5] lg:w-[15rem] lg:block hidden rotate-90"> */}
            <Image
              src={"/group.png"}
              alt="alt"
              // fill
              width={100}
              height={100}
              className={"object-contain rotate-90"}
            />
          {/* </div> */}
        </div>

        <div className="absolute bottom-0 right-0 max-sm:right-3 max-sm:-bottom-6">
         {/* <div className="relative aspect-[4/1.5] lg:w-[15rem] lg:block hidden rotate-90"> */}
         <Image
              src={"/group.png"}
              alt="alt"
              // fill
              width={100}
              height={100}
              className={"object-contain -rotate-90"}
            />
          {/* </div> */}
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default NextChapter;
