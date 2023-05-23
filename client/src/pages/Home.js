import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Home;
