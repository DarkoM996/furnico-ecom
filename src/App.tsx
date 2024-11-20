import BelovedProducts from "./components/BelovedProducts";
import Footer from "./components/Footer";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Hero from "./components/Hero";
import LatestProducts from "./components/LatestProducts";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestProducts />
      <BelovedProducts />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

export default App;
