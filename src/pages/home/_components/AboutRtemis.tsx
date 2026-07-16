import { motion } from "framer-motion";
import img from "../../../assets/about/ceo1.jpg";
import { Link } from "react-router-dom";
import { handleScrollToTop } from "../../../shared/Footer";

const AboutRtemis = () => {
  return (
    <div>
      <div className="customWidth py-8 px-4">
        <div>
          <h1 className="text-3xl font-bold pb-3 text-[#F7BE15]">
            About Rtemis Limited
          </h1>
        </div>

        <div className="flex items-start justify-between gap-12 flex-wrap md:flex-nowrap">
          {/* Left side */}
          <div>
            <h1 className="font-bold text-xl py-4">
              Introduction to Rtemis Limited:
            </h1>
            <div className="text-lg">
              <p className="pb-4 text-justify">
                Rtemis Limited is a dynamic, multi-project based company
                dedicated to transforming innovative ideas into thriving
                ventures and building successful new businesses. With a core
                focus on innovation, collaboration, and growth, Rtemis creates a
                fertile ground for groundbreaking concepts to flourish.
              </p>
              <p className="pb-4 text-justify">
                Our approach is centered on providing the strategic framework
                and essential resources necessary to nurture these ideas. A
                combination of expert guidance, comprehensive support, and a
                collaborative spirit, we turn concepts into market-leading
                businesses that drive progress and set new standards in their
                respective industries.
              </p>
              <p className="pb-4 text-justify">
                At Rtemis, we believe the key to success lies in constant
                evolution and adaptability. By fostering a culture of continuous
                improvement and forward-thinking, we ensure that every project
                we undertake is positioned for sustainable growth and long-term
                success.
              </p>
              <p className="pb-4 text-justify">
                Join us at Rtemis Limited, where visionary ideas meet strategic
                execution to create the future of business.
              </p>
            </div>
          </div>

          {/* Right side with animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src={img}
              alt="CEO"
              className="h-[400px] w-full border rounded-lg border-yellow-400 shadow-xl  object-cover"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            <div>
              <h1 className="font-bold text-xl pt-2">About CEO</h1>
              <p className="text-lg">
                Sumona Sharmin is a pioneering entrepreneur from North Bengal,
                Bangladesh, known for her dedication to youth development and
                women's empowerment. As the Founder and CEO of Rtemis Limited,
                she runs multiple ventures that provide young individuals &
                women with opportunities to develop and enhance their skills and
                contribute to social progress...{" "}
                <span>
                  <Link
                    to={"/about"}
                    className=" text-sm text-yellow-600"
                    onClick={handleScrollToTop}
                  >
                    {" "}
                    Continue reading
                  </Link>
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutRtemis;
