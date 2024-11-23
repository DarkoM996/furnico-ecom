import contactimage from "../images/contactimage.jpg";

const Contact = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 md:px-10 py:py-12 lg:px-28">
      <div className="relative h-[300px] lg:h-[400px]">
        <img
          src={contactimage}
          alt="contact image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Contact;
