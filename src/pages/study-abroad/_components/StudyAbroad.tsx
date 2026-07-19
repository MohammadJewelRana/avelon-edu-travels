// src/components/StudyAbroad/StudyAbroad.jsx
import React from "react";
import CountryCard from "./CountryCard";
import { countries } from "./countries";

// Replace with your actual WhatsApp number (no "+" or spaces)
const WHATSAPP_NUMBER = "8801XXXXXXXXX"; // e.g. 8801712345678

const StudyAbroad = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-black uppercase tracking-[0.18em] text-white sm:text-4xl">
          Study Abroad
        </h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Edu & Travel
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300">
          Explore your study opportunities in top destinations around the world.
          Click any country to chat with us on WhatsApp.
        </p>
      </div>

      {/* Grid of country cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {countries.map((country) => (
          <CountryCard
            key={country.code}
            name={country.name}
            code={country.code}
            whatsappNumber={WHATSAPP_NUMBER}
          />
        ))}
      </div>
    </section>
  );
};

export default StudyAbroad;