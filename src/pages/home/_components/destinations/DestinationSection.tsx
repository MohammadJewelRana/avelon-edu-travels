import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


import DestinationTabs from "./DestinationTabs";
import DestinationCard from "./DestinationCard";
import studyDestinations from "./tourData";
import travelDestinations from "./travelData";
import SectionHeader from "../../../../shared/SectionHeader";
import CTASection from "../../../../shared/CTASection";

 

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
<CTASection
  badge="Free Expert Consultation"
  title="Not Sure Which Destination Is Right for You?"
  description="Our experienced consultants will help you choose the best country, university, or travel package based on your goals, budget, and future plans."
  buttonText="Book Free Consultation"
 
  footerText="Personalized guidance • Trusted experts • No consultation fee"
/>
      </div>
    </section>
  );
};

export default DestinationSection;