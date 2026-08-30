import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="overflow-hidden bg-white px-6 py-10 text-[#171717] md:px-10 md:py-10 lg:px-16 lg:py-24">
      <div className="
    relative
    mx-auto
    h-[900px]
    w-full
    max-w-[1440px]

    sm:h-[900px]

    md:h-[900px]

    lg:min-h-[570px]
    lg:h-auto
    lg:top-10
  "
>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT SIDE - CONTENT */}
          <div>

            {/* About Label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="h-px w-10 bg-[#89643D]" />

              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#89643D]">
                About Us
              </p>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-[680px] font-serif text-5xl font-light leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]">
              Engineering
              <br />

              <span className="text-[#2C0901]">
                With Purpose.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-9 max-w-[570px] text-base leading-8 text-[#6D6963] md:text-lg">
              Delta Rise Engineering PLC creates thoughtful architectural,
              interior, and engineering solutions shaped around people,
              purpose, and place. We combine creative thinking with
              practical knowledge to create spaces that last.
            </p>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-[#89643D] transition-all duration-300 hover:gap-4"
            >
              Learn More About Us

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </Link>

          </div>


          {/* RIGHT SIDE - CARDS */}
          <div className="relative mx-auto min-h-[570px] w-full max-w-[620px] lg:top-10">

            {/* CARD 01 */}
            <div
              className="
                group
                absolute
                left-1/2
                top-4
                z-20
                w-[52%]
                -translate-x-1/2
                rounded-[26px]
                bg-[#2C0901]
                p-6
                text-[#F8F5EF]
                shadow-[0_20px_45px_rgba(44,9,1,0.16)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_28px_60px_rgba(44,9,1,0.24)]
                md:p-7
              "
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D1B18D]/70">
                Experience
              </span>

              <div className="mt-10">
                <p className="max-w-[280px] font-serif text-2xl font-light leading-tight md:text-3xl">
                  Creating spaces
                  <br />
                  that make a difference.
                </p>
              </div>

              {/* Decorative circle */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full border border-[#D1B18D]/10 transition-transform duration-700 group-hover:scale-150" />
            </div>


            {/* CARD 02 */}
            <div
              className="
                group
                absolute
                left-0
                top-[220px]
                z-30
                w-[44%]
                rounded-[26px]
                bg-[#F3EDE3]
                p-6
                shadow-[0_18px_45px_rgba(80,60,40,0.09)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:shadow-[0_28px_60px_rgba(80,60,40,0.14)]
                md:p-7
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#89643D]">
                Our Philosophy
              </p>

              <h3 className="mt-4 font-serif text-2xl font-light leading-tight md:text-3xl">
                Ideas into
                <br />
                reality.
              </h3>

              <div className="mt-8 h-px w-8 bg-[#89643D] transition-all duration-500 group-hover:w-14" />
            </div>


            {/* CARD 03 */}
            <div
              className="
                group
                absolute
                right-0
                top-[220px]
                z-40
                w-[44%]
                rounded-[26px]
                border
                border-[#DED6CC]
                bg-white
                p-6
                shadow-[0_18px_45px_rgba(0,0,0,0.07)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-[#89643D]/40
                hover:shadow-[0_28px_60px_rgba(0,0,0,0.11)]
                md:p-7
              "
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#89643D]">
                Our Approach
              </p>

              <h3 className="mt-4 font-serif text-2xl font-light leading-tight md:text-3xl">
                Built around
                <br />
                <span className="text-[#2C0901]">
                  people.
                </span>
              </h3>

              <div className="mt-8 h-px w-8 bg-[#89643D] transition-all duration-500 group-hover:w-14" />
            </div>


            {/* Connecting decorative line */}
            <div className="pointer-events-none absolute left-1/2 top-[155px] h-[150px] w-px -translate-x-1/2 bg-[#89643D]/10" />

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;