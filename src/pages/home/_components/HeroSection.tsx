 export const heroFeatures = [
  "Student Visa Assistance",
  "University Admission",
  "Work Permit",
  "Holiday Tour Packages",
];

export const heroStats = [
  {
    value: "5000+",
    title: "Happy Students",
  },
  {
    value: "30+",
    title: "Destinations",
  },
  {
    value: "98%",
    title: "Visa Success",
  },
];

export const heroCards = [
  {
    title: "30+ Countries",
    subtitle: "Study & Travel",
  },
  {
    title: "98% Success",
    subtitle: "Visa Approval",
  },
  {
    title: "24/7",
    subtitle: "Support",
  },
];


 

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,.08),transparent_25%)]" />

      <div className="relative">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid min-h-[92vh] items-center gap-14 py-20 lg:grid-cols-2">

            <HeroContent />

            <HeroImage />

          </div>

        </div>

        <HeroStats />

      </div>

    </section>
  );
};

export default Hero;






import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {
  HiCheckBadge,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

 

const HeroContent = () => {
  return (
    <div className="order-2 lg:order-1">

      {/* Trust Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 backdrop-blur-xl">

        <HiCheckBadge className="text-lg text-yellow-400" />

        <span className="text-sm font-medium tracking-wide text-yellow-300">
          Trusted Education & Travel Consultancy
        </span>

      </div>

      {/* Heading */}

      <h1 className="mt-7 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">

        Study Beyond

        <span className="block bg-gradient-to-r from-red-500 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">

          Borders.

        </span>

        <span className="block">

          Build Your Global Future.

        </span>

      </h1>

      {/* Description */}

      <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">

        Whether you're planning to study abroad,
        travel internationally, or explore global career
        opportunities, Avelon Edu & Travel provides
        professional guidance from consultation to
        successful visa approval.

      </p>

      {/* Feature List */}

      <div className="mt-8 grid gap-4 sm:grid-cols-2">

        {heroFeatures.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600/15">

              <HiOutlineCheckCircle className="text-xl text-red-500" />

            </div>

            <span className="text-zinc-300">

              {item}

            </span>

          </div>

        ))}

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
        >

          Apply Now

          <FaArrowRight />

        </Link>

        <Link
          to="/countries"
          className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400"
        >

          Explore Countries

        </Link>

      </div>

      {/* Trust Info */}

      <div className="mt-10 flex flex-wrap items-center gap-6">

        <div>

          <h3 className="text-3xl font-black text-yellow-400">

            5000+

          </h3>

          <p className="text-sm text-zinc-500">

            Students Guided

          </p>

        </div>

        <div className="h-12 w-px bg-zinc-800" />

        <div>

          <h3 className="text-3xl font-black text-yellow-400">

            30+

          </h3>

          <p className="text-sm text-zinc-500">

            Study Destinations

          </p>

        </div>

        <div className="h-12 w-px bg-zinc-800" />

        <div>

          <h3 className="text-3xl font-black text-yellow-400">

            98%

          </h3>

          <p className="text-sm text-zinc-500">

            Visa Success

          </p>

        </div>

      </div>

    </div>
  );
};

 


import heroImage from "../../../assets/hero/avelon.jpg";

import {
  FaGlobeAsia,
  FaPlaneDeparture,
  FaPassport,
} from "react-icons/fa";

const HeroImage = () => {
  return (
    <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">

      <div className="relative w-full max-w-[580px]">

        {/* Glow */}
        <div className="absolute inset-0 scale-90 rounded-full bg-gradient-to-r from-red-600/25 via-yellow-400/10 to-red-600/20 blur-3xl" />

        {/* Image */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-zinc-900 p-3 shadow-[0_40px_100px_rgba(0,0,0,.6)]">

          <img
            src={heroImage}
            alt="Avelon Edu & Travel"
            className="h-[420px] w-full rounded-[24px] object-cover sm:h-[520px] lg:h-[620px]"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-3 rounded-[24px] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Bottom Caption */}
          <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">

            <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
              Avelon Edu & Travel
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Making Your Global Dream Possible
            </h3>

            <p className="mt-2 text-sm text-zinc-300">
              Study • Travel • Work Abroad
            </p>

          </div>

        </div>

        {/* Card 1 */}
        <div className="absolute -left-8 top-10 hidden rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl lg:block">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/20">

              <FaGlobeAsia className="text-2xl text-red-500" />

            </div>

            <div>

              <h4 className="font-bold text-white">
                30+ Countries
              </h4>

              <p className="text-sm text-zinc-400">
                Study & Travel
              </p>

            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="absolute -right-6 top-28 hidden rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl lg:block">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/20">

              <FaPlaneDeparture className="text-2xl text-yellow-400" />

            </div>

            <div>

              <h4 className="font-bold text-white">
                Premium Tours
              </h4>

              <p className="text-sm text-zinc-400">
                Worldwide Packages
              </p>

            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="absolute bottom-8 left-8 hidden rounded-3xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl lg:block">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">

              <FaPassport className="text-2xl text-white" />

            </div>

            <div>

              <h4 className="font-bold text-white">
                Fast Visa
              </h4>

              <p className="text-sm text-zinc-400">
                Professional Support
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

 

 

const HeroStats = () => {
  return (
    <section className="relative border-t border-white/10 bg-gradient-to-b from-[#090909] to-black">

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="inline-block rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-medium text-yellow-400">

            Trusted By Thousands

          </span>

          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">

            Your Success Is Our Achievement

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">

            We have proudly helped thousands of students and travelers
            achieve their dreams through reliable consultancy and
            professional guidance.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              number: "5000+",
              title: "Students Assisted",
            },
            {
              number: "30+",
              title: "Countries",
            },
            {
              number: "98%",
              title: "Visa Success",
            },
            {
              number: "24/7",
              title: "Customer Support",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/50"
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-red-600/20 blur-3xl" />

                <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-yellow-400/20 blur-3xl" />

              </div>

              <div className="relative">

                <h2 className="text-5xl font-black text-yellow-400">

                  {item.number}

                </h2>

                <div className="my-5 h-px bg-gradient-to-r from-red-500 to-yellow-400" />

                <p className="text-lg font-semibold text-white">

                  {item.title}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

 