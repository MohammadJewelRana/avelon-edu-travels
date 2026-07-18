// TourSupportStrip.jsx
import { motion } from "framer-motion";
import { FaFileAlt, FaUniversity, FaWhatsapp } from "react-icons/fa";

const TourSupportStrip = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,.06)]"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
                Travel Support
              </span>
              <h3 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
                We Support Documentation and Bank Statement Guidance
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Our team helps you with required documentation, bank statement
                preparation, and travel file support so your application feels
                easier and more organized.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Document Checklist",
                  "Bank Statement Support",
                  "Visa File Preparation",
                  "Travel Guidance",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: FaFileAlt, title: "Documents", desc: "Complete file support" },
                { icon: FaUniversity, title: "Bank Statement", desc: "Guidance for travel proof" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] bg-slate-50 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                      <Icon />
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourSupportStrip;