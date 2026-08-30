import {
  Building2,
  Sofa,
  Box,
  Ruler,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architecture",
    description:
      "Bespoke design solutions that are beautiful, functional, and deeply connected to place.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description:
      "Curated interiors that balance comfort, character, and timeless style.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "Detailed visuals that bring design concepts to life before they are built.",
  },
  {
    icon: Ruler,
    title: "Planning",
    description:
      "Careful planning that turns ideas into practical and purposeful spaces.",
  },
];

function WhatWeDo() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-white px-6 py-4 md:px-10 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="rounded-[24px] px-6 py-4 md:px-8 md:py-9 lg:px-10 lg:py-10">

          {/* Heading */}
          <div className="mb-8 text-center">
            <p className="text-[20px] font-medium uppercase tracking-[0.32em] text-[#89643D]">
              What We Do
            </p>

            <div className="mx-auto mt-3 h-px w-8 bg-[#B59A7A]" />
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className={`
                    flex
                    gap-4
                    px-5
                    py-4
                    lg:px-6
                    lg:py-2
                    ${
                      index !== 0
                        ? "border-t border-[#D7CFC3] md:border-t-0 md:border-l"
                        : ""
                    }
                  `}
                >

                  {/* Icon */}
                  <div className="flex shrink-0 items-start pt-1 text-[#9A7854]">
                    <Icon
                      size={28}
                      strokeWidth={1}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-serif text-xl font-light tracking-[-0.02em] text-[#171717]">
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-[220px] text-[11px] leading-5 text-[#6D6963]">
                      {service.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;