import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaCalendarAlt,
  FaPlaneDeparture,
  FaHotel,
} from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

const badgeColors = {
  "Best Seller": "bg-red-600 text-white",
  Popular: "bg-orange-500 text-white",
  "Top Rated": "bg-yellow-500 text-white",
  Featured: "bg-blue-600 text-white",
  Trending: "bg-pink-600 text-white",
  Luxury: "bg-violet-600 text-white",
  Budget: "bg-green-600 text-white",
  New: "bg-slate-900 text-white",
};

const TourPackageCard = ({ tour, onOpen }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_60px_rgba(17,17,17,.08)] transition-all duration-500 hover:border-red-200 hover:shadow-[0_30px_80px_rgba(220,38,38,.15)]"
    >
      {/* Image */}
      <div className="relative h-[260px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span
          className={`absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold ${
            badgeColors[tour.badge]
          }`}
        >
          {tour.badge}
        </span>

        <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-2 text-xl backdrop-blur">
          {tour.flag}
        </div>

        <div className="absolute bottom-5 left-5">
          <p className="text-sm text-white/80">{tour.country}</p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {tour.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />

            <span className="font-semibold text-[#111111]">
              {tour.rating}
            </span>

            <span className="text-gray-500">
              ({tour.reviews} Reviews)
            </span>
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600">
            {tour.city}
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-2 leading-7 text-gray-600">
          {tour.description}
        </p>

        {/* Info */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-gray-50 p-3">
            <FaCalendarAlt className="text-red-600" />
            <span className="text-sm">{tour.duration}</span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-gray-50 p-3">
            <FaHotel className="text-red-600" />
            <span className="text-sm">{tour.hotel}</span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-gray-50 p-3">
            <FaPlaneDeparture className="text-red-600" />
            <span className="text-sm">{tour.transport}</span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-gray-50 p-3">
            <MdRestaurant className="text-red-600" />
            <span className="text-sm">{tour.meals}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tour.highlights.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-3xl font-black text-[#111111]">
                {tour.price}
              </span>

              <span className="text-gray-400 line-through">
                {tour.oldPrice}
              </span>
            </div>
          </div>

          <button
            // onClick={() => onOpen(tour)}
            onClick={() => {
  console.log(tour);
  onOpen(tour);
}}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(220,38,38,.30)]"
          >
            Explore

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourPackageCard;