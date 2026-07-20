// HomeContact.jsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const HomeContact = () => {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(""), 1200);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const whatsappNumber = "8801977005581";
  const contactEmail = "info@avelonbd.com";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to get more information about your services.",
  );

  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(17,17,17,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact Us"
          title="Let's Start Your Global Journey"
          description="Reach out for study abroad, visa processing, travel packages, or any guidance you need."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[28px] bg-white p-5 shadow-xl sm:rounded-[35px] sm:p-8 lg:p-10"
        >
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-red-600/10 blur-3xl sm:h-40 sm:w-40" />

          <div className="relative">
            {/* Header + WhatsApp top button */}
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-gray-600 sm:text-xs">
                  Direct Contact
                </span>
                <h3 className="mt-4 text-2xl font-bold text-[#111111] sm:text-3xl">
                  Get in touch now
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                  Choose the fastest way to reach us. Tap to call, email, or
                  start a WhatsApp chat instantly.
                </p>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>

            {/* Contact cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Call Now */}
              <a
                href="tel:+8801977005581"
                className="group flex flex-col items-center text-center rounded-3xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg sm:flex-row sm:text-left"
              >
                <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20 sm:mb-0 sm:h-14 sm:w-14 ">
                  <FaPhoneAlt className="text-base sm:text-lg " />
                </div>

                <div className="min-w-0 md:pl-4">
                  <p className="text-xs font-medium uppercase tracking-[2px] text-red-600 sm:text-sm">
                    Call Now
                  </p>
                  <h4 className="mt-1 text-sm font-semibold text-[#111111] sm:text-base">
                    +880 1977005581
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Direct phone support
                  </p>
                </div>
              </a>

              {/* Email */}
              <div className="group flex flex-col items-center text-center rounded-3xl border border-gray-200 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg md:flex-row md:text-left">
                {/* Icon */}
                <div className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/20 md:mb-0 md:h-14 md:w-14">
                  <FaEnvelope className="text-base md:text-lg" />
                </div>

                {/* Text */}
                <div className="min-w-0 md:px-4">
                  <p className="text-xs font-medium uppercase tracking-[2px] text-red-600 sm:text-sm">
                    Email Address
                  </p>
                  <h4 className="mt-1 truncate text-sm font-semibold text-[#111111] sm:text-base">
                    {contactEmail}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Copy to clipboard
                  </p>
                </div>

                {/* Copy button: hidden on small, visible from md, aligned to right */}
                <button
                  type="button"
                  onClick={() => copyToClipboard(contactEmail)}
                  className="mt-3 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition hover:border-red-300 hover:text-red-600 md:mt-0 md:ml-auto md:flex md:h-11 md:w-11"
                  aria-label="Copy email"
                >
                  {copiedText === contactEmail ? <FaCheck /> : <FaCopy />}
                </button>
              </div>

              {/* Contact Numbers */}
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:col-span-2">
                <div className="mb-5">
                  <h4 className="text-xl font-bold text-[#111111]">
                    Contact Numbers
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Reach our travel consultants directly.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "+8801977005581",
                    "+8801977005582",
                    "+8801977005583",
                    "+8801945440404",
                  ].map((number) => (
                    <a
                      key={number}
                      href={`tel:${number.replace(/\+/g, "")}`}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20">
                        <FaPhoneAlt />
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-[2px] text-red-600">
                          Hotline
                        </p>

                        <h5 className="mt-1 font-semibold text-[#111111]">
                          {number}
                        </h5>
                      </div>

                      <div className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                        Call
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Address */}
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:h-14 sm:w-14">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111]">
                      Office Address
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                      Happy Rahman Plaza, Banglamotor, Dhaka
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 sm:h-14 sm:w-14">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111]">
                      Office Hours
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                      Sat - Thu : 10 AM - 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom WhatsApp CTA */}
            <div className="mt-6">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-600 sm:text-base"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeContact;
