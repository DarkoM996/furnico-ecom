import image from "../../images/aranprime-KbytCpI1i5I-unsplash.jpg";

const WhyUsSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 md:px-16 md:py-12 lg:px-28 lg:py-24">
      <div className="grid grid-cols-1 gap-6 md:gap-8 lg:gap-12 w-full h-fit">
        <div className="grid grid-cols-1 gap-6 md:gap-8 w-full h-fit">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Why Us</h2>
          <div className="relative h-[300px] md:h-[400px] lg:h-[600px]">
            <img
              src={image}
              alt="section image"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
        {/* Sub grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          <div className="grid grid-cols-1 gap-4 place-content-start">
            <h4 className="text-2xl md:text-3xl">High Quality</h4>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              quos, qui neque at alias ipsa illum commodi eligendi hic eius
              voluptatem illo! Distinctio et, repudiandae excepturi accusamus
              nesciunt magnam at.
            </p>
          </div>
          <div>
            <h4>Experience</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              quos, qui neque at alias ipsa illum commodi eligendi hic eius
              voluptatem illo! Distinctio et, repudiandae excepturi accusamus
              nesciunt magnam at.
            </p>
          </div>
          <div>
            <h4>Knowledge</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              quos, qui neque at alias ipsa illum commodi eligendi hic eius
              voluptatem illo! Distinctio et, repudiandae excepturi accusamus
              nesciunt magnam at.
            </p>
          </div>
          <div>
            <h4>Innovation</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              quos, qui neque at alias ipsa illum commodi eligendi hic eius
              voluptatem illo! Distinctio et, repudiandae excepturi accusamus
              nesciunt magnam at.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
