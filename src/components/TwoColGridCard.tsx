import Image from "next/image";
import Paragraph from "./Paragraph/Paragraph";
import { AboutUsDataProps } from "@/@types/types";
import Link from "next/link";

const TwoColGridCard: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  images,
  buttons,
}) => {
  return (
    <>
      <div className={`lg:grid grid-cols-2 lg:items-center gap-6 `}>
        <div className={`col-span-1 mb-5 w-full h-full `}></div>
        <div className={` flex flex-col gap-4 col-span-1  `}>
          {title && (
            <div className="flex flex-col gap-2">
              <h2 className="capitalize text-dark heading1">{title}</h2>
              <h3 className="capitalize text-primary largeHeading font-semibold">
                {subtitle}
              </h3>
            </div>
          )}
          {desc && <Paragraph text={desc} className="description1" />}
          <div className="flex items-center gap-5 mt-4">
            <button className="text-white bg-primary text-base capitalize py-3 px-6 description1 rounded-full font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100">
              {buttons[0].label}
            </button>
            <Link
              href={buttons[1].href}
              className=" text-primary underline underline-offset-1 text-base capitalize py-3 px-6 description1 rounded-full font-medium  transition-all duration-300 ease-in-out active:scale-100"
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
