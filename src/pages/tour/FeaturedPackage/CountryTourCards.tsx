import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
import SectionHeader from "../../../shared/SectionHeader";
import TourCard from "./TourCard";

  const countryPackages = [
  {
    id: 1,
    country: "Thailand",
    visaType: "Tourist Tour",
    title: "Thailand Tour Package",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 38500,
    duration: "4 Days / 3 Nights",
    slug: "thailand-tour",
  },

  {
    id: 2,
    country: "Malaysia",
    visaType: "Tourist Tour",
    title: "Malaysia Tour Package",
    image:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 42000,
    duration: "5 Days / 4 Nights",
    slug: "malaysia-tour",
  },

  {
    id: 3,
    country: "Singapore",
    visaType: "Tourist Tour",
    title: "Singapore Tour Package",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 52000,
    duration: "4 Days / 3 Nights",
    slug: "singapore-tour",
  },

  {
    id: 4,
    country: "Dubai",
    visaType: "Tourist Tour",
    title: "Dubai Tour Package",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 68000,
    duration: "5 Days / 4 Nights",
    slug: "dubai-tour",
  },

  {
    id: 5,
    country: "Indonesia",
    visaType: "Tourist Tour",
    title: "Bali Tour Package",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 47000,
    duration: "5 Days / 4 Nights",
    slug: "bali-tour",
  },

  {
    id: 6,
    country: "Vietnam",
    visaType: "Tourist Tour",
    title: "Vietnam Tour Package",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 44500,
    duration: "5 Days / 4 Nights",
    slug: "vietnam-tour",
  },

  {
    id: 7,
    country: "Turkey",
    visaType: "Tourist Tour",
    title: "Turkey Tour Package",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 98000,
    duration: "7 Days / 6 Nights",
    slug: "turkey-tour",
  },

  {
    id: 8,
    country: "Sri Lanka",
    visaType: "Tourist Tour",
    title: "Sri Lanka Tour Package",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 36500,
    duration: "4 Days / 3 Nights",
    slug: "srilanka-tour",
  },

  {
    id: 9,
    country: "Japan",
    visaType: "Tourist Tour",
    title: "Japan Tour Package",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 135000,
    duration: "6 Days / 5 Nights",
    slug: "japan-tour",
  },

  {
    id: 10,
    country: "Maldives",
    visaType: "Luxury Tour",
    title: "Maldives Holiday Package",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 89000,
    duration: "4 Days / 3 Nights",
    slug: "maldives-tour",
  },

  {
    id: 11,
    country: "South Korea",
    visaType: "Tourist Tour",
    title: "Korea Tour Package",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 98000,
    duration: "6 Days / 5 Nights",
    slug: "korea-tour",
  },

  {
    id: 12,
    country: "China",
    visaType: "Tourist Tour",
    title: "China Tour Package",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 72000,
    duration: "6 Days / 5 Nights",
    slug: "china-tour",
  },
];
const visibleCount = 9;

const CountryTourCards = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePackages = useMemo(
    () => (showAll ? countryPackages : countryPackages.slice(0, visibleCount)),
    [showAll],
  );

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
 
<SectionHeader
  badge="Country Tours"
  title="Explore Popular Destinations"
  description="Discover breathtaking destinations with carefully planned tour packages, unforgettable experiences, and expert travel support."
/>
    <div className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <AnimatePresence mode="popLayout">
{visiblePackages.map((item, index) => (
  <motion.div
    key={item.id}
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.45, delay: index * 0.05 }}
  >
    <TourCard item={item} />
  </motion.div>
))}
  </AnimatePresence>
</div>

        {countryPackages.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-500 hover:text-red-600"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryTourCards;
