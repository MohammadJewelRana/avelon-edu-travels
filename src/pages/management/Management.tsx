import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import ceo from "../../assets/member/ceo.webp";
import galib from "../../assets/member/galib.webp";
import fatema from "../../assets/member/fatima.webp";
import mujib from "../../assets/member/mujib-sir.webp";
import alisha from "../../assets/member/alisha.jpg";
import { Link } from "react-router-dom";
import Concern from "../home/_components/Concern";

const members = [
  {
    id: 1,
    name: "Sumona Sharmin",
    designation: "CEO, Rtemis Ltd",
    image: ceo,
    description:
      "Sumona Sharmin is a pioneering entrepreneur from North Bengal, Bangladesh, known for her dedication to youth development and women's empowerment. As the Founder and CEO of Rtemis Limited, she runs multiple ventures that provide young individuals & women with opportunities to develop and enhance their skills and contribute to social progress.",
    social: {
      linkedin: "https://www.linkedin.com/in/sumona-sharmin-1558291b8/",
    },
  },
  {
    id: 2,
    name: "Arefin Khan Galib",
    designation: "Director, Rtemis Ltd",
    image: galib,
    description:
      "Arefin Khan Galib is a passionate and driven entrepreneur with a strong background in digital technology, new business development, and strategy.",
    social: {
      linkedin: "#",
    },
  },


  {
    id: 4,
    name: "Mogibul Hoque",
    designation: "GM (Finance), Rtemis Ltd",
    image: mujib,
    description:
      "Mogiobul Hoque Khondakar is widely regarded as one of the most prolific and dynamic legal minds, specializing in business development, corporate, commercial, and financial services.",
    social: {
      linkedin: "https://www.linkedin.com/in/mogibul-hoque-khondakar-5a4b986b/",
    },
  },
];

const Management = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-[#F7BE15] pb-8 capitalize text-center">
          Our Management Team
        </h2>

        {/* CEO Section */}
        <motion.div
          className="flex flex-col items-center shadow-lg  p-4 border rounded-lg border-yellow-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={members[0].image}
            alt={members[0].name}
            className="w-40 h-40 rounded-full shadow-xl border-4 border-yellow-500"
          />
          <h3 className="text-2xl font-semibold mt-4">{members[0].name}</h3>
          <p className="text-yellow-600 pb-2 text-lg">
            {members[0].designation}
          </p>
          <p className="text-gray-600 text-center max-w-5xl mt-2">
            {members[0].description}
          </p>
          <div className="flex mt-3">
            <Link
              to={members[0].social.linkedin}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0077B5] text-white transition duration-300 hover:bg-[#004471]"
            >
              <FaLinkedinIn size={18} />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </motion.div>

        {/* Directors Section */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {members.slice(1).map((member) => (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              key={member.id}
              className="flex flex-col lg:flex-row bg-white border border-yellow-400 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="flex justify-center items-center p-6 lg:p-8">
                <div className="w-40 h-40 lg:w-36 lg:h-36 rounded-full border-4 border-yellow-400  overflow-hidden  shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-fill "
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-center p-4 text-center lg:text-left space-y-2">
                <h3 className="text-2xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-semibold">
                  {member.designation}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
                <div className="pt-3">
                  <Link
                    to={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-4 py-2 rounded-md text-sm hover:bg-[#005885] transition-colors duration-300"
                  >
                    <FaLinkedinIn />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Concern />
    </div>
  );
};

export default Management;
