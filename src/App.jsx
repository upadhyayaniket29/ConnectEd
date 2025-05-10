import React from "react";
import Hero from "./components/Hero/Hero";

import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import  Team from "./components/Team/Team";

import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs"







const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero />
       <AboutUs/>
      <Services />
     
      <Banner />
      <Subscribe />
       <Team/>
      
      <Banner2 />
      <Footer />

      

      
     
     
    </main>
  );
};

export default App;
