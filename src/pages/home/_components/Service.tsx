import { motion } from "framer-motion";
 
import ServiceCard from "./ServiceCard";

 import {
  FaGraduationCap,
  FaPassport,
  FaGlobeAsia,
  FaNotesMedical,
  FaHandshake,
  FaUsers,
  FaPlaneDeparture,
  FaFileAlt,
  FaSuitcaseRolling,
} from "react-icons/fa";

const services = [
  {
    icon: FaGraduationCap,
    title: "Study Abroad",
    description:
      "Expert guidance for university admissions, scholarships, application preparation, and personalized support to help you achieve your international education goals.",
  },
  {
    icon: FaPassport,
    title: "Student Visa",
    description:
      "Complete student visa assistance including document preparation, interview guidance, application review, and professional support for a smooth visa process.",
  },
  {
    icon: FaGlobeAsia,
    title: "Visit Visa",
    description:
      "Reliable visit visa solutions for tourism, family visits, business trips, and short-term travel with accurate documentation and expert consultation.",
  },
  {
    icon: FaNotesMedical,
    title: "Medical Visa",
    description:
      "Comprehensive medical visa assistance with hospital coordination, appointment booking, document preparation, and travel support for overseas treatment.",
  },
  {
    icon: FaHandshake,
    title: "Business Visa",
    description:
      "Professional business visa services for meetings, conferences, trade visits, and corporate travel with complete documentation and application guidance.",
  },
  {
    icon: FaUsers,
    title: "Immigration Consultant",
    description:
      "Personalized immigration consultation for permanent residency, migration planning, eligibility assessment, and complete application assistance.",
  },
  {
    icon: FaPlaneDeparture,
    title: "Air Ticket",
    description:
      "Affordable domestic and international flight booking with flexible travel options, competitive fares, and dedicated customer support for every journey.",
  },
  {
    icon: FaFileAlt,
    title: "Documentation Support",
    description:
      "Professional assistance with document verification, translation, notarization, application forms, and all required paperwork for your visa process.",
  },
  {
    icon: FaSuitcaseRolling,
    title: "Tour Packages",
    description:
      "Discover customized holiday packages including flights, hotels, transportation, sightseeing, and memorable travel experiences at the best value.",
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
