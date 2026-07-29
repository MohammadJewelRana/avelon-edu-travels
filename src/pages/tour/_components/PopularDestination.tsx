import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SectionHeader from "../../../shared/SectionHeader";
import TourCard from "./TourCard";

 const countryPackages = [
  {
    id: 1,
    country: "Thailand",
    flag: "🇹🇭",
    visaType: "Tourist Tour",
    title: "Thailand ",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 7500,
    duration: "4 Days / 3 Nights",
    slug: "thailand-tour",
  },

  {
    id: 2,
    country: "Malaysia",
    flag: "🇲🇾",
    visaType: "Tourist Tour",
    title: "Malaysia ",
    image: "https://media.assettype.com/outlooktraveller/2024-02/99e685a3-d87c-4135-8837-3eba8fc5d91a/mohd_jon_ramlan_N2SKNqLcgr0_unsplash.jpg?w=1200&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
    startingFrom: 5000,
    duration: "5 Days / 4 Nights",
    slug: "malaysia-tour",
  },

  {
    id: 3,
    country: "Singapore",
    flag: "🇸🇬",
    visaType: "Tourist Tour",
    title: "Singapore ",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 7500,
    duration: "4 Days / 3 Nights",
    slug: "singapore-tour",
  },

  {
    id: 4,
    country: "China",
    flag: "🇨🇳",
    visaType: "Tourist Tour",
    title: "China ",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 14500,
    duration: "6 Days / 5 Nights",
    slug: "china-tour",
  },

  {
    id: 5,
    country: "Sri Lanka",
    flag: "🇱🇰",
    visaType: "Tourist Tour",
    title: "Sri Lanka ",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 4500,
    duration: "4 Days / 3 Nights",
    slug: "srilanka-tour",
  },

  {
    id: 6,
    country: "Indonesia",
    flag: "🇮🇩",
    visaType: "Tourist Tour",
    title: "Bali ",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 11500,
    duration: "5 Days / 4 Nights",
    slug: "bali-tour",
  },

  {
    id: 7,
    country: "Turkey",
    flag: "🇹🇷",
    visaType: "Tourist Tour",
    title: "Turkey ",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 26500,
    duration: "7 Days / 6 Nights",
    slug: "turkey-tour",
  },

  {
    id: 8,
    country: "Canada",
    flag: "🇨🇦",
    visaType: "Tourist Tour",
    title: "Canada ",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 33000,
    duration: "7 Days / 6 Nights",
    slug: "canada-tour",
  },

  {
    id: 9,
    country: "Italy",
    flag: "🇮🇹",
    visaType: "Europe Tour",
    title: "Italy ",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 9000,
    duration: "7 Days / 6 Nights",
    slug: "italy-tour",
  },

  {
    id: 10,
    country: "Australia",
    flag: "🇦🇺",
    visaType: "Tourist Tour",
    title: "Australia ",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 28500,
    duration: "7 Days / 6 Nights",
    slug: "australia-tour",
  },

  {
    id: 11,
    country: "United Kingdom",
    flag: "🇬🇧",
    visaType: "Tourist Tour",
    title: "UK ",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 28000,
    duration: "7 Days / 6 Nights",
    slug: "uk-tour",
  },

  {
    id: 12,
    country: "United States",
    flag: "🇺🇸",
    visaType: "Tourist Tour",
    title: "USA ",
    image: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 33000,
    duration: "7 Days / 6 Nights",
    slug: "usa-tour",
  },

  {
    id: 13,
    country: "France",
    flag: "🇫🇷",
    visaType: "Europe Tour",
    title: "France ",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 10000,
    duration: "7 Days / 6 Nights",
    slug: "france-tour",
  },

  {
    id: 14,
    country: "Sweden",
    flag: "🇸🇪",
    visaType: "Europe Tour",
    title: "Sweden ",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 9000,
    duration: "7 Days / 6 Nights",
    slug: "sweden-tour",
  },

  {
    id: 15,
    country: "Kenya",
    flag: "🇰🇪",
    visaType: "Safari Tour",
    title: "Kenya Safari Package",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 8000,
    duration: "6 Days / 5 Nights",
    slug: "kenya-tour",
  },

  {
    id: 16,
    country: "New Zealand",
    flag: "🇳🇿",
    visaType: "Tourist Tour",
    title: "New Zealand ",
    image: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 42000,
    duration: "8 Days / 7 Nights",
    slug: "newzealand-tour",
  },

  {
    id: 17,
    country: "Egypt",
    flag: "🇪🇬",
    visaType: "Tourist Tour",
    title: "Egypt ",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80",
    startingFrom: 9000,
    duration: "5 Days / 4 Nights",
    slug: "egypt-tour",
  },
];

const PopularDestination = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(5); // Mobile
      } else {
        setVisibleCount(9); // Tablet & Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visiblePackages = useMemo(
    () => (showAll ? countryPackages : countryPackages.slice(0, visibleCount)),
    [showAll, visibleCount],
  );
  return (
    <section className="bg-slate-50 pt-24 ">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <SectionHeader
          badge="Country Tours"
          title="Explore Popular Destinations"
          description="Discover breathtaking destinations with carefully planned s, unforgettable experiences, and expert travel support."
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

export default PopularDestination;
