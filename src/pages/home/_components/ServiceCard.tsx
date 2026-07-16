import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12 }}
      className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-md transition-all duration-500 hover:border-red-600 hover:shadow-2xl"
    >
      {/* Top Border */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 transition-all duration-500 group-hover:w-full"></div>

      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-4xl text-red-600 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-yellow-300">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold text-[#111111]">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-8 leading-7 text-gray-600">
        {description}
      </p>

      {/* Button */}
      <button className="flex items-center gap-3 font-semibold text-red-600 transition-all duration-300 group-hover:gap-5">
        Learn More

        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 transition-all duration-300 group-hover:bg-red-600 group-hover:text-yellow-300">
          <FaArrowRight />
        </span>
      </button>
    </motion.div>
  );
};

export default ServiceCard;