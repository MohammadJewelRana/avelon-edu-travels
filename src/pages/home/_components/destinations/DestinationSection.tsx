import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCompass } from "react-icons/fa";

import DestinationTabs from "./DestinationTabs";
import DestinationCard from "./DestinationCard";
import studyDestinations from "./tourData";
import travelDestinations from "./travelData";

 

const DestinationSection = () => {
  const [activeTab, setActiveTab] = useState("study");

  const data =
    activeTab === "study" ? studyDestinations : travelDestinations;

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-20 lg:py-28">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.14),transparent_35%)]" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[130px]" />

      {/* ================= Container ================= */}

      <div className="relative customWidth px-4">
        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-100 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-red-600">
            <FaCompass />

            Explore Destinations
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#111111] lg:text-6xl">
            Your Journey Starts
            <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              With The Right Destination
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Whether you're planning to study abroad or explore the world,
            Avelon helps you discover the perfect destination with complete
            guidance and personalized support.
          </p>
        </motion.div>

        {/* ================= Tabs ================= */}

        <DestinationTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* ================= Cards ================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.45 }}
            className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
          >
            {data.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <DestinationCard
                  destination={destination}
                  type={activeTab}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ================= Bottom CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20"
        >
          <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white p-10 shadow-[0_20px_70px_rgba(17,17,17,.08)]">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-black text-[#111111] lg:text-4xl">
                  Not Sure Which Destination Is Right For You?
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Our experienced consultants will help you choose the best
                  country, university, or travel package based on your goals,
                  budget, and future plans.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 px-8 py-5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(220,38,38,.25)]"
              >
                Book Free Consultation

                <FaArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationSection;