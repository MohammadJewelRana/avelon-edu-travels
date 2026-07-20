// UpcomingPackages.jsx
import { motion } from "framer-motion";
import { FaClock, FaWhatsapp } from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const upcomingPackages = [
  {
    id: 1,
    country: "Thailand",
    city: "Bangkok • Phuket",
    flag: "🇹🇭",
    title: "Thailand Explorer",
    status: "Upcoming",
    date: "Coming Soon",
    price: "TBA",
    short:
      "Bangkok temples, Phuket beaches, street food, and vibrant nightlife.",
    bg: "from-red-500 to-orange-400",
  },
  {
    id: 2,
    country: "China",
    city: "Beijing • Shanghai",
    flag: "🇨🇳",
    title: "China Discovery",
    status: "Upcoming",
    date: "Coming Soon",
    price: "TBA",
    short: "Great history, modern skylines, culture, and iconic attractions.",
    bg: "from-sky-500 to-blue-500",
  },
  {
    id: 3,
    country: "Malaysia",
    city: "Kuala Lumpur • Langkawi",
    flag: "🇲🇾",
    title: "Malaysia Highlights",
    status: "Upcoming",
    date: "Coming Soon",
    price: "TBA",
    short: "City towers, tropical islands, shopping, and family travel.",
    bg: "from-green-500 to-emerald-500",
  },
];

const UpcomingPackages = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
<SectionHeader
  badge="Upcoming Packages"
  title="Most Visited Travel Destinations"
  description="Exciting travel packages are coming soon. Contact us today to receive the latest updates and pre-booking support."
/>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {upcomingPackages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,23,42,.06)]"
            >
              <div className={`h-2 bg-gradient-to-r ${item.bg}`} />

              <div className="p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-4xl">{item.flag}</div>
                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{item.city}</p>
                  </div>

                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {item.status}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {item.short}
                </p>

                <div className="mt-6 flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <FaClock className="text-red-500" />
                  {item.date}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Price
                    </p>
                    <p className="mt-1 text-2xl font-black text-slate-900">
                      {item.price}
                    </p>
                  </div>

                  <a
                    href="https://wa.me/8801712345678"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
                  >
                    <FaWhatsapp />
                    Notify Me
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingPackages;
