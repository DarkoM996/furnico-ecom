import calltoactionimage from "../../images/hannah-busing-nME9TubZtSo-unsplash.jpg";

const CTA = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full min-h-screen relative px-6 py-8 md:px-16 md:py-12 lg:px-28 lg:py-24">
      <div className="relative h-[700px] w-full">
        <img
          src={calltoactionimage}
          alt="call to action image"
          className="w-full max-h-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default CTA;
