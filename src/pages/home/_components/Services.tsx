import { motion } from "framer-motion";
import inv from "../../../assets/services/Invest.png";
import ven from "../../../assets/services/venture.png";
import net from "../../../assets/services/networking.png";
import port from "../../../assets/services/portfolio.png";
import stra from "../../../assets/services/strategic.png";

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Investment",
      details:
        "Providing financial support to innovative projects and businesses, helping them grow and succeed.",
      img: inv,
      bgColor: "bg-[rgb(68,140,116,0.10)]",
    },
    {
      id: 2,
      title: "Venture Development",
      details:
        "Guiding startups and early-stage companies through the development process, from idea generation to market launch.",
      img: ven,
      bgColor: "bg-[#FDEDED]",
    },
    {
      id: 3,
      title: "Networking",
      details:
        "Connecting clients with valuable industry contacts and resources to foster collaboration and growth.",
      img: net,
      bgColor: "bg-[rgb(237,203,80,0.10)]",
    },
    {
      id: 4,
      title: "Portfolio Management",
      details:
        "This involves managing a collection of investments, ensuring each project or business in the portfolio performs well. It includes monitoring performance, balancing risks and returns, making informed decisions on when to buy or sell investments, and strategically reallocating resources to maximize overall portfolio growth and stability.",
      img: port,
      bgColor: "bg-[rgb(63,127,202,0.10)]",
    },
    {
      id: 5,
      title: "Strategic Management",
      details:
        "This service involves providing expert advice on business strategy, helping companies optimize their operations, streamline processes, and achieve their goals. It includes identifying growth opportunities, developing strategic plans, and implementing effective management practices to enhance performance and competitiveness.",
      img: stra,
      bgColor: "bg-[rgb(0,164,126,0.15)]",
    },
  ];

  return (
    <div className="bg-[rgb(68,140,116,0.10)] px-4">
      <div className="customWidth py-8">
        <h1 className="text-3xl font-bold pb-3 text-[#F7BE15]">Our Services</h1>

        {/* First Section (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              className={`${item.bgColor} rounded-2xl p-8 shadow-lg`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={item.img} alt={item.title} className="" />
              <p className="font-bold py-4 capitalize">{item.title}</p>
              <p className="text-gray-600">{item.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Second Section (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {data.slice(3, 5).map((item) => (
            <motion.div
              key={item.id}
              className={`${item.bgColor} rounded-2xl p-8 shadow-lg`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={item.img} alt={item.title} className="" />
              <p className="font-bold py-4 capitalize">{item.title}</p>
              <p className="text-gray-600">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
