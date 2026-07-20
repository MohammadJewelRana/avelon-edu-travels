import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaFileAlt,
  FaUniversity,
  FaPassport,
  FaTag,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const countryPackages = [
  {
    id: 1,
    country: "Thailand",
    city: "Bangkok • Phuket",
    flag: "🇹🇭",
    title: "Thailand Explorer",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$30",
    oldPrice: "$699",
    price: "$549",
    discount: "Save $150",
    description: "Bangkok temples, Phuket beaches, and tropical travel fun.",
  },
  {
    id: 2,
    country: "China",
    city: "Beijing • Shanghai",
    flag: "🇨🇳",
    title: "China Discovery",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$35",
    oldPrice: "$799",
    price: "$649",
    discount: "Save $150",
    description: "History, modern cities, and iconic landmarks.",
  },
  {
    id: 3,
    country: "Malaysia",
    city: "Kuala Lumpur • Langkawi",
    flag: "🇲🇾",
    title: "Malaysia Highlights",
    image:
      "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$25",
    oldPrice: "$649",
    price: "$499",
    discount: "Save $150",
    description: "City towers, islands, and easy family travel.",
  },
  {
    id: 4,
    country: "Singapore",
    city: "Singapore City",
    flag: "🇸🇬",
    title: "Singapore City Break",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$40",
    oldPrice: "$749",
    price: "$599",
    discount: "Save $150",
    description: "Modern attractions and premium shopping.",
  },
  {
    id: 5,
    country: "Japan",
    city: "Tokyo • Osaka",
    flag: "🇯🇵",
    title: "Japan Spring Escape",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$45",
    oldPrice: "$899",
    price: "$749",
    discount: "Save $150",
    description: "Cherry blossoms, city lights, and culture.",
  },
  {
    id: 6,
    country: "Vietnam",
    city: "Hanoi • Da Nang",
    flag: "🇻🇳",
    title: "Vietnam Adventure",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$20",
    oldPrice: "$599",
    price: "$449",
    discount: "Save $150",
    description: "Beaches, food, and scenic landscapes.",
  },
  {
    id: 7,
    country: "Indonesia",
    city: "Bali",
    flag: "🇮🇩",
    title: "Bali Paradise",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$15",
    oldPrice: "$699",
    price: "$549",
    discount: "Save $150",
    description: "Temples, beaches, and island beauty.",
  },
  {
    id: 8,
    country: "UAE",
    city: "Dubai",
    flag: "🇦🇪",
    title: "Dubai Luxury Escape",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$55",
    oldPrice: "$899",
    price: "$749",
    discount: "Save $150",
    description: "Desert safari, skyline views, and shopping.",
  },
  {
    id: 9,
    country: "Turkey",
    city: "Istanbul • Cappadocia",
    flag: "🇹🇷",
    title: "Turkey Experience",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$50",
    oldPrice: "$999",
    price: "$849",
    discount: "Save $150",
    description: "History, balloons, and unique landscapes.",
  },
  {
    id: 10,
    country: "South Korea",
    city: "Seoul • Busan",
    flag: "🇰🇷",
    title: "Korea Discovery",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$45",
    oldPrice: "$799",
    price: "$649",
    discount: "Save $150",
    description: "Modern cities, food, and shopping.",
  },
  {
    id: 11,
    country: "Maldives",
    city: "Male",
    flag: "🇲🇻",
    title: "Maldives Escape",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    visaFee: "On Arrival",
    oldPrice: "$1199",
    price: "$999",
    discount: "Save $200",
    description: "Overwater villas and luxury relaxation.",
  },
  {
    id: 12,
    country: "Sri Lanka",
    city: "Colombo • Kandy",
    flag: "🇱🇰",
    title: "Sri Lanka Journey",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$25",
    oldPrice: "$649",
    price: "$499",
    discount: "Save $150",
    description: "Temples, tea hills, and beaches.",
  },
  {
    id: 13,
    country: "Nepal",
    city: "Kathmandu • Pokhara",
    flag: "🇳🇵",
    title: "Nepal Adventure",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$30",
    oldPrice: "$599",
    price: "$449",
    discount: "Save $150",
    description: "Mountains, lakes, and adventure.",
  },
  {
    id: 14,
    country: "Philippines",
    city: "Manila • Cebu",
    flag: "🇵🇭",
    title: "Philippines Tour",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$35",
    oldPrice: "$699",
    price: "$549",
    discount: "Save $150",
    description: "Island hopping and beach life.",
  },
  {
    id: 15,
    country: "Cambodia",
    city: "Siem Reap",
    flag: "🇰🇭",
    title: "Cambodia Heritage",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$20",
    oldPrice: "$549",
    price: "$399",
    discount: "Save $150",
    description: "Ancient temples and local culture.",
  },
  {
    id: 16,
    country: "Laos",
    city: "Luang Prabang",
    flag: "🇱🇦",
    title: "Laos Discovery",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$20",
    oldPrice: "$499",
    price: "$349",
    discount: "Save $150",
    description: "Peaceful rivers and temples.",
  },
  {
    id: 17,
    country: "India",
    city: "Delhi • Agra",
    flag: "🇮🇳",
    title: "India Heritage Tour",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$35",
    oldPrice: "$599",
    price: "$449",
    discount: "Save $150",
    description: "Landmarks, food, and culture.",
  },
  {
    id: 18,
    country: "Qatar",
    city: "Doha",
    flag: "🇶🇦",
    title: "Doha City Break",
    image:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$50",
    oldPrice: "$799",
    price: "$649",
    discount: "Save $150",
    description: "Modern city vibes and luxury travel.",
  },
  {
    id: 19,
    country: "Saudi Arabia",
    city: "Riyadh • Jeddah",
    flag: "🇸🇦",
    title: "Saudi Discovery",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$60",
    oldPrice: "$899",
    price: "$749",
    discount: "Save $150",
    description: "Modern landmarks and culture.",
  },
  {
    id: 20,
    country: "France",
    city: "Paris",
    flag: "🇫🇷",
    title: "Paris Dream Trip",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    visaFee: "$70",
    oldPrice: "$1299",
    price: "$1099",
    discount: "Save $200",
    description: "Romance, cafés, and iconic sights.",
  },
];

const visibleCount = 8;

const CountryTourCards = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePackages = useMemo(
    () => (showAll ? countryPackages : countryPackages.slice(0, visibleCount)),
    [showAll],
  );

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
 
<SectionHeader
  badge="Country Tours"
  title="Explore Popular Destinations"
  description="Discover breathtaking destinations with carefully planned tour packages, unforgettable experiences, and expert travel support."
/>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visiblePackages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,.08)] transition-all duration-500 hover:border-red-200 hover:shadow-[0_28px_70px_rgba(220,38,38,.15)]"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-slate-800 backdrop-blur">
                    <span className="text-lg">{item.flag}</span>
                    {item.country}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/80">{item.city}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex h-[300px] flex-col p-6">
                  <p className="line-clamp-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {/* Service Badges */}
                  <div className=" flex flex-wrap gap-2">
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      📄 Documentation
                    </span>

                    <span className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      🏦 Bank Support
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-3 rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-orange-50 p-4 mb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[2px] text-red-600">
                          Visa Fee
                        </p>

                        <div className="mt-1 flex items-end gap-2">
                          <span className="text-2xl font-black text-[#111111]">
                            $30
                          </span>

                          <span className="mb-1 text-base font-medium text-gray-400 line-through">
                            $45
                          </span>
                        </div>
                      </div>

                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                        Save 33%
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <a
                    href="https://wa.me/8801712345678"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1EBE5D] hover:shadow-[0_18px_40px_rgba(37,211,102,.35)] "
                  >
                    <FaWhatsapp className="text-xl" />
                    Get Visa Consultation
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {countryPackages.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 transition hover:border-red-500 hover:text-red-600"
            >
              {showAll ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryTourCards;
