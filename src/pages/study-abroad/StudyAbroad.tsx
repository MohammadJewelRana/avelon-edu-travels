// src/components/StudyAbroad/StudyAbroad.jsx
import React from "react";
import { countries } from "./_components/countries";
import CountryCard from "./_components/CountryCard";
import PopularSubjects from "./_components/PopularSubjects";
import StudyHero from "./_components/StudyHero";
import OtherCountriesBanner from "./_components/OtherCountriesBanner";
import SectionHeader from "../../shared/SectionHeader";

// Replace with your actual WhatsApp number (no "+" or spaces)
const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // e.g. 8801712345678

const StudyAbroad = () => {
  return (
    <div className="bg-gray-50">
      <StudyHero />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        
<SectionHeader
  badge="Study Destination Guide"
  title="Study Abroad"
  description="Explore top study destinations around the world and start your journey with expert admission and visa guidance."
/>
  

        {/* Grid of country cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {countries.map((country) => (
            <CountryCard
              key={country.code}
              name={country.name}
              code={country.code}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>





 
        {/* Popular Subjects Section */}
        <div className="mt-16">
          <PopularSubjects />
        </div>
        <div className="mt-16">
  <OtherCountriesBanner />
</div>
      </section>
    </div>
  );
};

export default StudyAbroad;