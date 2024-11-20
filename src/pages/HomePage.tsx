import BelovedProducts from "@/components/BelovedProducts";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Testimonials from "@/components/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LatestProducts />
      <BelovedProducts />
      <Testimonials />
    </>
  );
};

export default HomePage;
