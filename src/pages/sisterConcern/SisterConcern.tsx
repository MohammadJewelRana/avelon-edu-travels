import { useState } from "react";
import bgImage from "../../assets/about/bg.png";
// import Concern from "../home/_components/Concern";

// import img1 from "../../assets/csr/1.jpeg";
// import img2 from "../../assets/csr/2.jpeg";
// import img3 from "../../assets/csr/3.jpeg";

import { FaAngleDoubleRight } from "react-icons/fa";

import psh from "../../assets/concern/new/PSH.png";
import pfc from "../../assets/concern/new/PFC.png";
// import tts from "../../../assets/concern/tts.png";
import tts from '../../assets/concern/new/tts.png'
import afredity from '../../assets/concern/new/afredity.png'
 
import fly from "../../assets/concern/new/fly.png";
import suddho from "../../assets/concern/new/suddho.png";
import grohon from "../../assets/concern/new/grohon.png";
import leather from "../../assets/concern/new/leather.png";
import the1 from "../../assets/concern/new/house.png";
import nante1 from "../../assets/concern/new/nante.png";

 






import { motion } from "framer-motion";


interface Project {
  id: number;
  logo: string;
  title: string;
  //   img: string[];
  details: string;
  projectStatus:string;
}

const SisterConcern = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectData: Project[] = [
    {
      id: 1,
      logo: psh,
      title: "Project second home",
      details:
        "PSH offers secure and affordable accommodation for young women who come to Dhaka for university entrance exams or other purposes. This initiative promotes different opportunities for them by alleviating financial challenges, fostering a supportive environment, and empowering young women to pursue their dreams & first step to their freedom. ",
        projectStatus:'launched'
    },
    {
      id: 2,
      logo: pfc,
      title: "pocket friendly catering",
      details:
        "Our own catering company aims to enhance local food, encourage healthy eating habits, and meet the dietary needs of students, working professionals, and families. Our goal is to make high-quality food accessible to everybody. ",
        projectStatus:'launched'
    },
    {
      id: 3,
      logo: tts,
      title: "the thread story",
      details:
        " Established in 2021 is the rapidly growing clothing rental brand in the country. With a strong focus on sustainability, diversity, and elegance, the platform offers a wide range of fashionable clothing for rent, allowing individuals to express their confidence through stylish choices at affordable prices. The company aims to become a premier global brand, setting trends that celebrate individuality.",
        projectStatus:'launched'
    },
    {
      id: 4,
      logo: afredity,
      title: "Afredity",
      details:
        "The brand focuses on traditional Pakistani & Indian attire that exhibits an exquisite collection of clothes for purchase. We provide customers with high-quality, beautifully crafted garments perfect for festivals, and special occasions.",
        projectStatus:'launched'
    },  {
      id: 9,
      logo: fly,
      title: "Lets Fly",
      details:
        "Lets Fly is the tourism arm of Rtemis, dedicated to providing exceptional travel experiences. Recently, the company proudly sponsored the first prize in the raffle draw for Thread Story at the Wedding Expo 2024, showcasing its commitment to supporting local businesses and celebrating creativity within the industry.",
        projectStatus:'launched'
    },
    {
      id: 10,
      logo: grohon,
      title: "grohon Creatives",
      details:
        "Our in-house digital platform of Rtemis, specializes in website development and other digital solutions. It plays a pivotal role in the operations of Project Second Home (PSH), focusing on creating and managing the online presence, ensuring accessibility, and streamlining communication for the initiative. Grohon Creatives also contributes to the overall digital strategy, supporting the growth and visibility of PSH.",
        projectStatus:'launched'
    },
    {
      id: 5,
      logo: nante1,
      title: "The Nante",
      details:
        "Our Homestay Project features luxurious studio apartments focusing on short stays like Airbnb. The Nante also offers hassle-free stay, providing 3 times nutritious meals & flexible check-in & check-out time.  ",
        projectStatus:'Launching  Soon!'
    },
    {
      id: 6,
      logo: the1,
      title: "the dream house bd",
      details:
        "It will be a dynamic recruiting firm specializing in part-time job placements. Our mission is to empower individuals with reliable, short-term employment while helping businesses to find skilled, talented individuals, efficiently and effectively.",
        projectStatus:'coming soon!'
    },
    {
      id: 7,
      logo: suddho,
      title: "suddho agro",
      details:
        "Suddho Agro focuses on high-quality finished products relating to the agriculture & cattle business. Recently the company launched “Balachao”",
        projectStatus:'coming soon!'
    },
    // {
    //   id: 8,
    //   logo: home,
    //   title: "New Home",
    //   details:
    //     " ..........",
    // },
   
    {
      id: 11,
      logo: leather,
      title: "leather bee  ",
      details:
        "A premium fashion brand combining quality craftsmanship & contemporary designs that specializes in female leather products ranging from elegant handbags, exquisite attires, stylish footwear & accessories.",
        projectStatus:'coming soon!'
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
            <p className="text-4xl font-bold text-[#F7BE15] pt-8 pb-4 capitalize" >
             our sister concern
            </p>
            <p className="font-semibold max-w-7xl mx-auto text-black">
            Rtemis is at your side with more than ten service projects. We want to work on some more projects, and work on them has already started; soon, they will materialize. With all your trust, love, and support, one-day Rtemis will become a brand and spread across the country’s borders to the outside world.
            </p>
          </div>

          {/* Card Section - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {projectData.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Logo */}
                <div className="flex justify-center">
                  <img src={project.logo} alt="Logo" className="h-20 " />
                </div>

                {/* Divider */}
                <div className="h-[2px] w-full bg-amber-300 my-4"></div>

                {/* Project Title */}
                <p className="font-bold text-md text-center  capitalize">
                  {project.title}
                </p>

                {/* Impact Goal */}
                <div className="mt-4">
                  <p className="font-bold text-sm">
                    <span className="font-medium text-gray-600">
                      {project.details.length > 100
                        ? `${project.details.substring(0, 150)}...`
                        : project.details}
                    </span>
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">

                  {
                    project?.projectStatus === 'launched' ? <> 
                      <button
                    className="bg-[#F7BE15] w-full hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details <FaAngleDoubleRight />
                  </button>
                    </> : <>
                    <button   
                    className=" bg-gray-500 capitalize w-full   text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer  "
                    onClick={() => setSelectedProject(project)}
                  >
                    {project?.projectStatus}
                  </button>
                    </>
                  }
                 
                </div>



                {/* Button */}
                {/* <div className="mt-6 flex justify-center">
                  <button
                    className="bg-[#F7BE15] w-full hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details <FaAngleDoubleRight />
                  </button>
                </div> */}




              </motion.div>
            ))}
          </div>
        </div>
      </div>
 

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50   px-4">
          {/* Background Blur */}
          <div
            className="fixed inset-0   bg-opacity-50 backdrop-blur-md "
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Box */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-lg max-w-3xl w-full z-50 relative border border-yellow-400  ">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <div className="flex justify-center">
              <img src={selectedProject.logo} alt="Logo" className="h-24" />
            </div>
            <h3 className="font-bold text-xl text-center mt-4 capitalize">
              {selectedProject.title}
            </h3>
            <div className="mt-4 flex justify-center">
              {/* <img
                src={selectedProject.img[0]}
                alt="Project"
                className="rounded-lg h-40 w-full object-cover"
              /> */}
            </div>
            <p className="text-gray-700 mt-2 text-center">
              {selectedProject.details}
            </p>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SisterConcern;
