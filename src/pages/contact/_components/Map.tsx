import { motion } from "framer-motion";
import {   FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeader from "../../../shared/SectionHeader";

const Map = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] py-12 sm:py-12">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(234,179,8,0.14),transparent_35%)]" />

      <div className="relative customWidth px-4">
        {/* Heading */}
  <SectionHeader
  badge="Find Our Office"
  title="Visit Our Office Location"
  description="We'd love to meet you in person. Visit our office for expert guidance on study abroad, visa services, and international travel."
/>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[34px] border border-gray-200 bg-white p-4 shadow-[0_30px_80px_rgba(17,17,17,.08)]"
        >
          <iframe
            title="Avelon Edu & Travels"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[550px] w-full rounded-[26px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.055051583314!2d90.39203137410018!3d23.745416188970104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b90025432985%3A0x25f5e1a97a593bcc!2sAvelon%20Edu%20%26%20Travels!5e0!3m2!1sen!2sbd!4v1784185757465!5m2!1sen!2sbd"
          />
        </motion.div>

        {/* Bottom Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-8 rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,.06)]"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold text-[#111111]">
                Avelon Edu & Travels
              </h3>

              <p className="mt-4 max-w-2xl text-gray-600 leading-8">
                Our office is always open to welcome students, travelers, and
                anyone looking for professional guidance. Schedule a visit and
                let's discuss your study abroad or travel plans together.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Avelon+Edu+%26+Travels"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(220,38,38,.25)]"
            >
              Open in Google Maps
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;