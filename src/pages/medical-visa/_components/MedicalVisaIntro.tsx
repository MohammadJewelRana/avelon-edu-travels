import { motion } from "framer-motion";
import {
  FaHospital,
  FaUserMd,
  FaPassport,
  FaPlaneDeparture,
  FaArrowRight,
} from "react-icons/fa";
 

const features = [
  {
    id: 1,
    icon: FaHospital,
    title: "Hospital Selection",
    description: "Choose trusted international hospitals for your treatment.",
  },
  {
    id: 2,
    icon: FaUserMd,
    title: "Doctor Appointment",
    description: "Book consultations with experienced medical specialists.",
  },
  {
    id: 3,
    icon: FaPassport,
    title: "Visa Documentation",
    description: "Complete guidance for all medical visa paperwork.",
  },
  {
    id: 4,
    icon: FaPlaneDeparture,
    title: "Travel Assistance",
    description: "Flight, accommodation, and airport support.",
  },
];

const MedicalVisaIntro = () => {
    const introImage = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop";
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-red-50/30 py-24">
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-100/40 blur-3xl" />

      <div className="container relative mx-auto px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Shape */}
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-red-100 blur-2xl" />
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-yellow-100 blur-3xl" />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src={introImage}
                alt="Medical Visa"
                className="h-[600px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
              />

              {/* Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/20 to-transparent" />
            </div>

            {/* Experience Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -left-6 bottom-10 rounded-3xl border border-red-100 bg-white px-6 py-5 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-xl text-white">
                  <FaHospital />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    500+
                  </h4>

                  <p className="text-sm text-gray-500">
                    Patients Assisted
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trusted Badge */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -right-5 top-10 rounded-2xl bg-yellow-400 px-5 py-4 shadow-lg"
            >
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-black">
                  Trusted
                </p>

                <h4 className="mt-1 text-lg font-bold text-black">
                  Medical Support
                </h4>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-red-600">
              Medical Visa Assistance
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
              Get World-Class
              <span className="block text-red-600">
                Medical Treatment Abroad
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Avelon provides complete medical visa assistance for patients
              seeking treatment abroad. From selecting the right hospital and
              booking specialist appointments to preparing visa documents and
              arranging travel, our experienced team supports you at every step
              of your medical journey.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-red-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-red-50 transition-all duration-300 group-hover:bg-red-600">
                        <Icon className="text-2xl text-red-600 transition-all duration-300 group-hover:rotate-6 group-hover:text-yellow-300" />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-5 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-20" />
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-red-200"
              >
                Book Free Consultation

                <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center rounded-2xl border border-red-200 bg-white px-7 py-4 font-semibold text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-50"
              >
                Contact Our Experts
              </motion.button>
            </div>

      
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedicalVisaIntro;