import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import image from "../images/newsstandimage.jpg";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-6 md:py-16 lg:px-28 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-24 w-full h-fit">
        <div>
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        {/* Shadcn stuff */}
        <div className="grid grid-cols-1 place-content-start gap-2">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl pb-12">
              Frequently Asked Questions
            </h2>
          </div>
          {/* Shadcn accordion #1 */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-b border-primary_lighterShade-100"
              >
                <AccordionTrigger className="text-2xl md:text-3xl">
                  What is Furnico known for?
                </AccordionTrigger>
                <AccordionContent className=" text-primary_darkerShade-700 md:text-xl">
                  Furnico is known for its exquisite and meticulously crafted
                  furniture that adds a touch of elegance in any space.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Shadcn accordion #1 */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-b border-primary_lighterShade-100"
              >
                <AccordionTrigger className="text-2xl md:text-3xl">
                  How do I place an order?
                </AccordionTrigger>
                <AccordionContent className=" text-primary_darkerShade-700 md:text-xl">
                  Click on a product that you like and just follow the steps
                  from there.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Shadcn accordion #1 */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-b border-primary_lighterShade-100"
              >
                <AccordionTrigger className="text-2xl md:text-3xl">
                  Is customization available for furniture pieces?
                </AccordionTrigger>
                <AccordionContent className=" text-primary_darkerShade-700 md:text-xl">
                  No. For now, that option isn't available.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* Shadcn accordion #1 */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-b border-primary_lighterShade-100"
              >
                <AccordionTrigger className="text-2xl md:text-3xl">
                  Where can I start project?
                </AccordionTrigger>
                <AccordionContent className=" text-primary_darkerShade-700 md:text-xl">
                  This question will be changed
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
