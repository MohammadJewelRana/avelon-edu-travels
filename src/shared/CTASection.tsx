import { FaWhatsapp } from "react-icons/fa";

const CTASection = ({
  badge,
  title,
  description,
  buttonText,

  footerText,
}: any) => {
  return (
    <section className="mt-16">
      <div className="rounded-[32px] bg-slate-900 px-8 py-8 text-white shadow-[0_20px_60px_rgba(15,23,42,.18)] sm:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
              {badge}
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-4xl">{title}</h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <a
              href="https://wa.me/8801977005581"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
            >
              <FaWhatsapp className="text-lg" />
              {buttonText}
            </a>
            {footerText && (
              <p className="text-sm text-slate-300">{footerText}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
