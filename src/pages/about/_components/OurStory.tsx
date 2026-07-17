import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGlobeAsia,
  FaGraduationCap,
} from "react-icons/fa";

const storyImage =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80";

const OurStory = () => {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      title: "Expert Education Consultancy",
      description:
        "Helping students choose the right universities, programs, and career paths with personalized guidance.",
    },
    {
      icon: <FaGlobeAsia />,
      title: "Complete Travel Solutions",
      description:
        "From visa assistance to air tickets and tour packages, we make international travel simple and stress-free.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.14),transparent_35%)]" />

      <div className="relative customWidth px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -left-8 -top-8 h-52 w-52 rounded-full bg-red-500/15 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-56 w-56 rounded-full bg-yellow-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[34px] border border-white/60 bg-white p-3 shadow-[0_25px_70px_rgba(17,17,17,.08)]">
              <img
                src={storyImage}
                alt="Our Story"
                className="h-[620px] w-full rounded-[26px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 left-8 rounded-3xl border border-white/70 bg-white/95 px-8 py-6 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="text-4xl font-black bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent">
                1500+
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-600">
                Students & Travelers Guided
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-100 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-red-600">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-[#111111] lg:text-5xl">
              Turning Dreams Into
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Global Opportunities
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              At <strong>Avelon Edu & Travels</strong>, we believe every dream
              deserves the opportunity to grow beyond borders. Our journey began
              with a simple vision—to provide honest guidance, reliable support,
              and world-class services for students and travelers pursuing
              international opportunities.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether it's university admissions, visa processing, scholarships,
              air ticketing, or international tour planning, we stand beside our
              clients from the very first consultation until they successfully
              reach their destination.
            </p>

            {/* Highlights */}
            <div className="mt-10 space-y-5">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="group flex gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-yellow-500 text-xl text-white shadow-lg transition duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(220,38,38,.25)]"
              >
                Free Consultation
                <FaArrowRight />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-red-500 hover:text-red-600 hover:shadow-lg"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;