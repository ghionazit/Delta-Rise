import {
  ArrowRight,
  Award,
  Eye,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import architecturalImg from "../assets/images/architectural.jpg";
import interiorImg from "../assets/images/interior.jpg";
import aluminumImg from "../assets/images/aluminum.jpg";
import architectureProjectImg from "../assets/images/architecture-project.jpg";

const services = [
  "Architecture",
  "Interior Design",
  "3D Visualization",
  "Planning",
];

const team = [
  {
    name: "Design Team",
    role: "Architecture & Interior",
    image: architecturalImg,
  },
  {
    name: "Visualization Team",
    role: "3D Visualization",
    image: interiorImg,
  },
  {
    name: "Project Team",
    role: "Planning & Management",
    image: architectureProjectImg,
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "Pushing boundaries with creative design and forward-thinking solutions.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    description:
      "Delivering excellence in every project, from concept to completion.",
    icon: Award,
  },
  {
    title: "Collaboration",
    description:
      "Working closely with clients to bring their vision to life.",
    icon: Users,
  },
];

const purposes = [
  {
    title: "Our Mission",
    description:
      "To create thoughtful and functional spaces through responsible design, technical excellence, and close collaboration with our clients, transforming ideas into enduring value.",
    icon: Target,
    variant: "light",
  },
  {
    title: "Our Vision",
    description:
      "To become East Africa's most trusted design partner, recognized for distinctive spaces, thoughtful solutions, and a lasting commitment to quality and innovation.",
    icon: Eye,
    variant: "primary",
  },
];

const SectionLabel = ({ children, centered = false }) => (
  <span
    className={`inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wide text-[#8B653E] ${
      centered ? "justify-center" : ""
    }`}
  >
    <span className="h-px w-7 bg-[#2C0901]" />
    {children}
  </span>
);

const PurposeCard = ({
  title,
  description,
  icon: Icon,
  variant,
}) => {
  const isPrimary = variant === "primary";

  return (
    <article
      className={`
        group relative overflow-hidden rounded-[24px]
        p-7 md:p-8
        transition-all duration-500
        hover:-translate-y-1
        ${
          isPrimary
            ? "bg-[#2C0901] text-white shadow-[0_15px_40px_rgba(44,9,1,0.10)] hover:shadow-[0_22px_50px_rgba(44,9,1,0.16)]"
            : "border border-[#2C0901]/10 bg-white text-[#171717] shadow-[0_12px_35px_rgba(44,9,1,0.05)] hover:shadow-[0_20px_45px_rgba(44,9,1,0.10)]"
        }
      `}
    >
      <div
        className={`
          pointer-events-none absolute -right-16 -top-16
          h-40 w-40 rounded-full border
          transition-transform duration-700
          group-hover:scale-125
          ${
            isPrimary
              ? "border-white/10"
              : "border-[#8B653E]/10"
          }
        `}
      />

      <div
        className={`
          relative flex h-12 w-12 items-center justify-center rounded-xl
          ${
            isPrimary
              ? "bg-white/10 text-white"
              : "bg-[#8B653E]/10 text-[#8B653E]"
          }
        `}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="relative mt-6 font-serif text-3xl font-light tracking-[-0.03em]">
        {title}
      </h3>

      <p
        className={`
          relative mt-4 max-w-[560px] text-sm leading-7 md:text-base
          ${
            isPrimary
              ? "text-white/70"
              : "text-[#6D6963]"
          }
        `}
      >
        {description}
      </p>

      <div
        className={`
          relative mt-7 h-px w-8 transition-all duration-500
          group-hover:w-14
          ${
            isPrimary
              ? "bg-[#D1B18D]"
              : "bg-[#8B653E]"
          }
        `}
      />
    </article>
  );
};

const TeamCard = ({ member, index }) => (
  <article
    className="
      group relative overflow-hidden rounded-[24px]
      bg-[#2C0901]
      shadow-[0_15px_40px_rgba(44,9,1,0.08)]
      transition-all duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_55px_rgba(44,9,1,0.15)]
    "
  >
    <div className="relative aspect-[4/3] overflow-hidden">

      <img
        src={member.image}
        alt={`${member.name} - ${member.role}`}
        loading="lazy"
        className="
          h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Bottom Gradient */}
      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[70%]
          bg-gradient-to-t
          from-[#2C0901]/95
          via-[#2C0901]/55
          to-transparent
        "
      />

      {/* Number */}
      <span
        className="
          absolute left-5 top-5
          text-[10px] font-medium
          uppercase tracking-[0.2em]
          text-white/80
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Arrow */}
      <div
        className="
          absolute right-5 top-5
          flex h-9 w-9 items-center justify-center
          rounded-full
          bg-[#F4F0E9]
          text-[#2C0901]
          opacity-0
          transition-all duration-300
          group-hover:opacity-100
        "
      >
        <ArrowRight size={15} strokeWidth={1.5} />
      </div>

      {/* Text */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-serif text-2xl font-light tracking-[-0.03em] text-white">
          {member.name}
        </h3>

        <p className="mt-1 text-xs text-white/60">
          {member.role}
        </p>
      </div>
    </div>
  </article>
);

const ValueCard = ({
  title,
  description,
  icon: Icon,
}) => (
  <article
    className="
      group rounded-[24px]
      border border-[#2C0901]/10
      bg-white
      p-7 text-center
      shadow-[0_12px_35px_rgba(44,9,1,0.05)]
      transition-all duration-500
      hover:-translate-y-1
      hover:border-[#8B653E]/20
      hover:shadow-[0_20px_45px_rgba(44,9,1,0.10)]
      md:p-8
    "
  >
    <div
      className="
        mx-auto flex h-14 w-14
        items-center justify-center
        rounded-full
        bg-[#8B653E]/10
        text-[#2C0901]
        transition-all duration-500
        group-hover:bg-[#2C0901]
        group-hover:text-[#D1B18D]
      "
    >
      <Icon size={25} strokeWidth={1.8} />
    </div>

    <h3 className="mt-5 font-serif text-2xl font-light tracking-[-0.03em]">
      {title}
    </h3>

    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[#6D6963]">
      {description}
    </p>

    <div className="mx-auto mt-6 h-px w-7 bg-[#8B653E] transition-all duration-500 group-hover:w-12" />
  </article>
);

function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F0E9] text-[#171717]">

      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <section className="px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1280px]">

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">

            {/* IMAGE COMPOSITION */}
            <div className="relative min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">

              {/* Main Image */}
              <div
                className="
                  absolute left-0 top-0
                  h-[330px] w-[78%]
                  overflow-hidden rounded-[28px]
                  shadow-[0_18px_45px_rgba(44,9,1,0.10)]
                  sm:h-[380px]
                  md:h-[440px]
                "
              >
                <img
                  src={architecturalImg}
                  alt="Architectural design"
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />
              </div>

              {/* Secondary Image */}
              <div
                className="
                  absolute bottom-0 right-0
                  h-[175px] w-[48%]
                  overflow-hidden
                  rounded-[26px]
                  border-[7px] border-[#F4F0E9]
                  shadow-[0_18px_45px_rgba(44,9,1,0.12)]
                  sm:h-[200px]
                  md:h-[235px]
                "
              >
                <img
                  src={interiorImg}
                  alt="Interior design"
                  loading="lazy"
                  className="
                    h-full w-full object-cover
                    transition-transform duration-700
                    hover:scale-105
                  "
                />
              </div>

            </div>

            {/* TEXT */}
            <div className="max-w-xl">

              <SectionLabel>
                Our Story
              </SectionLabel>

              <h2
                className="
                  mt-4 font-serif
                  text-4xl font-light
                  leading-[1.06]
                  tracking-[-0.02em]
                  md:text-5xl
                  lg:text-[54px]
                "
              >
                Ideas become
                <br />
                <span className="text-[#2C0901]">
                  exceptional spaces.
                </span>
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-[#6D6963] md:text-base">

                <p>
                  Delta Rise Engineering PLC was founded with
                  a simple belief: great design transforms how
                  people live, work, and connect.
                </p>

                <p>
                  We bring together architecture, interior
                  design, visualization, and planning under one
                  roof to deliver cohesive, human-centered
                  spaces.
                </p>

                <p>
                  From concept to completion, we work closely
                  with our clients to turn ideas into reality,
                  blending creativity with technical precision.
                </p>

              </div>

              {/* Services */}
              <div className="mt-7 border-t border-[#8B653E]/20 pt-5">

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">

                  {services.map((service) => (
                    <div
                      key={service}
                      className="
                        flex items-center gap-2
                        text-sm font-medium
                        text-[#171717]
                      "
                    >
                      <span className="h-1 w-1 rounded-full bg-[#89643D]" />
                      <span>{service}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1280px]">

          <div className="text-center">

            <SectionLabel centered>
              Our Purpose
            </SectionLabel>

            <h2 className="mt-3 font-serif text-4xl font-light leading-tight md:text-5xl">
              What drives us
            </h2>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {purposes.map((purpose) => (
              <PurposeCard
                key={purpose.title}
                title={purpose.title}
                description={purpose.description}
                icon={purpose.icon}
                variant={purpose.variant}
              />
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR TEAM
      ===================================================== */}

      <section className="px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1280px]">

          <div className="flex items-end justify-between">

            <div>

              <SectionLabel>
                Our Team
              </SectionLabel>

              <h2
                className="
                  mt-3 font-serif
                  text-4xl font-light
                  leading-[1.05]
                  md:text-5xl
                "
              >
                The people behind
                <br />
                <span className="text-[#2C0901]">
                  the work.
                </span>
              </h2>

            </div>

            <Users
              size={27}
              strokeWidth={1.5}
              aria-hidden="true"
              className="hidden text-[#8B653E] md:block"
            />

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {team.map((member, index) => (
              <TeamCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR VALUES
      ===================================================== */}

      <section className="px-6 py-10 md:px-10 md:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-[1280px]">

          <div className="text-center">

            <SectionLabel centered>
              Our Values
            </SectionLabel>

            <h2 className="mt-3 font-serif text-4xl font-light leading-tight md:text-5xl">
              What we believe in
            </h2>

          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {values.map((value) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;