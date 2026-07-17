import { motion } from "framer-motion";

import img1 from "../../../assets/hero/avelon.jpg";
import img2 from "../../../assets/hero/avelon.jpg";

import {
  FaArrowRight,
  FaGlobeAsia,
  FaUserShield,
  FaHotel,
  FaShieldAlt,
} from "react-icons/fa";

const AboutTravel = () => {
  const features = [
    {
      icon: <FaGlobeAsia />,
      title: "Global Destinations",
    },
    {
      icon: <FaUserShield />,
      title: "Expert Guidance",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Travels",
    },
    {
      icon: <FaHotel />,
      title: "Luxury Lodging",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="flex justify-center gap-6"
          >
            <div className="mt-10">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=700&q=80"
                // src={img1}
                alt="Travel destination"
                className="
                  h-[470px]
                  w-64
                  rounded-[40px]
                  object-cover
                  shadow-2xl
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=700&q=80"
                // src={img2}
                alt="Travel experience"
                className="
                  h-[560px]
                  w-64
                  rounded-[40px]
                  object-cover
                  shadow-2xl
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <span
              className="
                text-sky-500
                text-sm
                font-semibold
                uppercase
                tracking-[5px]
              "
            >
              Avelon Travel
            </span>

            <h2
              className="
                mt-5
                text-5xl
                font-bold
                leading-tight
                text-slate-900
                lg:text-6xl
              "
            >
              Discover the world{" "}
              <span className="text-yellow-500">
                with
                <br />
                our guide
              </span>
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-gray-500
              "
            >
              Discover the world with comfort and unforgettable experiences. Let
              us guide your next adventure with personalized travel planning,
              visa assistance, and exciting international tour packages.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-sky-100
                      text-xl
                      text-sky-600
                      shadow-md
                      transition-all
                      duration-300
                      hover:bg-sky-600
                      hover:text-white
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Professional travel service with complete support.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <div className="flex -space-x-4">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Happy traveler"
                    className="h-14 w-14 rounded-full border-4 border-white object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    9,500
                    <span className="text-sky-500">+</span>
                  </h3>
                  <p className="text-gray-500">Happy Travelers</p>
                </div>
              </div>

              <button
                type="button"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
                  rounded-full
                  bg-[#0F2F75]
                  px-8
                  py-4
                  text-white
                  shadow-xl
                  duration-300
                  hover:bg-sky-600
                "
              >
                Read More
                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#0F2F75]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:bg-sky-500
                    group-hover:text-white
                  "
                >
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 right-5 hidden select-none lg:block">
        <h1
          className="
            text-[180px]
            font-black
            uppercase
            leading-none
            text-slate-100
          "
        >
          TOUR
        </h1>
      </div>
    </section>
  );
};

export default AboutTravel;