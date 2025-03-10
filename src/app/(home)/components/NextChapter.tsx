import { MainHeading, SectionWithContainer, Section } from "@/components";

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
      <SectionWithContainer>
        <div className="flex flex-col gap-6 items-center justify-center">
          <MainHeading h2 title={title} className="text-center heading1" />
          <MainHeading
            h3
            title={subtitle}
            className="text-center largeHeading text-primary uppercase"
          />
          <p className="description1 text-center mt-4">{desc}</p>
          <div className="flex items-center gap-5 mt-4">
            <button className="text-white bg-primary text-base capitalize py-3 px-6 description1 rounded-full font-medium  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-100">
              {label}
            </button>
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default NextChapter;
