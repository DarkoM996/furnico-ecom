import BelovedProducts from "./components/BelovedProducts";
import Hero from "./components/Hero";
import LatestProducts from "./components/LatestProducts";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestProducts />
      <BelovedProducts />
    </>
  );
};

export default App;
