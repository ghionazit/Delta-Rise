import About from "../components/About";
import Contact from "../components/Contact";
import Expertise from "../components/Expertise";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SelectedWork from "../components/SelectedWork";
import Services from "../components/Services";
import WhatWeDo from "../components/WhatWeDo";


function Home() {
  return (
    <div>
       <Navbar/>
      <Hero/>
      <WhatWeDo/>
      <SelectedWork/>
      <About/>
      <Services/>
      <Expertise/>
      <Contact/>
      
      
    </div>
  );
}

export default Home;