import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaGlobeAsia } from "react-icons/fa";

const WHATSAPP_NUMBER = "8801XXXXXXXXX";

const OtherCountriesBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[32px] border border-red-100 bg-gradient-to-br from-white via-red-50/40 to-yellow-50/50 px-6 py-12 shadow-xl sm:px-10 lg:px-14"
    >
      {/* Decorative Glow */}
      <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-red-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-yellow-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
            <FaGlobeAsia className="text-4xl text-red-500" />
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-black uppercase tracking-[0.08em] text-gray-900 sm:text-4xl">
            Can't Find Your Study Destination?
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-gray-600">
            We also provide admission guidance and student visa support for many
            other countries around the world. Contact our experts and let's find
            the best destination for your future.
          </p>

          {/* Features */}
          <div className="mt-8 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
            {[
              "Admission Assistance",
              "Student Visa Support",
              "Scholarship Guidance",
              "Documentation Support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-3 rounded-2xl border border-white bg-white/80 px-5 py-4 shadow-sm"
              >
                <FaCheckCircle className="text-green-500" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi, I want to know about studying in other countries."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-2xl"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default OtherCountriesBanner;