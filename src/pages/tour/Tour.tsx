 
import PopularDestination from "./_components/PopularDestination";
import CTASection from "../../shared/CTASection";
import TravelSupportSection from "./_components/TravelSupportSection";
import TourHero from "./_components/TourHero";

const Tour = () => {
  return (
    <div>
      <TourHero />
      {/* <FeaturedPackages /> */}
      {/* <UpcomingPackages/> */}
      <TravelSupportSection/>
      <PopularDestination />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pb-8">
        <CTASection
          badge="Explore More Destinations Worldwide"
          title="Looking for a Tour Package to Another Country?"
          description="Can't find your dream destination? We provide customized tour packages, visa assistance, flight booking, hotel reservations, and complete travel planning for destinations all over the world. Let us create the perfect journey for you."
          buttonText="Chat on WhatsApp"
          footerText="Worldwide Tours • Visa Assistance • Flights • Hotels • 24/7 Travel Support"
        />
      </div>
    </div>
  );
};

export default Tour;
