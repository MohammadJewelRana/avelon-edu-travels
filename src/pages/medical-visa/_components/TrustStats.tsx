import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaUsers,
  FaHospital,
  FaGlobeAsia,
  FaCheckCircle,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const stats = [
  {
    id: 1,
    icon: FaUsers,
    value: 500,
    suffix: "+",
    label: "Patients Assisted",
    color: "from-red-600 to-red-500",
  },
  {
    id: 2,
    icon: FaHospital,
    value: 30,
    suffix: "+",
    label: "Partner Hospitals",
    color: "from-red-600 to-red-500",
  },
  {
    id: 3,
    icon: FaGlobeAsia,
    value: 15,
    suffix: "+",
    label: "Countries Served",
    color: "from-red-600 to-red-500",
  },
  {
    id: 4,
    icon: FaCheckCircle,
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
    color: "from-red-600 to-red-500",
  },
];

const TrustStats = () => {
  return (
    <section className="relative bg-white py-20">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-100 blur-3xl opacity-60" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      </div>

      <div className="container relative mx-auto px-5">
        {/* Heading */}

        <SectionHeader
          badge="Why Patients Trust Avelon"
          title="Trusted Medical Visa Assistance"
          description="We simplify the medical visa journey by connecting patients with trusted hospitals, experienced doctors, and complete travel support."
        />
        {/* Cards */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-sky-200 hover:shadow-2xl"
              >
                {/* Top Glow */}
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.color}`}
                />

                {/* Icon */}
                <div
                  className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-2xl text-white shadow-lg`}
                >
                  <Icon />
                </div>

                {/* Number */}
                <h3 className="text-4xl font-extrabold text-slate-900">
                  <CountUp
                    end={item.value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                {/* Label */}
                <p className="mt-3 text-base font-medium text-slate-600">
                  {item.label}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-300 group-hover:border-sky-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
