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

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >

            {/* Left Image */}

            <div className="mt-10">

              <img
                src={img1}
                alt=""
                className="
                w-64
                h-[470px]
                object-cover
                rounded-[40px]
                shadow-2xl
                hover:scale-105
                duration-500
                "
              />

            </div>

            {/* Right Image */}

            <div>

              <img
                src={img2}
                alt=""
                className="
                w-64
                h-[560px]
                object-cover
                rounded-[40px]
                shadow-2xl
                hover:scale-105
                duration-500
                "
              />

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span
              className="
              uppercase
              tracking-[5px]
              text-sky-500
              text-sm
              font-semibold
              "
            >
              Avelon Travel
            </span>

            <h2
              className="
              mt-5
              text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-slate-900
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
              text-gray-500
              text-lg
              leading-8
              max-w-xl
              "
            >
              Discover the world with comfort and unforgettable
              experiences. Let us guide your next adventure with
              personalized travel planning, visa assistance,
              and exciting international tour packages.
            </p>

            {/* Feature Section এখানে Part-2 এ যোগ হবে */}
            {/* ================= FEATURES ================= */}

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">

  {features.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      <div
        className="
        w-14
        h-14
        rounded-full
        bg-sky-100
        text-sky-600
        flex
        items-center
        justify-center
        text-xl
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
        <h4 className="font-semibold text-lg text-slate-900">
          {item.title}
        </h4>

        <p className="text-gray-500 text-sm mt-1">
          Professional travel service with complete support.
        </p>
      </div>
    </motion.div>
  ))}

</div>

{/* ================= REVIEW + BUTTON ================= */}

<div className="mt-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

  {/* Reviews */}

  <div className="flex items-center gap-5">

    <div className="flex -space-x-4">

      <img
        src="https://i.pravatar.cc/150?img=12"
        alt=""
        className="w-14 h-14 rounded-full border-4 border-white object-cover"
      />
{/* 
      <img
        src="https://i.pravatar.cc/150?img=18"
        alt=""
      className="
w-64
h-[470px]
object-cover
rounded-[35px]
shadow-[0_30px_60px_rgba(0,0,0,0.15)]
hover:scale-105
duration-500
"
      /> */}

      {/* <img
        src="https://i.pravatar.cc/150?img=25"
        alt=""
    className="
w-64
h-[560px]
object-cover
rounded-[35px]
shadow-[0_30px_60px_rgba(0,0,0,0.15)]
hover:scale-105
duration-500
"
      /> */}

    </div>

    <div>

      <h3 className="text-3xl font-bold text-slate-900">
        9,500
        <span className="text-sky-500">+</span>
      </h3>

      <p className="text-gray-500">
        Happy Travelers
      </p>

    </div>

  </div>

  {/* Button */}

  <button
    className="
    group
    inline-flex
    items-center
    gap-5
    rounded-full
    bg-[#0F2F75]
    hover:bg-sky-600
    text-white
    px-8
    py-4
    duration-300
    shadow-xl
    "
  >
    Read More

    <span
      className="
      w-11
      h-11
      rounded-full
      bg-white
      text-[#0F2F75]
      flex
      items-center
      justify-center
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

    {/* Background Text */}

<div className="hidden lg:block absolute bottom-0 right-5 select-none pointer-events-none">

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