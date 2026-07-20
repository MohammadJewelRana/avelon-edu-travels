import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaGraduationCap,
  FaGlobeAsia,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const DestinationCard = ({
  destination,
  type = "study",
}: {
  destination: any;
  type: any;
}) => {
  const explorePath = type === "study" ? "/study-abroad" : "/tour";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_15px_50px_rgba(17,17,17,.08)] transition-all duration-500 hover:border-red-200 hover:shadow-[0_25px_70px_rgba(220,38,38,.15)]"
    >
      {/* ================= Image ================= */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.country}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Badge */}
        <div
          className={`absolute left-5 top-5 rounded-full bg-gradient-to-r ${destination.color} px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white shadow-lg`}
        >
          {destination.tag}
        </div>

        {/* Country */}
        <div className="absolute bottom-6 left-6">
          <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-xl">
            {destination.flag}
          </div>

          <h3 className="text-3xl font-black text-white">
            {destination.country}
          </h3>
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="flex flex-1 flex-col p-7">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-yellow-500 text-white shadow-lg">
            {type === "study" ? <FaGraduationCap /> : <FaGlobeAsia />}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-red-600">
              {type === "study" ? "Study Abroad" : "Travel Destination"}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 leading-7 text-gray-600">
          {destination.description}
        </p>

        {/* Highlights - pushed to bottom */}
        <div className="mt-auto space-y-3">
          {destination.highlights.map((item: any, index: any) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-6">
          <Link
            to={explorePath}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 sm:text-base"
          >
            Explore More
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;