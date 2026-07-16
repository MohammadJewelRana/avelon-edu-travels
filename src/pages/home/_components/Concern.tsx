import { motion } from "framer-motion";
import psh from "../../../assets/concern/new/psh.png";
import pfc from "../../../assets/concern/new/pfc.png";
// import tts from "../../../assets/concern/new/tts.png";
import afredity from "../../../assets/concern/new/afredity.png";
import fly from "../../../assets/concern/new/fly.png";
import suddho from "../../../assets/concern/new/suddho.png";
import grohon from "../../../assets/concern/new/grohon.png";
import leather from "../../../assets/concern/new/leather.png";
import the1 from "../../../assets/concern/new/house.png";
import nante1 from "../../../assets/concern/new/nante.png";
// import home from "../../../assets/concern/new/nets.png";

 
import tts from "../../../assets/concern/new/tts.png";
 
 

const Concern = () => {
  const projects = [psh, pfc, tts, afredity];
  const upcomingProjects = [fly, suddho, grohon, leather, the1, nante1];

  return (
    <div className="bg-[rgb(68,140,116,0.10)] px-4">
      <div className="customWidth py-16">
        <div>
          <h1 className="text-3xl font-bold pb-3 text-[#F7BE15]">
            Our Sister Concern
          </h1>
          <p className="text-justify text-gray-700 font-semibold text-lg">
            Rtemis is at your side with more than ten service projects. We want
            to work on some more projects, and work on them has already
            started; soon, they will materialize. With all your trust, love,
            and support, one day Rtemis will become a brand and spread across
            the country’s borders to the outside world.
          </p>
        </div>

        {/* Projects */}
        <div className="py-6">
          <h1 className="text-[#F7BE15] text-xl font-semibold pb-3">
            Ventures / Projects
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white flex h-16 w-40 md:w-36 rounded-md p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={project} alt={`Project ${index}`} className="mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <h1 className="text-[#F7BE15] text-xl font-semibold pb-3">
            Projects to be launched soon
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white flex h-16 w-40 md:w-36 rounded-md p-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <img src={project} alt={`Upcoming Project ${index}`} className="mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concern;
