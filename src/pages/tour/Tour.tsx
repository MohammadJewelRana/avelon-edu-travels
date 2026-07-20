import CountryTourCards from "./FeaturedPackage/CountryTourCards";
 
import UpcomingPackages from "./FeaturedPackage/UpcomingPackages";
import TourHero from "./TourHero";

const Tour = () => {
  return (
    <div>
      <TourHero />
      {/* <FeaturedPackages /> */}
      {/* <UpcomingPackages/> */}
      <CountryTourCards/>
    </div>
  );
};

export default Tour;
