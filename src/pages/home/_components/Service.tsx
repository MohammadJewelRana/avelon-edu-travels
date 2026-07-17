import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaPassport,
  FaPlaneDeparture,
  FaGlobeAsia,
  FaBriefcase,
  FaSuitcaseRolling,
} from "react-icons/fa";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: FaGraduationCap,
    title: "Study Abroad",
    description:
      "Professional guidance for admissions, scholarships, and university applications worldwide.",
  },
  {
    icon: FaPassport,
    title: "Student Visa",
    description:
      "Professional visa consultation with complete documentation support to maximize your approval chances.",
  },
  {
    icon: FaGlobeAsia,
    title: "Visit Visa",
    description:
      "Fast and reliable visit visa processing for tourism, family visits, and business travel across multiple countries.",
  },
  {
    icon: FaBriefcase,
    title: "Work Permit",
    description:
      "Secure overseas employment opportunities with complete work permit and immigration assistance.",
  },
  {
    icon: FaPlaneDeparture,
    title: "Air Ticket",
    description:
      "Book domestic and international flights at competitive prices with flexible travel options.",
  },
  {
    icon: FaSuitcaseRolling,
    title: "Tour Packages",
    description:
      "Explore carefully designed holiday packages with hotels, transport, sightseeing, and unforgettable experiences.",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-[140px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100 blur-[140px] opacity-40"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-red-600">
            Our Services
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold leading-tight text-[#111111] md:text-5xl lg:text-6xl">
            Complete Education &
            <span className="block text-red-600">Travel Solutions</span>
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            We provide end-to-end solutions for your international journey—from
            <span className="font-semibold text-[#111111]">
              {" "}
              university admissions
            </span>
            ,
            <span className="font-semibold text-[#111111]">
              {" "}
              student & visit visas
            </span>
            ,<span className="font-semibold text-[#111111]"> work permits</span>
            ,
            <span className="font-semibold text-[#111111]">
              {" "}
              air ticket booking
            </span>
            , to
            <span className="font-semibold text-[#111111]">
              {" "}
              customized tour packages
            </span>
            . Your success and seamless travel experience are our top
            priorities.
          </p>
        </motion.div>
        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>

 
      </div>
    </section>
  );
};

export default Services;
