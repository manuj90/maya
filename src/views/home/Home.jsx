import React from "react";
import Hero from "../../components/hero/Hero";
import Sections from "../../components/sections/Sections";
import Services from "../../components/services/Services";
import Solutions from "../../components/solutions/Solutions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Solutions />
      <Services />
      <Sections />
      <p className="text-center text-xl text-slate-600 uppercase font-bold mb-16 px-4">
        57 años ofreciendote <br /> la mejor calidad y atención.
      </p>
    </div>
  );
};

export default Home;
