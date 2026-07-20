 
 
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
import SectionHeader from "../../../shared/SectionHeader";

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
 


<SectionHeader
  badge="Our Services"
  title="Complete Education & Travel Solutions"
  description="Expert guidance for study abroad, visas, work permits, flight bookings, and unforgettable travel experiences—all in one place."
/>

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


 