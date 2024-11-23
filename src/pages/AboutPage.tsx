import AboutPageHero from "@/components/aboutpagecomponents/AboutPageHero";
import CTA from "@/components/aboutpagecomponents/CTA";
import OurTeam from "@/components/aboutpagecomponents/OurTeam";
import ValueSection from "@/components/aboutpagecomponents/ValueSection";
import WhyUsSection from "@/components/aboutpagecomponents/WhyUsSection";

const AboutPage = () => {
  return (
    <>
      <AboutPageHero />
      <ValueSection />
      <OurTeam />
      <WhyUsSection />
      <CTA />
    </>
  );
};

export default AboutPage;
