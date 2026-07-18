import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaStar,
  FaCalendarAlt,
  FaHotel,
  FaPlaneDeparture,
  FaUsers,
} from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

const TourPackageModal = ({ tour, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!tour) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 40 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[32px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.35)]"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-lg transition hover:bg-red-600 hover:text-white"
        >
          <FaTimes />
        </button>

        {/* Hero Image */}
        <div className="relative h-[320px] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute left-8 bottom-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-lg backdrop-blur">
              <span>{tour.flag}</span>
              <span className="font-semibold">{tour.country}</span>
            </div>

            <h2 className="text-4xl font-black text-white">
              {tour.title}
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-5 text-white">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{tour.rating}</span>
                <span>({tour.reviews} Reviews)</span>
              </div>

              <span>{tour.city}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">

          {/* Overview */}
          <section>
            <h3 className="text-2xl font-bold text-[#111111]">
              Tour Overview
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              {tour.overview}
            </p>
          </section>

          {/* Package Info */}
          <section className="mt-10">
            <h3 className="text-2xl font-bold text-[#111111]">
              Package Information
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl bg-gray-50 p-5">
                <FaCalendarAlt className="text-2xl text-red-600" />
                <p className="mt-3 text-sm text-gray-500">
                  Duration
                </p>
                <h4 className="font-semibold">
                  {tour.duration}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <FaHotel className="text-2xl text-red-600" />
                <p className="mt-3 text-sm text-gray-500">
                  Hotel
                </p>
                <h4 className="font-semibold">
                  {tour.hotel}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <FaPlaneDeparture className="text-2xl text-red-600" />
                <p className="mt-3 text-sm text-gray-500">
                  Transport
                </p>
                <h4 className="font-semibold">
                  {tour.transport}
                </h4>
              </div>

              <div className="rounded-2xl bg-gray-50 p-5">
                <FaUsers className="text-2xl text-red-600" />
                <p className="mt-3 text-sm text-gray-500">
                  Group Size
                </p>
                <h4 className="font-semibold">
                  {tour.groupSize}
                </h4>
              </div>
            </div>
          </section>

          {/* ---------- Continue in Part 2 ---------- */}
                    {/* Included & Excluded */}
          <section className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 text-2xl font-bold text-[#111111]">
                What's Included
              </h3>

              <div className="space-y-3">
                {tour.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-green-50 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                      ✓
                    </div>

                    <span className="font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-bold text-[#111111]">
                Not Included
              </h3>

              <div className="space-y-3">
                {tour.excluded.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-red-50 p-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                      ✕
                    </div>

                    <span className="font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="mt-12">
            <h3 className="mb-5 text-2xl font-bold text-[#111111]">
              Tour Highlights
            </h3>

            <div className="flex flex-wrap gap-3">
              {tour.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-red-50 px-5 py-3 font-medium text-red-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-[#111111]">
              Tour Itinerary
            </h3>

            <div className="space-y-4">
              {tour.itinerary.map((day, index) => (
                <div
                  key={day}
                  className="flex items-start gap-5 rounded-2xl border border-gray-100 p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-yellow-500 font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#111111]">
                      {day}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-12 rounded-[28px] bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 p-8 text-white">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <p className="text-white/80">
                  Starting From
                </p>

                <div className="mt-2 flex items-center gap-4">
                  <h2 className="text-5xl font-black">
                    {tour.price}
                  </h2>

                  <span className="text-xl text-white/70 line-through">
                    {tour.oldPrice}
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-white/90">
                  Contact us today to reserve your seat and enjoy an unforgettable international travel experience.
                </p>
              </div>

              <a
                href="https://wa.me/8801712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-green-600 transition hover:scale-105"
              >
                <MdRestaurant className="hidden" />
                WhatsApp Booking
              </a>
            </div>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TourPackageModal;