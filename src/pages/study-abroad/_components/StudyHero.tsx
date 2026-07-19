import { motion } from "framer-motion";
 

const StudyHero = () => {
  return (
    <section className="relative flex max-h-[65vh] items-center overflow-hidden bg-black pt-28 pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-red-500/20 blur-[150px]" />
      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-400/15 blur-[170px]" />

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-16 top-40 hidden h-44 w-44 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl lg:block"
      />

      <div className="relative mx-auto flex w-full max-w-4xl items-center justify-center px-5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="text-[16px] font-semibold uppercase tracking-[0.35em] text-yellow-300">
           Study Abroad
            </span>
          </motion.div>

         

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {[
              "Study Abroad",
              "Student Visa",
              "Tour Packages",
              "Air Tickets",
              "Travel Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-5 md:grid-cols-4"
          >
            {[
              { value: "1000+", label: "Happy Clients" },
              { value: "25+", label: "Destinations" },
              { value: "24/7", label: "Support" },
              { value: "100%", label: "Guidance" },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-3xl font-black text-white">{item.value}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudyHero;
