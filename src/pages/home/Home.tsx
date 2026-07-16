import AboutTravel from "./_components/AboutTravels";
import Contact from "./_components/Contact";
import Hero from "./_components/HeroSection";
import Services from "./_components/Service";

 

const Home = () => {
  return (
    <div className=" ">

<Hero/>
<AboutTravel/>
<Services/>

<Contact/>



      {/* <Banner /> */}
      {/* <Cautions/> */}
{/* 
      <Updates />
      <Services />
      <AboutRtemis />
      <Concern />
      <Feedback /> */}
    </div>
  );
};

export default Home; 
