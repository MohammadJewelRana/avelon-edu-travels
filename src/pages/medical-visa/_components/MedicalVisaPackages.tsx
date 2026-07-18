// src/components/medical-visa/MedicalVisaPackages.jsx
import { motion } from "framer-motion";
import { FaCheck, FaStar, FaHeadset } from "react-icons/fa";

const packages = [
  {
    name: "Basic",
    price: "৳15,000",
    description: "Essential visa assistance for medical treatment",
    features: [
      "Initial consultation & assessment",
      "Hospital recommendation (3 options)",
      "Visa document checklist",
      "Visa application form filling",
      "Email support",
      "7-day processing time",
    ],
    notIncluded: ["Airport pickup", "Accommodation booking", "Local interpreter", "24/7 emergency support"],
    popular: false,
    icon: "🏥",
  },
  {
    name: "Standard",
    price: "৳28,000",
    description: "Complete visa + travel assistance package",
    features: [
      "Everything in Basic",
      "Hospital recommendation (5 options)",
      "Doctor appointment booking",
      "Medical report translation",
      "Flight booking assistance",
      "Airport pickup & drop-off",
      "Accommodation booking (3 days)",
      "Phone & WhatsApp support",
      "5-day processing time",
    ],
    notIncluded: ["Local interpreter", "Extended accommodation"],
    popular: true,
    icon: "✈️",
  },
  {
    name: "Premium",
    price: "৳45,000",
    description: "End-to-end medical treatment support",
    features: [
      "Everything in Standard",
      "Priority hospital selection (10+ options)",
      "Top specialist doctor consultation",
      "Complete document attestation",
      "Flight + hotel booking (7 days)",
      "Airport VIP service",
      "Local interpreter (2 days)",
      "24/7 emergency hotline",
      "Dedicated case manager",
      "3-day priority processing",
    ],
    notIncluded: [],
    popular: false,
    icon: "🌟",
  },
];

const MedicalVisaPackages = () => {
  return (
    <section className="relative bg-gradient-to-b from-red-50/50 to-white py-24">
      <div className="container mx-auto px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-red-600">
            Pricing Plans
          </span>
          <h2 className="mt-6 text-4xl font-black text-gray-900 md:text-5xl">
            Choose Your Package
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Transparent pricing with no hidden fees. Select the package that best fits your medical treatment needs.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-[32px] border-2 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
                pkg.popular
                  ? "border-red-500 scale-105 shadow-2xl"
                  : "border-gray-200 hover:border-red-300"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 py-2 text-sm font-bold text-white shadow-lg">
                    <FaStar /> Most Popular
                  </span>
                </div>
              )}

              {/* Package Icon */}
              <div className="text-center text-6xl">{pkg.icon}</div>

              {/* Package Name */}
              <h3 className="mt-6 text-center text-2xl font-bold text-gray-900">{pkg.name}</h3>
              <p className="mt-2 text-center text-gray-600">{pkg.description}</p>

              {/* Price */}
              <div className="mt-6 text-center">
                <span className="text-5xl font-black text-red-600">{pkg.price}</span>
                <span className="ml-2 text-gray-500">/ visa</span>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-gray-900">What's Included:</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <FaCheck size={10} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.notIncluded.length > 0 && (
                  <>
                    <h4 className="mt-6 mb-4 font-semibold text-gray-900">Not Included:</h4>
                    <ul className="space-y-3">
                      {pkg.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-500">
                          <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                            ✕
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-8 w-full rounded-2xl py-4 font-semibold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:shadow-red-200"
                    : "border-2 border-red-600 bg-white text-red-600 hover:bg-red-50"
                }`}
              >
                Choose {pkg.name}
              </motion.button>

              {/* Support Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <FaHeadset />
                <span>Free consultation included</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalVisaPackages;