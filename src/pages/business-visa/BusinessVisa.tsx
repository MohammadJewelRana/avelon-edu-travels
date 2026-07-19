import React from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaPassport } from "react-icons/fa";

const BusinessVisa = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-5 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,.08)] sm:p-10"
        >
          <div className="absolute left-1/2 top-0 h-1 w-32 -translate-x-1/2 rounded-b-full bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
            <FaPassport size={34} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">
            No Business Visa Available
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            We don’t have any business visa options available right now. Please
            check back later or explore our other visa and travel services.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
            <FaRegClock />
            Updated regularly
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              View Other Visas
            </button>

            <button className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessVisa;