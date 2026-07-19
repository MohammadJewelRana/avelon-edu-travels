// src/components/StudyAbroad/CountryCard.jsx
import React from "react";

const CountryCard = ({ name, code, whatsappNumber }) => {
  const flagUrl = `https://flagcdn.com/w640/${code}.png`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'm interested in studying in ${name}.`
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Flag Image */}
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={flagUrl}
          alt={`${name} flag`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Hover overlay with country name */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="px-2 text-center text-xl font-bold uppercase tracking-wide text-white">
          {name}
        </h3>
      </div>

      {/* Bottom WhatsApp button */}
      <div className="flex items-center justify-center bg-yellow-400 py-2 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-black">
          Contact on WhatsApp
        </span>
      </div>
    </a>
  );
};

export default CountryCard;