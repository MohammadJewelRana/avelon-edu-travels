// src/components/medical-visa/MedicalVisaProcess.jsx
import { motion } from "framer-motion";
import { FaClipboardCheck, FaFileMedical, FaPassport, FaPlane, FaHospitalAlt, FaCheckCircle } from "react-icons/fa";

const processSteps = [
  {
    step: "01",
    icon: FaClipboardCheck,
    title: "Initial Consultation",
    description: "Free assessment of your medical condition and treatment options abroad.",
    features: ["Medical history review", "Treatment requirement analysis", "Country & hospital recommendations"],
  },
  {
    step: "02",
    icon: FaHospitalAlt,
    title: "Hospital Selection",
    description: "Choose from our network of 50+ accredited international hospitals.",
    features: ["Hospital comparison", "Doctor credentials verification", "Treatment cost estimation"],
  },
  {
    step: "03",
    icon: FaFileMedical,
    title: "Medical Documentation",
    description: "Complete preparation of all required medical reports and documents.",
    features: ["Medical report translation", "Document attestation", "Hospital invitation letter"],
  },
  {
    step: "04",
    icon: FaPassport,
    title: "Visa Application",
    description: "Expert guidance through the entire medical visa application process.",
    features: ["Visa form filling", "Document checklist", "Embassy submission support"],
  },
  {
    step: "05",
    icon: FaPlane,
    title: "Travel Arrangements",
    description: "Complete travel planning including flights, accommodation, and local transport.",
    features: ["Flight booking", "Hospital-near accommodation", "Airport pickup & drop-off"],
  },
  {
    step: "06",
    icon: FaCheckCircle,
    title: "On-Ground Support",
    description: "Dedicated assistance throughout your treatment journey abroad.",
    features: ["Hospital appointment coordination", "Local interpreter services", "Emergency support 24/7"],
  },
];

const MedicalVisaProcess = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            How It Works
          </span>
          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Simple 6-Step Process
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We've streamlined the medical visa process into 6 easy steps. Our team handles the complexities while you focus on your health.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="mt-16 relative">
          {/* Connection Line (Desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-gradient-to-b from-red-200 via-red-300 to-yellow-200 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col items-center lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-red-300 hover:shadow-2xl"
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon Box */}
                      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-3xl text-white shadow-lg">
                        <item.icon />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black text-red-200">{item.step}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="mt-3 text-gray-600">{item.description}</p>

                        {/* Features List */}
                        <ul className="mt-4 space-y-2">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="h-2 w-2 rounded-full bg-yellow-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-10 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-red-600 shadow-lg lg:flex" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalVisaProcess;