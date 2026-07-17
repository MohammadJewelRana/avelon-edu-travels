import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -12 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-md transition-all duration-500 hover:border-red-600 hover:shadow-[0_20px_45px_rgba(220,38,38,0.18)]"
    >
      {/* Top Border */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600 transition-all duration-500 group-hover:w-full"></div>

      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-100 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-4xl text-red-600 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-yellow-300">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mb-4 text-2xl font-bold text-[#111111]">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mb-6 leading-7 text-gray-600 text-justify">
        {description}
      </p>

      {/* Bottom Accent */}
      <div className="mt-8 border-t border-gray-100 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Premium Service
          </span>

          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
