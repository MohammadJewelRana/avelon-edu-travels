// src/components/StudyAbroad/_components/PopularSubjects.jsx

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaHeartbeat,
  FaCog,
  FaChartLine,
  FaPlaneDeparture,
  FaBalanceScale,
  FaPaintBrush,
  FaFlask,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const subjects = [
  { title: "Computer Science", icon: FaLaptopCode },
  { title: "Medicine", icon: FaHeartbeat },
  { title: "Engineering", icon: FaCog },
  { title: "Business", icon: FaChartLine },
  { title: "Aviation", icon: FaPlaneDeparture },
  { title: "Law", icon: FaBalanceScale },
  { title: "Arts & Design", icon: FaPaintBrush },
  { title: "Science", icon: FaFlask },
];

const PopularSubjects = () => {
  return (
    <section>
      {/* Section Heading */}
     
   <SectionHeader
  badge="Academic Programs"
  title="Popular Subjects"
  description="Explore the most popular study programs offered by leading universities worldwide."
/>
        
 
 

      {/* Subjects */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {subjects.map((subject, index) => {
          const Icon = subject.icon;

          return (
            <motion.div
              key={subject.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-500">
                <Icon className="text-3xl text-red-500 transition-colors duration-500 group-hover:text-white" />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-base font-black uppercase tracking-[0.08em] text-gray-900">
                {subject.title}
              </h3>

              {/* Bottom Line */}
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularSubjects;