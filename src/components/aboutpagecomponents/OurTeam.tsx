import teammember1 from "../../images/teammember4.jpg";

const OurTeam = () => {
  return (
    <section className="max-w-screen-3xl mx-auto w-full h-fit relative px-6 py-8 md:px-16 md:py-12 lg:px-28 lg:py-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl py-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 w-full max-h-full">
        {/* Grid Item #1 */}
        <div className="grid grid-cols-1 place-content-start gap-6">
          <div className="relative w-full h-[400px]">
            <img
              src={teammember1}
              alt="team member 1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="grid grid-cols-1 place-content-start gap-3">
            <h3 className="text-2xl md:text-3xl">John Stokes</h3>
            <p className="text-base text-primary_darkerShade-600">
              CEO and Founder
            </p>
          </div>
        </div>
        {/* Grid Item #1 */}
        <div className="grid grid-cols-1 place-content-start gap-6">
          <div className="relative w-full h-[400px]">
            <img
              src={teammember1}
              alt="team member 1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="grid grid-cols-1 place-content-start gap-3">
            <h3 className="text-2xl md:text-3xl">John Stokes</h3>
            <p className="text-base text-primary_darkerShade-600">
              CEO and Founder
            </p>
          </div>
        </div>
        {/* Grid Item #1 */}
        <div className="grid grid-cols-1 place-content-start gap-6">
          <div className="relative w-full h-[400px]">
            <img
              src={teammember1}
              alt="team member 1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="grid grid-cols-1 place-content-start gap-3">
            <h3 className="text-2xl md:text-3xl">John Stokes</h3>
            <p className="text-base text-primary_darkerShade-600">
              CEO and Founder
            </p>
          </div>
        </div>
        {/* Grid Item #1 */}
        <div className="grid grid-cols-1 place-content-start gap-6">
          <div className="relative w-full h-[400px]">
            <img
              src={teammember1}
              alt="team member 1"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="grid grid-cols-1 place-content-start gap-3">
            <h3 className="text-2xl md:text-3xl">John Stokes</h3>
            <p className="text-base text-primary_darkerShade-600">
              CEO and Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;