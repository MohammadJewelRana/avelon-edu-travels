import { motion } from "framer-motion";
import { FaGlobeAsia, FaGraduationCap } from "react-icons/fa";

const tabs = [
  {
    id: "study",
    label: "Study Abroad",
    icon: FaGraduationCap,
    description: "Universities • Scholarships • Student Visa",
  },
  {
    id: "travel",
    label: "Travel Destinations",
    icon: FaGlobeAsia,
    description: "Tours • Holidays • Visa Assistance",
  },
];

const DestinationTabs = ({ activeTab, setActiveTab }:any) => {
  return (
    <div className="mb-14 flex justify-center">
      <div className="inline-flex flex-col gap-3 rounded-[32px] border border-gray-200 bg-white p-3 shadow-[0_20px_60px_rgba(17,17,17,.08)] md:flex-row">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative z-10 overflow-hidden rounded-[24px] px-6 py-5 text-left transition-all duration-300 md:min-w-[320px]"
            >
              {/* Active Background */}
              {active && (
                <motion.div
                  layoutId="destinationTab"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-red-600 via-red-500 to-yellow-500"
                />
              )}

              <div className="relative z-10 flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                    active
                      ? "bg-white/20 text-white backdrop-blur-lg"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  <Icon className="text-xl" />
                </div>

                <div>
                  <h3
                    className={`text-lg font-bold transition-colors duration-300 ${
                      active ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {tab.label}
                  </h3>

                  <p
                    className={`mt-1 text-sm leading-6 transition-colors duration-300 ${
                      active ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {tab.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DestinationTabs;