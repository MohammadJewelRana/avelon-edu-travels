import {
  FaFileAlt,
  FaUniversity,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";
import SectionHeader from "../../../shared/SectionHeader";

const supportItems = [
  {
    icon: FaFileAlt,
    title: "Complete Documentation Support",
    color: "red",
    features: [
      "Visa Application Form",
      "Travel Itinerary",
      "Hotel Booking Assistance",
      "Flight Reservation",
      "Travel Insurance",
      "Document Verification",
    ],
  },
  {
    icon: FaUniversity,
    title: "Bank & Financial Support",
    color: "emerald",
    features: [
      "Bank Statement Guidance",
      "Sponsor Documentation",
      "Financial Review",
      "Fund Verification",
      "Supporting Documents",
      "Application Readiness",
    ],
  },
];

export default function TravelSupportSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          badge="Travel Assistance"
          title="Complete Documentation & Bank Support"
          description="From visa documentation and financial guidance to application review and travel preparation, our experienced team provides end-to-end support to ensure a smooth and hassle-free journey."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {supportItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-[0_30px_70px_rgba(220,38,38,.12)]"
              >
                {/* Decorative Background */}
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125 ${
                    item.color === "red" ? "bg-red-100" : "bg-emerald-100"
                  }`}
                />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ${
                      item.color === "red"
                        ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-red-300"
                        : "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-emerald-300"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.color === "red"
                        ? "bg-red-50 text-red-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    Included
                  </span>
                </div>

                {/* Title */}
                <div className="relative z-10 mt-7">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Our specialists carefully prepare and review every
                    requirement to maximize your application success.
                  </p>
                </div>

                {/* Features */}
                <div className="relative z-10 mt-8 space-y-4">
                  {item.features.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 transition-all duration-300 hover:border-red-100 hover:bg-white"
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                          item.color === "red"
                            ? "bg-red-100 text-red-600"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <span className="flex-1 font-medium text-slate-700">
                        {feature}
                      </span>

                      <FaCheckCircle
                        className={`${
                          item.color === "red"
                            ? "text-red-500"
                            : "text-emerald-500"
                        }`}
                      />
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Need Assistance?
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Talk to Our Experts
                    </p>
                  </div>

                  <a
                    href="https://wa.me/8801977005581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-300"
                  >
                    <FaWhatsapp size={22} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
