import { motion } from "framer-motion";
import {
  FaSearch,
  FaFileAlt,
  FaPlaneDeparture,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: FaSearch,
    title: "Free Consultation",
    desc: "Tell us about your study abroad or travel goals. Our experts understand your requirements and recommend the best destination and plan.",
  },
  {
    id: "02",
    icon: FaFileAlt,
    title: "Planning & Documentation",
    desc: "We prepare admission, visa, passport and travel documents while ensuring every requirement is completed accurately.",
  },
  {
    id: "03",
    icon: FaPlaneDeparture,
    title: "Application & Processing",
    desc: "From university applications and visa submission to tour arrangements, we manage every step with complete transparency.",
  },
  {
    id: "04",
    icon: FaCheckCircle,
    title: "Ready To Fly",
    desc: "Receive your approval, travel confidently, and enjoy continuous support before and after your journey begins.",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-red-500/20 blur-[140px]" />
      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-yellow-300 sm:text-xs">
              HOW WE WORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black leading-[1.05] text-white"
            style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)" }}
          >
            Your Journey,
            <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Perfectly Planned
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-slate-300 leading-8"
          >
            Whether you're planning to study abroad or explore the world, our
            streamlined process ensures every step is simple, transparent, and
            professionally managed.
          </motion.p>
        </div>

        {/* Animated Timeline */}
        <div className="relative mt-20 hidden xl:block">
          <div className="absolute left-0 right-0 top-9 h-[2px] bg-white/10 rounded-full" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute left-0 top-9 h-[2px] rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-500"
          />
        </div>
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 opacity-0 transition duration-500 group-hover:opacity-100" />
        {/* Cards */}
        <div className="relative mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-[32px]
border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.03]
p-7 backdrop-blur-2xl transition-all duration-500
hover:-translate-y-4 hover:border-yellow-400/40
hover:shadow-[0_30px_80px_rgba(250,204,21,.18)]
${index % 2 !== 0 ? "xl:translate-y-12 hover:xl:translate-y-8" : ""}`}
              >
                {/* glow */}
                <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-yellow-400/10 blur-[90px] transition-all duration-700 group-hover:bg-yellow-400/20 group-hover:scale-125" />

                <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-red-500/10 blur-[80px] opacity-0 transition duration-700 group-hover:opacity-100" />

                {/* Number */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 text-white shadow-[0_15px_40px_rgba(239,68,68,.35)] transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={24} />
                  </div>

                  <span className="mt-2 text-[1.55rem] font-extrabold leading-tight text-white transition duration-300 group-hover:text-yellow-300">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white transition duration-300 group-hover:text-yellow-300">
                  {step.title}
                </h3>

                <p className="mt-5 flex-grow text-[15px] leading-8 text-slate-300">
                  {step.desc}
                </p>

                <div className="mt-8 flex items-center justify-center border-t border-white/10 pt-6">
                  <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-300">
                    Step {step.id}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
