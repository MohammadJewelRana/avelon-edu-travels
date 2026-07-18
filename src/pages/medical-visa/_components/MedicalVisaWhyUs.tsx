// src/components/medical-visa/MedicalVisaWhyUs.jsx
import { motion } from "framer-motion";
import { FaHeartbeat, FaGlobe, FaClock, FaShieldAlt, FaUsers, FaAward } from "react-icons/fa";

const features = [
  {
    icon: FaHeartbeat,
    title: "Medical Expertise",
    description: "Our team includes healthcare professionals who understand medical treatment requirements.",
    stat: "15+ Years",
    statLabel: "Experience",
  },
  {
    icon: FaGlobe,
    title: "Global Network",
    description: "Partner hospitals in 20+ countries with JCI, NABH, and international accreditations.",
    stat: "500+",
    statLabel: "Hospitals",
  },
  {
    icon: FaClock,
    title: "Fast Processing",
    description: "Priority visa processing with embassy relationships ensures quicker approvals.",
    stat: "98%",
    statLabel: "Success Rate",
  },
  {
    icon: FaShieldAlt,
    title: "Complete Support",
    description: "24/7 emergency assistance throughout your entire medical journey abroad.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: FaUsers,
    title: "Personalized Care",
    description: "Dedicated case manager assigned to each patient for personalized attention.",
    stat: "5000+",
    statLabel: "Happy Patients",
  },
  {
    icon: FaAward,
    title: "Trusted Partner",
    description: "Certified visa consultancy with government approval and industry recognition.",
    stat: "100%",
    statLabel: "Transparent",
  },
];

const MedicalVisaWhyUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-red-50/30 to-white py-24">
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-yellow-100/30 blur-3xl" />

      <div className="container relative mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Your Health, Our Priority
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We're not just a visa agency. We're your healthcare travel partners committed to your well-being.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-red-200 hover:shadow-2xl"
            >
              {/* Top Accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 group-hover:w-full" />

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-3xl text-white shadow-lg">
                <feature.icon />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Stat */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-red-600">{feature.stat}</span>
                <span className="text-sm font-medium text-gray-500">{feature.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default MedicalVisaWhyUs;