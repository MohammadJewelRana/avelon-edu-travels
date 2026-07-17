import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

const contacts = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    value: "+880 1XXX-XXXXXX",
    desc: "Sat - Thu | 10:00 AM - 7:00 PM",
    color: "from-red-500 to-orange-400",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "info@avelon.com",
    desc: "We'll reply within 24 hours",
    color: "from-yellow-500 to-amber-400",
    href: "mailto:info@avelon.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Office",
    value: "Mirpur, Dhaka",
    desc: "Open in Google Maps",
    color: "from-blue-500 to-cyan-500",
    href: "#",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "Chat With Us",
    desc: "Fast & instant response",
    color: "from-green-500 to-emerald-500",
    href: "https://wa.me/8801XXXXXXXXX",
  },
];

const ContactInfoCards = () => {
  return (
    <section className="bg-slate-50 py-20 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(15,23,42,.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-yellow-400/10 blur-3xl transition duration-300 group-hover:bg-yellow-400/15" />

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg transition duration-300 group-hover:scale-105`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-7 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg font-semibold text-slate-800">
                  {item.value}
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-sm font-medium text-slate-600">
                    Contact Now
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition duration-300 group-hover:border-red-300 group-hover:bg-red-50">
                    <FaArrowRight className="text-red-500 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;