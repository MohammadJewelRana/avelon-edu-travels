import React from "react";
import { motion } from "framer-motion";
import {
  FaRegClock,
  FaMoneyBillWave,
  FaUniversity,
  FaFileAlt,
  FaPlaneDeparture,
  FaHotel,
  FaHeadset,
  FaPassport,
  FaCheckCircle,
} from "react-icons/fa";
import BusinessVisaHero from "./_components/BusinessVisaHero";
import HomeContact from "../home/_components/Contact";
import SectionHeader from "../../shared/SectionHeader";

const countries = [
  {
    id: 1,
    flag: "🇨🇿",
    country: "Czech Republic",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    flag: "🇲🇹",
    country: "Malta",
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    flag: "🇳🇱",
    country: "Netherlands",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200&auto=format&fit=crop",
  },
];

const services = [
  {
    icon: FaMoneyBillWave,
    title: "No Advance Payment",
    description:
      "Start your business visa process without paying any advance service charge.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: FaMoneyBillWave,
    title: "Payment After Visa",
    description: "Pay only after your visa has been successfully approved.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: FaUniversity,
    title: "Bank Support",
    description:
      "Complete guidance for bank statements, sponsor files, and financial documentation.",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: FaFileAlt,
    title: "Documentation Support",
    description:
      "Professional assistance with all required documents and application preparation.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: FaHotel,
    title: "Accommodation",
    description:
      "Hotel booking and accommodation arrangements for your business trip.",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    icon: FaPlaneDeparture,
    title: "Air Ticket Package",
    description: "Affordable flight booking with flexible travel packages.",
    color: "from-indigo-500 to-blue-600",
  },
];

const BusinessVisa = () => {
  return (
    <div>
      <BusinessVisaHero />

      <div>
        {/* country  */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            {/* Header */}
            <SectionHeader
              badge="Business Visa"
              title="Available Destinations"
              description="Explore our business visa destinations with complete travel and visa support."
            />

            {/* Cards */}
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mt-16">
              {countries.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-red-200 hover:shadow-[0_30px_70px_rgba(220,38,38,.12)]"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden sm:h-56">
                    <img
                      src={item.image}
                      alt={item.country}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 backdrop-blur">
                      {item.flag} {item.country}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <div className="space-y-3">
                      {[
                        "Business Visa Processing",
                        "Accommodation",
                        "Air Ticket",
                        "Documentation Support",
                        "Bank Support",
                        "Package Deal",
                      ].map((service) => (
                        <div key={service} className="flex items-center gap-3">
                          <FaCheckCircle className="shrink-0 text-green-500" />

                          <span className="text-sm text-slate-700 sm:text-[15px]">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 sm:px-4 sm:text-sm">
                        No Advance Payment
                      </span>

                      <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-600 sm:px-4 sm:text-sm">
                        Pay After Visa
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* service  */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <SectionHeader
            badge="Why Choose Us"
            title="Why Choose Our Services"
            description="Complete business visa solutions with trusted support."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:border-red-200 hover:shadow-[0_30px_70px_rgba(220,38,38,.12)]"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div
                    className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-3xl`}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Highlight */}
        </div>
      </section>

      <HomeContact />
    </div>
  );
};

export default BusinessVisa;
