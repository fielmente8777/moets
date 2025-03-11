import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import { AboutUsDataProps } from "@/@types/types";
import Link from "next/link";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  image,
  buttons,
}) => {
  return (
    <>
      <div className={`lg:grid grid-cols-2 lg:items-center gap-6 `}>
        <div className={`col-span-1 w-full lg:block hidden`}>
          <div className="relative w-full aspect-[4/5.6]">
            <Image src={image} alt="alt" fill className={"object-cover"} />
          </div>
        </div>
        <div className={` flex flex-col gap-4 col-span-1  `}>
          {title && (
            <div className="flex flex-col gap-2 max-sm:items-center w-full">
              <h2 className="capitalize artifex text-dark font-medium heading1">
                {title}
              </h2>
              <h3 className="capitalize mendl text-primary largeHeading font-semibold">
                {subtitle}
              </h3>
            </div>
          )}
          <div className="relative w-full aspect-[4/5.9] lg:hidden">
            <Image src={image} alt="alt" fill className={"object-cover"} />
          </div>
          {desc && (
            <Paragraph
              text={desc}
              className="description1 max-sm:text-center"
            />
          )}
          <div className="flex max-sm:flex-col-reverse items-center lg:gap-5  lg:mt-4">
            <Link href={buttons[0].href} className="text-white bg-primary text-base capitalize py-3 px-6 description2 avenir-book rounded-full font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100">
              {buttons[0].label}
            </Link>
            <Link
              href={buttons[1].href}
              className=" text-primary underline underline-offset-1 avenir-book text-base capitalize py-3 px-6 description2 rounded-full font-medium  transition-all duration-300 ease-in-out active:scale-100"
            >
              {buttons[1].label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoColGridCard;
