import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import DestinationTabs from "./DestinationTabs";
import DestinationCard from "./DestinationCard";
import studyDestinations from "./tourData";
import travelDestinations from "./travelData";
import SectionHeader from "../../../../shared/SectionHeader";

 

const DestinationSection = () => {
  const [activeTab, setActiveTab] = useState("study");

  const data =
    activeTab === "study" ? studyDestinations : travelDestinations;

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-12 lg:py-16">
      {/* ================= Background ================= */}
 

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/10 blur-[130px]" />

      {/* ================= Container ================= */}

      <div className="relative customWidth px-4">
        {/* ================= Heading ================= */}
<SectionHeader
  badge="Explore Destinations"
  title="Explore Your Next Destination"
  description="Whether you're planning to study abroad or explore the world, Avelon helps you discover the perfect destination with expert guidance and personalized support."
/>
 

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