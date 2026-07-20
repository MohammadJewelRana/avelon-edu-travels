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

  // gentler parallax for smoother mobile
  const backgroundY = useTransform(scrollY, [0, 800], [0, 120]);
  const contentY = useTransform(scrollY, [0, 800], [0, 50]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2000&auto=format&fit=crop"
          alt="Study Abroad Travel"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay + gradient */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/80" />

      {/* Decorative blurs (smaller on mobile) */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-red-500/20 blur-[110px] sm:h-96 sm:w-96 sm:blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-[110px] sm:h-[420px] sm:w-[420px] sm:blur-[150px]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[100px] sm:h-72 sm:w-72 sm:blur-[150px]" />

      {/* Subtle floating icons only on large screens to reduce work on mobile */}
      <motion.div
        animate={{ y: [-16, 16, -16] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute left-12 top-28 hidden xl:flex"
      >
        <div className="rounded-full border border-white/8 bg-white/6 p-4 backdrop-blur-xl">
          <FaPlaneDeparture className="text-yellow-300" size={22} />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [14, -14, 14] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute right-20 top-24 hidden xl:flex"
      >
        <div className="rounded-full border border-white/8 bg-white/6 p-4 backdrop-blur-xl">
          <FaPassport className="text-red-300" size={22} />
        </div>
      </motion.div>

      {/* Main centered content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 flex min-h-screen items-center lg:-mt-12 md:py-12"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 py-12 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-white/6 px-4 py-2 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-[10px] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.3em] text-yellow-300">
              Global Education • Visa • Travel
            </span>
          </motion.div>

          {/* Heading - smooth scaling using clamp */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7 }}
            className="font-black leading-[1.05] text-white  "
            style={{ fontSize: "clamp(2.2rem, 7vw, 3.5rem)" }}
          >
            Explore The
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent pl-2">
              World,
            </span>
            <br />
            Shape Your
            <br />
            Future.
          </motion.h1>

          {/* Description - smoother scale */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl leading-relaxed text-slate-300"
            style={{ fontSize: "clamp(0.95rem, 2vw, 1.12rem)" }}
          >
            Begin your international journey with confidence. From university
            admissions and student visas to unforgettable travel experiences,
            Avelon provides trusted guidance every step of the way.
          </motion.p>

          {/* Buttons - stacked on mobile, inline on larger screens */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/8801977005581"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-slate-900 sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black transition-transform duration-300 group-hover:scale-110">
                <FaPlay size={12} />
              </span>
              Book Free Consultation
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4 sm:gap-8"
          >
            <div>
              <h3
                className="font-bold text-yellow-400"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                1000+
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-slate-400">
                Successful Students
              </p>
            </div>

            <div>
              <h3
                className="font-bold text-yellow-400"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                30+
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-slate-400">
                Global Destinations
              </p>
            </div>

            <div>
              <h3
                className="font-bold text-yellow-400"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
              >
                98%
              </h3>
              <p className="mt-2 text-[11px] sm:text-sm text-slate-400">
                Visa Success Rate
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black via-black/60 to-transparent sm:h-40" />

      {/* Scroll indicator (gentler) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.0, duration: 0.6 },
          y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
        }}
        className="absolute bottom-24 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center hidden md:hidden lg:block"
      >
        <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-300">
          Scroll
        </span>
        <div className="flex h-12 w-8 justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-2 h-3 w-3 rounded-full bg-yellow-400"
          />
        </div>
      </motion.div>

      {/* Optional thin decorative lines on large screens */}
      <div className="absolute left-10 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent xl:block" />
      <div className="absolute right-10 top-1/2 hidden h-40 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent xl:block" />

      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </section>
  );
};

export default Hero;
