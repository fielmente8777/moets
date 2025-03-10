"use client";
import { FooterLink, imageUrl, SocialLink } from "@/data/links";
import SectionWithContainer from "./SectionComponents/SectionWithContainer";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-screen w-full bg-secondary">
      <SectionWithContainer sectionClassName="">
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-28">
          <div className="w-full">
            <div className="relative aspect-[4/3] w-[10rem]">
              <Image
                src={imageUrl + "logo.webp"}
                alt="yakumi"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4">
              Traditional Indian cuisine, crafted to perfection
            </p>
            <ul className="flex items-center gap-4 mt-4">
              {SocialLink.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="bg-primary text-white w-8 flex items-center justify-center aspect-square rounded-[0.25rem] hover:text-primary hover:bg-white border border-primary transition-all duration-300 ease-in-out hover:shadow-sm hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {FooterLink.map((link, i) => (
            <div key={i} className="w-full flex flex-col gap-3">
              <h4 className="heading1 uppercase text-primary">{link.title}</h4>
              <ul className="flex flex-col gap-2">
                {link.id === 3 ? (
                  <>
                    {link.links.map((item, i) => (
                      <li key={i}>
                        {item.label} {item.href}
                      </li>
                    ))}
                  </>
                ) : (
                  <>
                    {link.links.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href} className="description2">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>
      </SectionWithContainer>
      <SectionWithContainer sectionClassName="bg-secondary border-t border-primary !py-4 text-dark">
        <div className="flex max-md:flex-col items-center lg:justify-between gap-4">
          <p className="text-center">
            © {currentYear} Yakumi. <br className="lg:hidden" />
            All Rights Reserved. <br className="lg:hidden" />
            Designed & Developed by{" "}
            <Link href="https://eazotel.com" className="font-bold">
              Eazotel
            </Link>
          </p>
          <p className="">Terms of Service Privacy Policy</p>
        </div>
      </SectionWithContainer>
    </footer>
  );
};

export default Footer;
