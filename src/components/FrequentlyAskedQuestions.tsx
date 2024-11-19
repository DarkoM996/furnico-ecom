import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAskedQuestions = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-6 lg:px-28 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-fit">
        <div>asdasd</div>
        {/* Shadcn stuff */}
        <div>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl pb-12">
              Frequently Asked Questions
            </h2>
          </div>
          {/* Shadcn accordion #1 */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
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
