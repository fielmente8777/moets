import { MainHeading, SectionWithContainer, Section } from "@/components";
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
  //   href,
}) => {
  return (
    <Section id="nextChapter" className="bg-secondary">
      <SectionWithContainer containerClassName="relative lg:p-4">
        <div className="flex flex-col lg:gap-6 gap-4 items-center justify-center">
          <MainHeading h2 title={title} className="text-center artifex font-medium heading1" />
          <MainHeading
            h3
            title={subtitle}
            className="text-center largeHeading mendl text-primary uppercase"
          />
          <p className="description1 avenir text-center max-w-[59rem] mx-auto w-full">
            {desc}
          </p>
          <div className="flex items-center gap-5">
            <button className="text-white bg-primary avenir text-base capitalize py-3 px-6 description1 rounded-full font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100">
              {label}
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 ">
          <div className="relative aspect-[4/1.5] lg:w-[15rem] lg:block hidden rotate-90">
            <Image
              src={"/group.png"}
              alt="alt"
              fill
              className={"object-contain"}
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <div className="relative lg:w-[15rem] lg:block hidden aspect-[4/1.5] -rotate-90">
            <Image
              src={"/group.png"}
              alt="alt"
              fill
              className={"object-contain"}
            />
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default NextChapter;
