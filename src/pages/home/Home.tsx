import AboutTravel from "./_components/AboutTravels";
import HomeContact from "./_components/Contact";
import DestinationSection from "./_components/destinations/DestinationSection";
 
 
 
import Hero from "./_components/HeroSection";
import HowWeWork from "./_components/HowWorks";
import Services from "./_components/Service";

 

const Home = () => {
  return (
    <div className=" ">

<Hero/>
{/* <AboutTravel/> */}
<Services/>
<DestinationSection/>
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
