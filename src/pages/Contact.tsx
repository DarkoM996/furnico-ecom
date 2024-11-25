import contactimage from "../images/contactimage.jpg";

export type Note = {
  id: number;
  title: string;
  content: string;
};

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
      <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-4 lg:gap-8 ">
        {/* Heading */}
        <div className="flex flex-col justify-center items-start lg:w-3/4">
          <h1 className="text-5xl md:text-6xl py-6">Contact Page</h1>
          <p className="text-balance w-full md:w-2/3">
            Simply fill out the form that we have provided here with the basic
            info and tell us about what you want to contact us. Your message
            will be read and someone will get in contact from our support team.
          </p>
        </div>
        {/* Contact Form */}
        <form
          action="#"
          className="py-6 lg:py-8 mx-auto w-full h-full flex flex-col justify-center items-center gap-6 rounded-2xl bg-primary_lighterShade-50"
        >
          <div className="flex flex-col justify-between items-start w-full h-full">
            <h2 className="text-2xl md:text-3xl">Contact Page</h2>
          </div>

          <input
            className=" p-4 bg-primary_lighterShade-50 hover:bg-primary_lighterShade-100 rounded-2xl border border-primary_lighterShade-300 w-full"
            type="email"
            placeholder="E.g Adam Smith"
            name="Smith"
          />
          <input
            className=" p-4 bg-primary_lighterShade-50 hover:bg-primary_lighterShade-100 rounded-2xl border border-primary_lighterShade-300 w-full "
            type="email"
            placeholder="E.g adamsmith93@gmail.com"
            name="email"
          />
          <textarea
            className=" p-4 bg-primary_lighterShade-50 hover:bg-primary_lighterShade-100 rounded-2xl border border-primary_lighterShade-300 w-full"
            name="message"
            rows={10}
            placeholder="Your message here"
          />
          <div className="flex flex-col justify-center items-start w-full h-full">
            <button className="px-6 py-4 bg-black hover:bg-primary_darkerShade-900 text-white text-transform: uppercase rounded-full ">
              Submit Your Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
