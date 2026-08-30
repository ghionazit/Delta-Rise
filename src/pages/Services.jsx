import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

import architecturalImg from "../assets/images/architectural.jpg";
import planningImg from "../assets/images/architecture-project.jpg";
import engineeringImg from "../assets/images/interior.jpg";
import constructionImg from "../assets/images/architecture-project.jpg";
import interiorImg from "../assets/images/interior.jpg";
import aluminumImg from "../assets/images/aluminum.jpg";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    slug: "architecture",
    description:
      "Thoughtful architectural solutions shaped around function, context, and the character of each project.",
    details:
      "Our architectural design service transforms ideas into meaningful spaces. We carefully consider functionality, aesthetics, site conditions, and the needs of each client to create practical and distinctive architectural solutions.",
    image: architecturalImg,
  },
  {
    number: "02",
    title: "Planning & Design",
    slug: "planning",
    description:
      "Clear planning and design solutions that transform ideas into practical and well-organized spaces.",
    details:
      "We develop clear planning strategies that help shape projects from their earliest stages. Our approach focuses on organization, functionality, efficient space use, and creating a strong foundation for the next stages of development.",
    image: planningImg,
  },
  {
    number: "03",
    title: "Engineering",
    slug: "engineering",
    description:
      "Reliable technical solutions developed with precision, efficiency, and long-term performance in mind.",
    details:
      "Our engineering services provide practical and reliable technical solutions for a wide range of projects. We focus on precision, safety, performance, and coordination to support successful project delivery.",
    image: engineeringImg,
  },
  {
    number: "04",
    title: "Construction",
    slug: "construction",
    description:
      "Quality construction delivered through careful coordination, supervision, craftsmanship, and attention to detail.",
    details:
      "We manage and deliver construction work with careful attention to quality, coordination, materials, and execution. Our team works to ensure every stage of the project moves efficiently toward completion.",
    image: constructionImg,
  },
  {
    number: "05",
    title: "Interior Design",
    slug: "interior",
    description:
      "Refined interior environments designed around people, comfort, materiality, and everyday experience.",
    details:
      "Our interior design service creates comfortable and functional environments with thoughtful attention to space, materials, lighting, finishes, and the way people experience a place every day.",
    image: interiorImg,
  },
  {
    number: "06",
    title: "Aluminum & Metal Works",
    slug: "aluminum",
    description:
      "Custom aluminum and metal solutions combining modern detailing, durability, precision fabrication, and installation.",
    details:
      "We provide custom aluminum and metal works including fabrication and installation. Our solutions combine durable materials, precise detailing, modern finishes, and practical performance for each project.",
    image: aluminumImg,
  },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="bg-[#F4F0E9] text-[#2C0901]">

      {/* =========================
          HERO
      ========================= */}
      <section className="relative h-[65vh] min-h-[520px] overflow-hidden">

        <img
          src={architecturalImg}
          alt="Delta Rise Engineering Services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2C0901]/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">

          <div className="max-w-[850px]">

            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-[#D1B18D]">
              Our Services
            </p>

            <h1 className="font-serif text-6xl font-light leading-[0.9] tracking-[-0.05em] text-[#F4F0E9] sm:text-7xl md:text-8xl">
              We shape ideas
              <br />
              <span className="text-[#D1B18D]">
                into reality.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[620px] text-sm leading-7 text-[#F4F0E9]/75 md:text-base">
              From architecture and planning to engineering, construction,
              interiors, and aluminum & metal works, we bring every part of
              your project together with purpose and precision.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          OUR PROCESS
      ========================= */}
      <section className="bg-[#F4F0E9] px-6 pt-12 md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-16 text-center">

            <p className="text-[14px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
              Our Process
            </p>

          </div>

          <div className="relative">

            {/* Connecting Line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[48px] hidden h-px bg-[#2C0901]/15 md:block" />

            <div className="grid gap-12 md:grid-cols-4 md:gap-6">

              {[
                {
                  number: "01",
                  title: "Brief",
                  text: "We understand your goals, requirements, site, and vision.",
                },
                {
                  number: "02",
                  title: "Design",
                  text: "We develop thoughtful concepts and refine the right solution.",
                },
                {
                  number: "03",
                  title: "Develop",
                  text: "We transform the approved concept into detailed technical work.",
                },
                {
                  number: "04",
                  title: "Deliver",
                  text: "We coordinate execution and focus on quality through completion.",
                },
              ].map((step) => (

                <div
                  key={step.number}
                  className="group relative text-center"
                >

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-24
                      w-24
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#2C0901]/20
                      bg-[#F4F0E9]
                      transition-all
                      duration-500
                      group-hover:border-[#89643D]
                      group-hover:bg-[#2C0901]
                    "
                  >

                    <span className="font-serif text-2xl font-light text-[#89643D] transition-colors duration-500 group-hover:text-[#D1B18D]">
                      {step.number}
                    </span>

                  </div>

                  <div className="mt-7">

                    <h3 className="font-serif text-3xl font-light tracking-[-0.03em] text-[#2C0901]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-4 max-w-[250px] text-sm leading-6 text-[#2C0901]/55">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES
      ========================= */}
      <section
        id="services"
        className="bg-[#F4F0E9] px-6 py-20 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-[1500px]">

          {/* Section Header */}
          <div className="mb-10 border-b border-[#2C0901]/15 pb-6 text-center">

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
              What We Do
            </p>

          </div>


          {/* =========================
              SERVICE CARDS
          ========================= */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article
                key={service.number}
                className="
                  group
                  relative
                  h-[480px]
                  overflow-hidden
                  rounded-[20px]
                  bg-[#2C0901]
                  shadow-[0_8px_25px_rgba(44,9,1,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(44,9,1,0.14)]
                "
              >

                {/* Full Image */}
                <img
                  src={service.image}
                  alt={service.title}
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


                {/* Very Thin Card Border */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[20px]
                    border
                    border-white/10
                  "
                />


                {/* Number */}
                <span
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    font-serif
                    text-xl
                    font-light
                    text-[#F4F0E9]/70
                  "
                >
                  {service.number}
                </span>


                {/* Hover Arrow */}
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="
                    absolute
                    right-5
                    top-5
                    z-20
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F4F0E9]
                    text-[#2C0901]
                    opacity-0
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    hover:scale-105
                  "
                  aria-label={`View ${service.title}`}
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                  />
                </button>


                {/* =========================
                    CARD CONTENT
                ========================= */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-20
                    p-5
                    md:p-6
                  "
                >

                  <h3
                    className="
                      max-w-[400px]
                      font-serif
                      text-2xl
                      font-light
                      leading-tight
                      tracking-[-0.03em]
                      text-[#F4F0E9]
                      md:text-3xl
                    "
                  >
                    {service.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      max-w-[430px]
                      text-xs
                      leading-5
                      text-[#Ffff]/85
                    "
                  >
                    {service.description}
                  </p>


                  {/* Bottom */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#F4F0E9]/20
                      pt-4
                    "
                  >

                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-[#F4F0E9]
                        transition-colors
                        duration-300
                        hover:text-[#D1B18D]
                      "
                    >
                      View Details
                    </button>


                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#F4F0E9]/25
                        text-[#F4F0E9]/75
                        transition-all
                        duration-300
                        hover:border-[#D1B18D]
                        hover:bg-[#D1B18D]
                        hover:text-[#2C0901]
                      "
                      aria-label={`View details for ${service.title}`}
                    >

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.4}
                      />

                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}
      <section className="bg-[#F4F0E9] px-6 pb-10 text-[#2C0901] md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="border-t border-[#2C0901]/15 pt-12">

            <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

              <div>

                <div className="mb-6 flex items-center gap-4">

                  <span className="h-px w-10 bg-[#C09A70]" />

                  <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
                    Start a Conversation
                  </p>

                </div>

                <h2 className="max-w-[850px] font-serif text-5xl font-light leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-8xl">

                  Ready to start
                  <br />

                  <span className="text-[#89643D]">
                    your project?
                  </span>

                </h2>

                <p className="mt-7 max-w-[560px] text-sm leading-7 text-[#2C0901]/55 md:text-base">
                  Tell us about your project, your ideas, and what you want to
                  achieve. Our team is ready to help turn your vision into
                  something meaningful.
                </p>

              </div>


              <a
                href="/#contact"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-4
                  rounded-full
                  bg-[#2C0901]
                  px-6
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  transition-all
                  duration-300
                  hover:bg-[#89643D]
                "
              >

                <span className="text-white">
                  Contact Us
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                  />

                </span>

              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICE POPUP
      ========================= */}
      {selectedService && (

        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-[#2C0901]/75
            p-4
            backdrop-blur-sm
          "
          onClick={() => setSelectedService(null)}
        >

          <div
            className="
              relative
              w-full
              max-w-[800px]
              overflow-hidden
              rounded-[24px]
              bg-[#F4F0E9]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#F4F0E9]
                text-[#2C0901]
                shadow-lg
                transition-transform
                duration-300
                hover:scale-105
              "
              aria-label="Close"
            >

              <X
                size={18}
                strokeWidth={1.5}
              />

            </button>


            {/* Popup Image */}
            <div className="relative h-[180px] overflow-hidden md:h-[220px]">

              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#2C0901]/75
                  via-[#2C0901]/15
                  to-transparent
                "
              />

            </div>


            {/* Popup Content */}
            <div className="p-6 md:p-8">

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#89643D]">
                Our Service
              </p>

              <h2 className="mt-3 font-serif text-3xl font-light tracking-[-0.04em] text-[#2C0901] md:text-4xl">
                {selectedService.title}
              </h2>

              <div className="mt-4 h-px w-12 bg-[#C09A70]" />

              <p className="mt-5 max-w-[680px] text-sm leading-6 text-[#2C0901]/65 md:text-[15px]">
                {selectedService.details}
              </p>


              {/* Popup Bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-[#2C0901]/10 pt-5">

                <span className="text-[9px] uppercase tracking-[0.2em] text-[#2C0901]/45">
                  Delta Rise Engineering
                </span>


                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#2C0901]
                    px-5
                    py-2.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#89643D]
                  "
                >

                  Close

                  <X
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:rotate-90"
                  />

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Services;