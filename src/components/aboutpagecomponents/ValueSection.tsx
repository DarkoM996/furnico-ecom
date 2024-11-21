const ValueSection = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-6 md:py-10 md:px-16 lg:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24 w-full h-full">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">Our Values</h2>
        </div>
        {/* Grid on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10">
          {/* Value #1 */}
          <div className="grid grid-cols-1 place-content-start gap-6">
            <h4 className="text-2xl md:text-3xl leading-tight lg:leading-tight">
              Integrity
            </h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              modi omnis ea voluptates? Neque, animi mollitia saepe tenetur ea
              vero, eos laborum iure, qui quisquam non assumenda cum placeat
              nobis.
            </p>
          </div>
          {/* Value #2 */}
          <div className="grid grid-cols-1 place-content-start gap-6">
            <h4 className="text-2xl md:text-3xl leading-tight lg:leading-tight">
              Passion
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              modi omnis ea voluptates? Neque, animi mollitia saepe tenetur ea
              vero, eos laborum iure, qui quisquam non assumenda cum placeat
              nobis.
            </p>
          </div>
          {/* Value #3 */}
          <div className="grid grid-cols-1 place-content-start gap-6">
            <h4 className="text-2xl md:text-3xl leading-tight lg:leading-tight">
              Experience
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              modi omnis ea voluptates? Neque, animi mollitia saepe tenetur ea
              vero, eos laborum iure, qui quisquam non assumenda cum placeat
              nobis.
            </p>
          </div>
          {/* Value #4 */}
          <div className="grid grid-cols-1 place-content-start gap-6">
            <h4 className="text-2xl md:text-3xl leading-tight lg:leading-tight">
              Determination
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              modi omnis ea voluptates? Neque, animi mollitia saepe tenetur ea
              vero, eos laborum iure, qui quisquam non assumenda cum placeat
              nobis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
