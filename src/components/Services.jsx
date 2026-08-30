import { ArrowUpRight } from "lucide-react";
import architecturalImage from "../assets/images/architectural.jpg";
import interiorImage from "../assets/images/interior.jpg";
import aluminumImage from "../assets/images/aluminum.jpg";


const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Thoughtfully designed architectural solutions that balance function, aesthetics, and the unique needs of every project.",
    tags: ["Residential", "Commercial"],
    image: architecturalImage,
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Functional and refined interior spaces designed to create comfort, character, and a strong sense of place.",
    tags: ["Residential", "Commercial"],
    image: interiorImage,
  },
  {
    number: "03",
    title: "Aluminum & Metal Works",
    description:
      "Custom aluminum and metal solutions crafted with precision for durable, functional, and modern architectural spaces.",
    tags: ["Fabrication", "Installation"],
    image:  aluminumImage,
  },
];


function Services() {
  return (
    <section
      id="services"
      className="bg-[#F4F0E9] px-6 py-20 md:px-10 md:py-28 lg:px-16"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 border-b border-[#2C0901]/15 pb-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-[700px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#2C0901]/55">
              Our Services
            </p>

            <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.045em] text-[#2C0901]">
              Explore Our Services:
            </h2>
          </div>

          <button
            type="button"
            className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#2C0901] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#2C0901]/90"
          >
            View All Services

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </span>
          </button>
        </div>

 {/* Service Cards */}
<div className="grid gap-5 md:grid-cols-3">

  {services.map((service) => (
    <article
      key={service.number}
      className="group relative h-[480px] overflow-hidden rounded-[18px] bg-[#2C0901] shadow-[0_8px_25px_rgba(44,9,1,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(44,9,1,0.14)]"
    >

      {/* Full Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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

      {/* Thin Card Border */}
      <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/10" />

      {/* Hover Arrow */}
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4F0E9] text-[#2C0901] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6">


        {/* Title */}
        <h3 className="font-serif text-2xl font-light leading-tight tracking-[-0.03em] text-[#F4F0E9]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 max-w-[420px] text-xs leading-5 text-[#e9ebe6]/90">
          {service.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#F4F0E9]/20 bg-[#2C0901]/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-[#e9ebe6] backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-[#e9ebe6]/20 pt-4">

          <span className="text-[9px] font-medium uppercase tracking-[0.17em] text-[#e9ebe6]">
            Learn More
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.4}
            className="text-[#F4F0E9]/70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
          />

        </div>

      </div>

    </article>
  ))}

</div>
      </div>
    </section>
  );
}

export default Services;