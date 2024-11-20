import BelovedProducts from "@/components/BelovedProducts";
import FrequentlyAskedQuestions from "@/components/FrequentlyAskedQuestions";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Testimonials from "@/components/Testimonials";
import Footer from "./../components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
      <BelovedProducts />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default HomePage;
