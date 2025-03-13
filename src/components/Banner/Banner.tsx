// import Image from "next/image";
import Paragraph from "../Paragraph/Paragraph";
import Link from "next/link";
import Image from "next/image";
import { BtnIcon1 } from "@/icons/icons";

interface BannerProps {
  title: string;
  subTitle: string;
  src: string;
  src2: string;
  desc: string;
  buttons: {
    label: string;
    href: string;
  }[];
}
const Banner: React.FC<BannerProps> = ({
  title,
  desc,
  src,
  buttons,
  subTitle,
  src2,
}) => {
  return (
    <section className="max-w-[1600px] mx-auto w-full text-primary lg:mb-10 pb-10 ">
      <div className="grid lg:grid-cols-7 items-center gap-5 justify-center grid-cols-1 relative z-10">
        <div className="w-full lg:col-span-3 max-md:pt-4">
          <div className="flex flex-col lg:gap-4 gap-1 w-full ml-auto max-w-lg max-sm:px-4">
            <h1 className="heading1 artifex capitalize font-medium max-sm:text-center">
              {subTitle}
            </h1>
            <h2 className="largeHeading uppercase mendl font-bold max-sm:text-center">
              {title}
            </h2>
            <div className="lg:hidden block relative w-full aspect-[4/2.9]">
              <Image src={src2} alt="alt" fill className={"object-contain"} />
            </div>
            <Paragraph
              className={
                "mt-4 description1 avenir max-sm:text-center font-light"
              }
              text={desc}
            />
            <div className="flex max-sm:flex-col-reverse max-sm:items-center lg:gap-5 gap-4 mt-4">
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href={buttons[0].href}
                  className="text-white  bg-primary avenir-book text-base capitalize py-3 px-6 description2 rounded-full  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100"
                >
                  {buttons[0].label}
                </Link>
                <BtnIcon1 />
              </div>
              <Link
                href={buttons[1].href}
                className=" text-primary underline underline-offset-1 avenir-book text-base capitalize py-3 px-6 description2 rounded-full font-medium  transition-all duration-300 ease-in-out active:scale-100"
              >
                {buttons[1].label}
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 w-full py-4 ps-4 relative lg:block hidden">
          <div className="relative w-full aspect-[4/2.3]">
            <Image src={src} alt="alt" fill className="object-cover " />
          </div>
          <div className="absolute top-0 left-0 rotate-90">
            <Image
              src={"/group.png"}
              alt="alt"
              width={100}
              height={100}
              className={"object-contain"}
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <Image
              src={"/group.png"}
              alt="alt"
              width={100}
              height={100}
              className={"object-contain"}
            />
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 left-0 lg:h-screen  bg-secondary h-[930px] lg:rounded-bl-[13rem] rounded-bl-[8rem]"></div>
    </section>
  );
};

export default Banner;
