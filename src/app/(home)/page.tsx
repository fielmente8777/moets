import { Banner } from "@/components";
import { pageData } from "@/data/pageData";
import {
  About,
  ContactCard,
  ContactUs,
  ExploreOurMenu,
  Gallery,
  NextChapter,
  Testimonials,
  // UpcomingEvents,
} from "./components";
export default function Home() {
  return (
    <main className="!bg-white">
      <Banner {...pageData.bannerData} />
      <About {...pageData.aboutUsData} />
      <NextChapter {...pageData.theNextChapter} />
      <ExploreOurMenu {...pageData.exploreOurMenu} />
      <Gallery {...pageData.gallery} />
      <Testimonials {...pageData.Testimonials} />
      {/* <UpcomingEvents {...pageData.upcomingEvents} /> */}
      <ContactUs />
      <ContactCard {...pageData.contactNow} />
    </main>
  );
}
