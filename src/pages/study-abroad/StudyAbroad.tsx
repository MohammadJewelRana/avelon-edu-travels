// src/components/StudyAbroad/StudyAbroad.jsx
import React from "react";
import { countries } from "./_components/countries";
import CountryCard from "./_components/CountryCard";
import PopularSubjects from "./_components/PopularSubjects";
import StudyHero from "./_components/StudyHero";
import OtherCountriesBanner from "./_components/OtherCountriesBanner";

// Replace with your actual WhatsApp number (no "+" or spaces)
const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // e.g. 8801712345678

const StudyAbroad = () => {
  return (
    <div className="bg-gray-50">
      <StudyHero />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center leading-none">
            <h1 className="text-3xl font-black uppercase tracking-[0.18em] text-gray-900 sm:text-4xl">
              Study Abroad
            </h1>
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-600">
              Edu & Travel
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-600">
            Explore top study destinations around the world. Click any country
            to start a conversation with us on WhatsApp about visas, universities,
            and application support.
          </p>
        </div>

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