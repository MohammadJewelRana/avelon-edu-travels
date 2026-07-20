import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaTooth,
  FaBrain,
  FaUserMd,
  FaSyringe,
  FaHospital,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";
import CTASection from "../../../shared/CTASection";

const countries = [
  {
    country: "Thailand",
    flag: "🇹🇭",
    color: "from-red-500 to-orange-400",
    treatments: [
      "Cosmetic Surgery",
      "Dental Care",
      "Fertility / IVF",
      "Wellness & Recovery",
    ],
    bestFor: "Affordable, high-quality elective treatments and recovery stays.",
    icon: FaSyringe,
  },
  {
    country: "Malaysia",
    flag: "🇲🇾",
    color: "from-blue-500 to-cyan-500",
    treatments: ["Cardiology", "Orthopedics", "Oncology", "Health Screening"],
    bestFor: "Strong hospital infrastructure with specialist care.",
    icon: FaHeartbeat,
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    color: "from-yellow-500 to-amber-400",
    treatments: [
      "Cancer Care",
      "Cardiovascular Care",
      "Complex Surgery",
      "Transplants",
    ],
    bestFor: "Premium destination for advanced and complex treatment.",
    icon: FaHospital,
  },
  {
    country: "India",
    flag: "🇮🇳",
    color: "from-green-500 to-emerald-500",
    treatments: ["Heart Surgery", "Orthopedics", "Neurosurgery", "Transplants"],
    bestFor: "Excellent for major procedures at strong value pricing.",
    icon: FaBrain,
  },
  {
    country: "Turkey",
    flag: "🇹🇷",
    color: "from-pink-500 to-rose-400",
    treatments: [
      "Hair Transplant",
      "Dental",
      "Eye Surgery",
      "Cosmetic Surgery",
    ],
    bestFor: "Popular for aesthetic and specialty procedures.",
    icon: FaTooth,
  },
  {
    country: "South Korea",
    flag: "🇰🇷",
    color: "from-violet-500 to-fuchsia-500",
    treatments: [
      "Plastic Surgery",
      "Cancer Care",
      "Advanced Diagnostics",
      "Rehabilitation",
    ],
    bestFor: "Known for modern technology and precision-based treatment.",
    icon: FaUserMd,
  },
];

const MedicalVisaCountries = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            badge="Medical Destination Guide"
            title="Choose the Right Country for Your Treatment"
            description="Explore leading medical destinations offering world-class healthcare, experienced specialists, and affordable treatment options."
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {countries.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.country}
                href="https://wa.me/8801977005581"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative block overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_14px_45px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_22px_60px_rgba(15,23,42,.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl transition duration-300 group-hover:bg-yellow-400/20" />

                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl">{item.flag}</div>
                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {item.country}
                    </h3>
                  </div>

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition duration-300 group-hover:scale-105`}
                  >
                    <Icon size={22} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.bestFor}
                </p>

                <div className="mt-6 grid gap-2">
                  {item.treatments.map((treatment) => (
                    <div
                      key={treatment}
                      className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm text-slate-700"
                    >
                      <FaCheckCircle className="text-red-500" />
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-medium text-slate-500">
                    Chat on WhatsApp
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white transition group-hover:scale-105">
                    <FaWhatsapp size={18} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <CTASection
          badge="We Also Process More Countries"
          title="Need Treatment in Another Country?"
          description="If your preferred destination isn't listed, we can still assist with medical visa processing, hospital coordination, and complete travel planning for many other countries."
          buttonText="Contact on WhatsApp"
         
          footerText="Fast response • Country guidance • Treatment support"
        />
      </div>
    </section>
  );
};

export default MedicalVisaCountries;
