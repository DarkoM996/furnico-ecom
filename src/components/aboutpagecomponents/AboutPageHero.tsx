import aboutimage from "../../images/aboutimage.jpg";

const AboutPageHero = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-[calc(100vh-81px)] relative px-6 py-8 md:px-16 lg:px-28">
      <div className="relative w-full h-full">
        <img
          src={aboutimage}
          alt="about image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default AboutPageHero;
