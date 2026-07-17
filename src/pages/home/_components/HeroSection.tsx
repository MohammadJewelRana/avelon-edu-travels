import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaPlay,
  FaGraduationCap,
  FaGlobeAmericas,
  FaPassport,
  FaPlaneDeparture,
  FaCheckCircle,
} from "react-icons/fa";

const Hero = () => {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 800], [0, 120]);
  const contentY = useTransform(scrollY, [0, 800], [0, 50]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Study Abroad Travel"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/80" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-500/20 blur-[120px] sm:h-96 sm:w-96 sm:blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-[120px] sm:h-[420px] sm:w-[420px] sm:blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[110px] sm:h-72 sm:w-72 sm:blur-[150px]" />

      <motion.div
        style={{ y: contentY }}
        className="relative z-20 flex min-h-screen items-center"
      >
        <div className="mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-10 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-white/10 px-4 py-2 backdrop-blur-xl sm:mb-8 sm:px-5"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-yellow-300 sm:text-xs sm:tracking-[0.35em]">
              Global Education • Visa • Travel
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className=" font-black leading-[1.1] text-white text-xl md:text-3xl lg:text-5xl "
          >
            Explore The
        
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              World,
            </span>
            <br />
            Shape Your
            <br />
            Future.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8"
          >
            Begin your international journey with confidence. From university
            admissions and student visas to unforgettable travel experiences,
            Avelon provides trusted guidance every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5"
          >
            <button className="group flex w-full items-center justify-center gap-4 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              Start Your Journey
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-red-600 transition duration-300 group-hover:translate-x-1 sm:h-11 sm:w-11">
                <FaArrowRight />
              </span>
            </button>

            <button className="group flex w-full items-center justify-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-900 sm:w-auto sm:px-8 sm:py-4 sm:text-base">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black sm:h-11 sm:w-11">
                <FaPlay size={12} />
              </span>
              Book Free Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4 sm:mt-16 sm:gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
                1000+
              </h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Successful Students
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
                30+
              </h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Global Destinations
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-400 sm:text-4xl">
                98%
              </h3>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Visa Success Rate
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black via-black/60 to-transparent sm:h-40" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 10, 0],
        }}
        transition={{
          opacity: {
            delay: 1.1,
            duration: 0.6,
          },
          y: {
            repeat: Infinity,
            duration: 2.2,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300 sm:text-xs sm:tracking-[0.35em]">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md sm:h-16">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="mt-2 h-3 w-3 rounded-full bg-yellow-400"
          />
        </div>
      </motion.div>

      <div className="absolute left-10 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent xl:block" />
      <div className="absolute right-10 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent xl:block" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </section>
  );
};

export default Hero;