// src/components/home/Expertise.jsx

import { ArrowUpRight } from "lucide-react";

import architectureImage from "../assets/images/architecture-project.jpg";
import engineeringImage from "../assets/images/engineering-project.jpg";
import interiorImage from "../assets/images/interior-project.jpg";

const pillars = [
  {
    number: "01",
    title: "Architecture",
    statement: "Designing purposeful spaces.",
    image: architectureImage,
  },
  {
    number: "02",
    title: "Engineering",
    statement: "Technical solutions with precision.",
    image: engineeringImage,
  },
  {
    number: "03",
    title: "Interior",
    statement: "Functional spaces shaped around people.",
    image: interiorImage,
  },
];

function Expertise() {
  return (
    <section
      id="profession"
      className="overflow-hidden bg-[#Ffff] px-6 py-10 text-[#2C0901] md:px-0 md:py-20 lg:px-16 lg:py-26"
    >
      <div className="mx-auto max-w-[1450px]">

        {/* Header */}
        <div className="mb-12 text-center md:mb-14">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C09A70]" />

            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#89643D]">
              Our Profession
            </p>

            <span className="h-px w-10 bg-[#C09A70]" />
          </div>

          <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Expertise across
            <br />
            <span className="text-[#89643D]">
              disciplines.
            </span>
          </h2>
        </div>

        {/* Three Pillars */}
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="
                group
                relative
                min-h-[300px]
                overflow-hidden
                rounded-[24px]
                border
                border-[#2C0901]/15
                bg-[#2C0901]
                p-6
                text-[#F8F5EF]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-[#D1B18D]
                hover:shadow-[0_25px_60px_rgba(44,9,1,0.22)]
                md:min-h-[330px]
                md:p-7
              "
            >

              {/* Background Image */}
              <img
                src={pillar.image}
                alt={pillar.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Light Image Overlay */}
              <div className="absolute inset-0 bg-[#2C0901]/10" />

              {/* Bottom Gradient For Text */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[70%]
                  bg-gradient-to-t
                  from-[#2C0901]/95
                  via-[#2C0901]/55
                  to-transparent
                "
              />

              {/* Top */}
              <div className="relative z-10 flex items-start justify-end">


                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D1B18D]/50
                    text-[#D1B18D]
                    transition-all
                    duration-500
                    group-hover:border-[#D1B18D]
                    group-hover:bg-[#D1B18D]
                    group-hover:text-[#2C0901]
                  "
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>

              </div>

              {/* Content */}
              <div className="absolute bottom-7 left-6 right-6 z-10 md:left-7 md:right-7">

                <div
                  className="
                    mb-4
                    h-px
                    w-9
                    bg-[#D1B18D]
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

                <h3 className="font-serif text-3xl font-bold leading-none tracking-[-0.025em] text-white md:text-4xl">
                  {pillar.title}
                </h3>

                <p className="mt-4 max-w-[260px] text-sm leading-6 text-white/80">
                  {pillar.statement}
                </p>

              </div>

              {/* Decorative Circles */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-40
                  w-40
                  rounded-full
                  border
                  border-[#D1B18D]/10
                  transition-all
                  duration-700
                  group-hover:scale-150
                  group-hover:border-[#D1B18D]/20
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-24
                  h-56
                  w-56
                  rounded-full
                  border
                  border-[#D1B18D]/5
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
              />

            </div>
          ))}
        </div>

        {/* Specializations */}
        <div className="mt-10 border-t border-[#2C0901]/15 pt-7">

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">

            <span className="text-[11px] uppercase tracking-[0.18em] text-[#2C0901]/60">
              Architectural Design
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C09A70]" />

            <span className="text-[11px] uppercase tracking-[0.18em] text-[#2C0901]/60">
              Structural Engineering
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C09A70]" />

            <span className="text-[11px] uppercase tracking-[0.18em] text-[#2C0901]/60">
              Interior Design
            </span>

            <span className="h-1 w-1 rounded-full bg-[#C09A70]" />

            <span className="text-[11px] uppercase tracking-[0.18em] text-[#2C0901]/60">
              Construction
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Expertise;