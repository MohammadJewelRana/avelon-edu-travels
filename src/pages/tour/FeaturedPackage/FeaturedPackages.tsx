import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

import TourPackageCard from "./TourPackageCard";
import TourPackageModal from "./TourPackageModal";
import internationalPackages from "./internationalPackages";

const FeaturedPackages = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f8f8] py-24">
        {/* Background */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-yellow-100/50 blur-3xl" />

        <div className="container relative z-10 mx-auto px-5">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-600">
              Featured Tours
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#111111] md:text-5xl">
              Explore Our
              <span className="block bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                International Packages
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Carefully crafted international tour packages with premium
              accommodation, guided sightseeing, visa support and unforgettable
              travel experiences.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {internationalPackages.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <TourPackageCard
                  tour={tour}
                  onOpen={setSelectedTour}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 overflow-hidden rounded-[32px] border border-red-100 bg-white p-10 shadow-[0_20px_70px_rgba(17,17,17,.06)]"
          >
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                  Tailor-Made Tours
                </span>

                <h3 className="mt-5 text-3xl font-black text-[#111111]">
                  Can't Find Your Dream Destination?
                </h3>

                <p className="mt-4 max-w-2xl text-gray-600 leading-8">
                  We create personalized international tour packages based on
                  your preferred destination, travel dates and budget.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Japan",
                    "South Korea",
                    "France",
                    "Italy",
                    "Switzerland",
                    "Australia",
                    "Canada",
                    "Saudi Arabia",
                  ].map((country) => (
                    <span
                      key={country}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/8801712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(37,211,102,.35)]"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Us
                </a>

                <button
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-8 py-4 font-semibold text-[#111111] transition hover:border-red-600 hover:text-red-600"
                >
                  Explore More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedTour && (
          <TourPackageModal
            tour={selectedTour}
            onClose={() => setSelectedTour(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FeaturedPackages;