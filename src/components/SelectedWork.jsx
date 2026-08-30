import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Modern Residence",
    category: "Architecture",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Contemporary Interior",
    category: "Interior Design",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Luxury Living Space",
    category: "Interior Design",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
];

function SelectedWork() {
  return (
    <section className="bg-[#F4F0E9] px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <h2 className="text-sm font-medium uppercase tracking-[0.25em] text-[#2C0901]">
              Selected Work
            </h2>
          </div>

          <Link
            to="/projects"
            className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#2C0901]"
          >
            View all

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

        {/* Small Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <Link
              key={project.title}
              to="/projects"
              className="group"
            >
              <article className="overflow-hidden rounded-[16px] bg-[#2C0901]">

                {/* Image */}
                <div className="relative aspect-[1.45/1] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Number */}
                  <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#F4F0E9]/90 text-[8px] font-medium tracking-[0.1em] text-[#2C0901]">
                    {project.number}
                  </span>

                  {/* Arrow */}
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#2C0901] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                    />
                  </span>

                </div>

                {/* Brown Card Content */}
                <div className="px-4 py-4">

                  <div className="mb-2 flex items-center justify-between">

                    <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#F4F0E9]/55">
                      {project.category}
                    </span>

                    <span className="text-[8px] tracking-[0.15em] text-[#F4F0E9]/35">
                      {project.year}
                    </span>

                  </div>

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="font-serif text-lg font-light tracking-[-0.02em] text-[#F4F0E9]">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.3}
                      className="shrink-0 text-[#F4F0E9]/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#F4F0E9]"
                    />

                  </div>

                </div>

              </article>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SelectedWork;