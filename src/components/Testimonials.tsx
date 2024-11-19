import { StarIcon } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-6 lg:px-28 lg:py-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl lg:leading-tight pb-12">
        Testiomonials
      </h2>
      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full h-fit">
        {/* Card 1*/}
        <div className="flex flex-col justify-center items-start gap-6 px-6 py-4 bg-primary_lighterShade-200 rounded-3xl">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-2xl md:text-3xl">Amazing Sofa</h4>
            {/* Star rating */}
            <div className="flex flex-row  gap-2 text-yellow-500">
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
            </div>
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            eveniet consequatur harum quod exercitationem sit eius hic
            architecto facere tempore eos, expedita dolores ullam eum aspernatur
            iste atque fuga.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4 w-full h-fit">
            {/* customer's name */}
            <p className="font-bold">John Wayne</p>
            {/* date when the comment is posted */}
            <p>24/07/2024</p>
          </div>
        </div>
        {/* Card 1*/}
        <div className="flex flex-col justify-center items-start gap-6 px-6 py-4 bg-primary_lighterShade-200 rounded-3xl w-full h-full">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-2xl md:text-3xl">Best Sofa Ever</h4>
            {/* Star rating */}
            <div className="flex flex-row  gap-2 text-yellow-500">
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
            </div>
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            eveniet consequatur harum quod exercitationem sit eius hic
            architecto facere tempore eos, expedita dolores ullam eum aspernatur
            iste atque fuga.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4 w-full h-fit">
            {/* customer's name */}
            <p className="font-bold">Wayne Jefferson</p>
            {/* date when the comment is posted */}
            <p>24/03/2024</p>
          </div>
        </div>
        {/* Card 1*/}
        <div className="flex flex-col justify-center items-start gap-6 px-6 py-4 bg-primary_lighterShade-200 rounded-3xl">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-2xl md:text-3xl">The Best Mattress</h4>
            {/* Star rating */}
            <div className="flex flex-row  gap-2 text-yellow-500">
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
            </div>
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            eveniet consequatur harum quod exercitationem sit eius hic
            architecto facere tempore eos, expedita dolores ullam eum aspernatur
            iste atque fuga.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4 w-full h-fit">
            {/* customer's name */}
            <p className="font-bold">George Davies</p>
            {/* date when the comment is posted */}
            <p>24/03/2024</p>
          </div>
        </div>
        {/* Card 4*/}
        <div className="flex flex-col justify-center items-start gap-6 px-6 py-4 bg-primary_lighterShade-200 rounded-3xl">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-2xl md:text-3xl">Best Sleep</h4>
            {/* Star rating */}
            <div className="flex flex-row  gap-2 text-yellow-500">
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
              <StarIcon fill="#e2c20a" />
            </div>
          </div>
          <p className="text-base leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cum
            eveniet consequatur harum quod exercitationem sit eius hic
            architecto facere tempore eos, expedita dolores ullam eum aspernatur
            iste atque fuga.
          </p>
          {/* Date and name of who posted it */}
          <div className="flex flex-row justify-between items-centers pt-4 w-full h-fit">
            {/* customer's name */}
            <p className="font-bold">Lily Thompson</p>
            {/* date when the comment is posted */}
            <p>24/03/2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
