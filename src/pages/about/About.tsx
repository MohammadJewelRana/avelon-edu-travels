import { motion } from "framer-motion";
import img from "../../assets/about/ceo.png";
import Concern from "../home/_components/Concern";

const About = () => {
  return (
    <div>
      <div className="customWidth py-8 px-4">
        <div>
          <h1 className="text-3xl font-bold pb-3 text-[#F7BE15]">
            About Rtemis Limited
          </h1>
          <div className="text-lg">
            <p className="pb-4 text-justify">
              Rtemis Limited is a dynamic, multi-project based company dedicated
              to transforming innovative ideas into thriving ventures and
              building successful new businesses. With a core focus on
              innovation, collaboration, and growth, Rtemis creates a fertile
              ground for groundbreaking concepts to flourish.
            </p>
            <p className="pb-4 text-justify">
              Our approach is centered on providing the strategic framework and
              essential resources necessary to nurture these ideas. A
              combination of expert guidance, comprehensive support, and a
              collaborative spirit, we turn concepts into market-leading
              businesses that drive progress and set new standards in their
              respective industries.
            </p>
            <p className="pb-4 text-justify">
              At Rtemis, we believe the key to success lies in constant
              evolution and adaptability. By fostering a culture of continuous
              improvement and forward-thinking, we ensure that every project we
              undertake is positioned for sustainable growth and long-term
              success.
            </p>
            <p className="pb-4 text-justify">
              Join us at Rtemis Limited, where visionary ideas meet strategic
              execution to create the future of business.
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold pb-6 text-[#F7BE15] mt-12 ">
            About CEO
          </h1>
        </div>

        {/* Responsive Flex Container */}
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {/* Left side - CEO Image */}
          <motion.div
            className="w-full md:w-1/2 flex"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.img
              src={img}
              alt="CEO"
              className="w-full md:max-w-none max-w-xs mx-auto border rounded-lg border-yellow-400 shadow-xl object-cover"
              whileHover={{ scale: 1.05, y: -5 }}
            />
          </motion.div>

          {/* Right side - CEO Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-between "
          >
            <div className="text-justify">
              <p className="text-lg">
                Sumona Sharmin is a pioneering entrepreneur from North Bengal,
                Bangladesh, known for her dedication to youth development and
                women's empowerment. As the Founder and CEO of Rtemis Limited,
                she runs multiple ventures that provide young individuals &
                women with opportunities to develop and enhance their skills and
                contribute to social progress.
              </p>
              <p className="py-4 text-lg">
                Under her leadership, Rtemis Limited is continuously working on
                a project that offers safe and reliable housing solutions for
                females in Dhaka, combining modern dormitory facilities with
                permanent living concepts called Project Second Home. Her
                creative approach & passion for women's empowerment led to a
                Clothing rental platform that provides High-End luxury attire at
                a fraction of the price and established a brand known as The
                Thread Story.
              </p>
              <p className="text-lg">
                Sumona's journey began at the age of 21 when she recognized the
                untapped potential of Bangladesh's youth. She established Rtemis
                Limited to harness this potential, focusing on empowering young
                people and women through various projects. Her work has not only
                provided employment opportunities but also fostered a culture of
                innovation and self-reliance among the younger generation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Concern/>
    </div>
  );
};

export default About;
