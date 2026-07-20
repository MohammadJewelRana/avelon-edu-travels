import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaGlobe,
  FaClock,
  FaShieldAlt,
  FaUsers,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";
import CTASection from "../../../shared/CTASection";

const features = [
  {
    icon: FaHeartbeat,
    title: "Medical Expertise",
    description:
      "Our team understands treatment needs, hospital coordination, and patient travel support.",
    stat: "15+",
    statLabel: "Years Experience",
  },
  {
    icon: FaGlobe,
    title: "Global Network",
    description:
      "Partner hospitals in 20+ countries with trusted international medical standards.",
    stat: "500+",
    statLabel: "Hospitals",
  },
  {
    icon: FaClock,
    title: "Fast Processing",
    description:
      "We move quickly with paperwork, hospital documents, and visa support.",
    stat: "98%",
    statLabel: "Success Rate",
  },
  {
    icon: FaShieldAlt,
    title: "Complete Support",
    description:
      "Get assistance throughout the full journey from treatment planning to travel.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: FaUsers,
    title: "Personalized Care",
    description:
      "Every patient gets dedicated support based on treatment and destination.",
    stat: "5000+",
    statLabel: "Happy Patients",
  },
  {
    icon: FaAward,
    title: "Trusted Partner",
    description:
      "A reliable visa consultancy focused on transparency and patient confidence.",
    stat: "100%",
    statLabel: "Transparent",
  },
];

const MedicalVisaWhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50/40 py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-100/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
    <SectionHeader
  badge="Why Choose Us"
  title="Your Health, Our Priority"
  description="We are more than a visa agency. We help patients plan their treatment journey with care, speed, and complete support."
/>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:border-red-200 hover:shadow-[0_20px_60px_rgba(15,23,42,.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-100/40 blur-2xl transition duration-300 group-hover:bg-red-100/60" />

                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/20 transition duration-300 group-hover:scale-105">
                    <Icon size={24} />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <FaCheckCircle size={18} />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-7 rounded-2xl bg-slate-50 px-4 py-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-red-600">
                      {feature.stat}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      {feature.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

<CTASection
  badge="Full Medical Travel Support"
  title="Ready to Plan Your Treatment Abroad?"
  description="We support patients with medical visas, hospital coordination, travel planning, and destination guidance for the right country."
  buttonText="Chat on WhatsApp"
 
  footerText="Fast response • Clear guidance • Trusted support"
/>
      </div>
    </section>
  );
};

export default MedicalVisaWhyUs;