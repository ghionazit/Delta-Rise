import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Image as ImageIcon,
  Search,
} from "lucide-react";

const categories = [
  "All",
  "Architecture",
  "Interior",
  "Visualization",
  "Planning",
  "Aluminum & Metal Works",
];

function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // =========================
  // LOAD PROJECTS
  // =========================
  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("deltaRiseProjects") || "[]"
    );

    setProjects(savedProjects);
  }, []);

  // =========================
  // FILTER PROJECTS
  // =========================
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#F5F1E9] pt-10 text-[#171717] md:pt-12">

      {/* =========================
          HEADER
      ========================= */}
      <section className="px-6 pb-12 pt-4 text-center md:px-10 lg:px-16">
        <div className="mx-auto max-w-[900px]">

          <h1 className="font-serif text-5xl font-light tracking-[-0.04em] text-[#171717] sm:text-6xl md:text-7xl">
            Our Projects
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-[#89643D]" />

        </div>
      </section>


      {/* =========================
          SEARCH
      ========================= */}
      <section className="px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[650px]">

          <div className="relative">

            <Search
              size={18}
              strokeWidth={1.5}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#89643D]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="
                w-full
                rounded-full
                border
                border-[#DED5CA]
                bg-white
                py-4
                pl-12
                pr-6
                text-sm
                text-[#171717]
                outline-none
                transition-all
                duration-300
                placeholder:text-[#9D968E]
                focus:border-[#89643D]
                focus:shadow-[0_10px_30px_rgba(139,101,62,0.08)]
              "
            />

          </div>


          {/* =========================
              CATEGORY FILTER
          ========================= */}
          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-4">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  relative
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  transition-all
                  duration-300
                  ${
                    activeCategory === category
                      ? "text-[#89643D]"
                      : "text-[#77716A] hover:text-[#171717]"
                  }
                `}
              >
                {category}

                {/* Active underline */}
                <span
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    bg-[#89643D]
                    transition-all
                    duration-300
                    ${
                      activeCategory === category
                        ? "w-full"
                        : "w-0"
                    }
                  `}
                />

              </button>

            ))}

          </div>

        </div>
      </section>


      {/* =========================
          PROJECT GRID
      ========================= */}
      <section className="px-6 pb-24 pt-14 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1450px]">

          {projects.length > 0 ? (

            filteredProjects.length > 0 ? (

              <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

                {filteredProjects.map((project, index) => (

                  <Link
                    key={project.id}
                    to={`/projects/${project.slug || project.id}`}
                    className="group block"
                  >

                    {/* PROJECT IMAGE */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#E6DED2]">

                      {project.mainImage ? (

                        <img
                          src={project.mainImage}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                      ) : (

                        <div className="flex h-full items-center justify-center text-[#9D968E]">

                          <ImageIcon
                            size={38}
                            strokeWidth={1.2}
                          />

                        </div>

                      )}


                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                      {/* ARROW */}
                      <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-[#171717] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                        />

                      </div>

                    </div>


                    {/* PROJECT INFORMATION */}
                    <div className="mt-5 flex items-start justify-between gap-4">

                      <div>

                        {/* CATEGORY */}
                        <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#89643D]">
                          {project.category || "Project"}
                        </p>


                        {/* TITLE */}
                        <h2 className="mt-2 font-serif text-2xl font-light tracking-[-0.02em] text-[#171717] transition-colors duration-300 group-hover:text-[#89643D]">
                          {project.title}
                        </h2>


                        {/* LOCATION */}
                        {project.location && (
                          <p className="mt-2 text-sm text-[#77716A]">
                            {project.location}
                          </p>
                        )}

                      </div>


                      {/* PROJECT NUMBER */}
                      <span className="text-[10px] font-medium text-[#9D968E]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                  </Link>

                ))}

              </div>

            ) : (

              /* =========================
                  NO SEARCH RESULTS
              ========================= */
              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#89643D]">

                  <Search
                    size={23}
                    strokeWidth={1.3}
                  />

                </div>

                <h2 className="mt-6 font-serif text-3xl font-light">
                  No projects found
                </h2>

                <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#77716A]">
                  Try searching for another project or choose a different category.
                </p>


                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-[#89643D]"
                >
                  Clear filters
                </button>

              </div>

            )

          ) : (

            /* =========================
                EMPTY STATE
            ========================= */
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[28px] border border-dashed border-[#D8CFC3] bg-white px-6 text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F1E9] text-[#89643D]">

                <ImageIcon
                  size={28}
                  strokeWidth={1.3}
                />

              </div>

              <h2 className="mt-6 font-serif text-3xl font-light">
                Projects coming soon
              </h2>

              <p className="mt-3 max-w-[380px] text-sm leading-6 text-[#77716A]">
                Our portfolio is currently being updated.
                Check back soon to explore our latest work.
              </p>

            </div>

          )}

        </div>
      </section>

    </main>
  );
}

export default Projects;