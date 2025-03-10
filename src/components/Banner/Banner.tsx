// import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import Link from "next/link";
import Image from "next/image";

interface BannerProps {
  title: string;
  subTitle: string;
  src: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  desc,
  // src,
  buttons,
  subTitle,
}) => {
  return (
    <section className="max-w-[1600px] mx-auto w-full text-primary lg:mb-10 py-10 ">
      <div className="grid lg:grid-cols-7 items-center gap-3 justify-center grid-cols-1 relative z-10">
        <div className="w-full lg:col-span-3 max-md:pt-4">
          <div className="flex flex-col gap-4 w-full ml-auto max-w-lg">
            <h1 className="heading1 uppercase font-semibold max-sm:text-center">
              {subTitle}
            </h1>
            <h2 className="largeHeading uppercase font-semibold max-sm:text-center">
              {title}
            </h2>
            <Paragraph
              className={"mt-4 description1 max-sm:text-center"}
              text={desc}
            />
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
        <div className="lg:col-span-4 w-full p-4">
          <div className="relative w-full aspect-[4/2]">
            <Image
              src="/banner.png"
              alt="alt"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 left-0 h-[700px]  bg-secondary rounded-bl-[13rem]"></div>
    </section>
  );
};

export default Banner;
