import { AboutUsDataProps } from "@/@types/types";
import { SectionWithContainer } from "@/components";
import TwoColGridCard from "@/components/TwoColGridCard";

const About: React.FC<AboutUsDataProps> = ({
  title,
  subtitle,
  desc,
  image,
  buttons
}) => {
  return (
    <SectionWithContainer sectionId="about">
      <TwoColGridCard
        title={title}
        subtitle={subtitle}
        desc={desc}
        image={image}
        buttons={buttons}
      />
    </SectionWithContainer>
  );
};

export default About;
