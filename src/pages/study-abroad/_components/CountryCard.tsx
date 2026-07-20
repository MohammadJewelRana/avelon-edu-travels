import React from "react";

const CountryCard = ({ name, code, whatsappNumber }:any) => {
  const flagUrl = `https://flagcdn.com/w640/${code}.png`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'm interested in studying in ${name}.`
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] hover:border-red-200 hover:shadow-2xl"
    >
      <div className="overflow-hidden rounded-2xl">
        <div className="aspect-[4/3]">
          <img
            src={flagUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <h3 className="mt-4 text-center text-base font-black uppercase tracking-[0.14em] text-gray-900">
        {name}
      </h3>

      <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 transition-transform duration-500 group-hover:scale-x-100" />
    </a>
  );
};

export default CountryCard;