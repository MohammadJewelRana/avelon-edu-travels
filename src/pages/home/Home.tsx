import AboutTravel from "./_components/AboutTravels";
import HomeContact from "./_components/Contact";
 
 
 
import Hero from "./_components/HeroSection";
import HowWeWork from "./_components/HowWorks";
import Services from "./_components/Service";

 

const Home = () => {
  return (
    <div className=" ">

<Hero/>
<AboutTravel/>
<Services/>
<HowWeWork/>
<HomeContact />

 

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
