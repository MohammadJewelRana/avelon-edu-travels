

import { useState, useEffect } from "react"; // make sure useEffect is imported
import bgImage from "../../assets/about/bg.png";
import Concern from "../home/_components/Concern";
import psh from "../../assets/concern/new/psh.png";
import img1 from "../../assets/csr/1.jpeg";
import img2 from "../../assets/csr/2.jpeg";
import img3 from "../../assets/csr/3.jpeg";
import pfc from "../../assets/concern/new/pfc.png";
import { FaAngleDoubleRight } from "react-icons/fa";

interface Project {
  id: number;
  logo: string;
  title: string;
  img: string[];
  details: string[];
  goals: string;
}

const CSR = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // disable body scroll
    } else {
      document.body.style.overflow = "auto"; // enable body scroll again
    }
  
    // Cleanup to make sure scroll gets enabled if component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);
  const projectData: Project[] = [
    {
      id: 1,
      logo: psh,
      title: " Journey with Comfort & Freedom",
      img: [img1, img2, img3],
      details: [
        "Start your Journey with the Comfort of Home",
        "Support young women pursuing their dreams by providing safe, affordable accommodations in Dhaka.Through Project Second Home (PSH), Rtemis provides safe, affordable accommodation at just 71 BDT per night for young women coming to Dhaka for university entrance exams or other purposes. This CSR initiative supports educational access by reducing financial barriers, creating a welcoming environment, and empowering young women in their academic pursuits. ",
      ],
      goals:
        "Supports 300 young women annually, provides Foster Guardianship which enables the financial freedom to achieve their dreams and start their journey with the comfort of home.",
    },
    {
      id: 2,
      logo: pfc,
      title: "Taste the flavor, satisfy your cravings",
      img: [img2, img1, img3],
      details: [
        "Food for everybody",
        "PFC offers Tehari, a traditional rice with curried beef, for only 21 BDT, ensuring quality and accessible food for everyone. This program supports local food security, promotes healthy eating, and satisfies carvings to treat students, working personales & families going through limited income.",
      ],
      goals:
        "Serve 1000 food per year, reduce community food insecurity, and raise awareness about affordable, nutritious options.",
    },
    {
      id: 3,
      logo: psh,
      title: "Winter Care, One Blanket at a Time",
      img: [img3, img2, img1],
      details: [
        "Together, let us fight the cold with kindness and warmth of our heart",
        " Rtemis supports vulnerable communities by distributing blankets during winter every year. This initiative aims to provide warmth, comfort, and protection to those in need, ensuring a better life. Through these efforts, Rtemis fosters a culture of compassion and social responsibility within the community.",
      ],
      goals:
        "Helps needy people every winter by providing them with 500 blankets.",
    },
  ];

  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className="w-full bg-no-repeat bg-center flex items-center justify-center pb-12"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="customWidth px-4">
          {/* Title Section */}
          <div className="text-center text-white">
            <p className="text-3xl font-bold text-[#F7BE15] pt-8 pb-4">
              Corporate Social Responsibility (CSR)
            </p>
            <p className="font-semibold max-w-7xl mx-auto text-black">
              At Rtemis, we believe in women's empowerment & youth development.
              Our company is committed to sustainable & ethical business
              practices to positively impact society and the environment. We
              engage in various community projects such as “Food for Everybody”
              and “Start your Journey with the Comfort of Home.”
            </p>
          </div>

          {/* Card Section - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
              >
                {/* Logo */}
                <div className="flex justify-center">
                  <img src={project.logo} alt="Logo" className="h-12" />
                </div>

                {/* Divider */}
                <div className="h-1 w-full bg-amber-300 my-4"></div>

                {/* Project Title */}
                <p className="font-bold text-md text-center">{project.title}</p>

                {/* Project Image */}
                <div className="mt-4 flex justify-center">
                  <img
                    src={project.img[0]}
                    alt="Project"
                    className="rounded-lg h-40 w-full object-cover"
                  />
                </div>

                {/* Impact Goal */}
                <div className="mt-4">
                  <p className="font-bold text-sm">
                    Impact Goal:{" "}
                    <span className="font-medium text-gray-600">
                      {project.goals.length > 100
                        ? `${project.goals.substring(0, 100)}...`
                        : project.goals}
                    </span>
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                  <button
                    className="bg-[#F7BE15] w-full hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details <FaAngleDoubleRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Concern Section */}
      <Concern />

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Blur */}
          <div
            className="fixed inset-0  bg-opacity-50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Box */}
          <div className="bg-yellow-50 rounded-lg shadow-lg p-4 md:max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto z-50 relative border border-yellow-400">
            {/* Sticky Close Button */}
            <div className="sticky top-0 z-50 flex justify-end ">
              <button
                className="text-gray-600 hover:text-red-500 text-xl -pr-24"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
            </div>

            {/* Logo */}
            <div className="flex justify-center mt-4">
              <img src={selectedProject.logo} alt="Logo" className="h-12" />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl text-center mt-4">
              {selectedProject.title}
            </h3>

            {/* Main Image */}
            <div className="mt-4 flex justify-center">
              <img
                src={selectedProject.img[0]}
                alt="Project"
                className="rounded-lg h-40 w-full object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="mt-4 space-y-2">
              {selectedProject.details.map((detail, index) => (
                <p key={index} className="text-gray-700">
                  {detail}
                </p>
              ))}
            </div>

            {/* Impact Goal */}
            <p className="text-gray-700 mt-4 font-bold">
              Impact Goal:{" "}
              <span className="font-medium text-gray-600">
                {selectedProject.goals}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSR;
