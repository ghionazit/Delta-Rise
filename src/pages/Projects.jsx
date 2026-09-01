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

  useEffect(() => {
    try {
      const savedProjects = JSON.parse(
        localStorage.getItem("deltaRiseProjects") || "[]"
      );

      setProjects(savedProjects);
    } catch (error) {
      console.error("Failed to load projects:", error);
      setProjects([]);
    }
  }, []);

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

      {/* HEADER */}
      <section className="px-6 pb-12 pt-4 text-center md:px-10 lg:px-16">
        <div className="mx-auto max-w-[900px]">

          <h1 className="font-serif text-5xl font-light tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Our Projects
          </h1>

          <div className="mx-auto mt-7 h-px w-16 bg-[#89643D]" />

        </div>
      </section>


      {/* SEARCH + FILTER */}
      <section className="px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[650px]">

          {/* SEARCH */}
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


          {/* CATEGORY FILTER */}
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project, index) => (

            <Link
              key={project.id}
              to={`/projects/${project.slug || project.id}`}
              className="group block"
            >

              {/* PROJECT CARD */}
              <article
                className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[24px]
                  bg-[#2C0901]
                  shadow-[0_15px_40px_rgba(44,9,1,0.08)]
                  transition-all
                  duration-500
                  group-hover:-translate-y-1
                  group-hover:shadow-[0_25px_60px_rgba(44,9,1,0.18)]
                "
              >

                {/* IMAGE */}
                {project.mainImage ? (

                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-1000
                      ease-out
                      group-hover:scale-[1.05]
                    "
                  />

                ) : (

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-[#2C0901]
                      text-[#F5F1E9]/40
                    "
                  >
                    <ImageIcon
                      size={42}
                      strokeWidth={1.2}
                    />
                  </div>

                )}


                {/* DARK GRADIENT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/25
                    to-black/5
                  "
                />


                {/* TOP INFO */}
                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    flex
                    items-start
                    justify-between
                  "
                >

                  {/* CATEGORY */}
                  <span
                    className="
                      rounded-full
                      bg-black/25
                      px-3
                      py-2
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-white
                      backdrop-blur-md
                      drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                    "
                  >
                    {project.category || "Project"}
                  </span>


                  {/* PROJECT NUMBER */}
                  <span
                    className="
                      text-[10px]
                      font-medium
                      tracking-[0.15em]
                      text-white
                      drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                {/* ARROW */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-11
                    w-11
                    translate-y-2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#171717]
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </div>


                {/* PROJECT INFORMATION */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    md:p-7
                  "
                >

                  {/* TITLE */}
                  <h2
                    className="
                      max-w-[90%]
                      font-serif
                      text-3xl
                      font-light
                      leading-[1.05]
                      tracking-[-0.025em]
                      text-white
                      drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                      md:text-4xl
                    "
                  >
                    {project.title}
                  </h2>


                  {/* LOCATION */}
                  {project.location && (

                    <p
                      className="
                        mt-3
                        text-sm
                        text-white/90
                        drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)]
                      "
                    >
                      {project.location}
                    </p>

                  )}


                  {/* BOTTOM INFO */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/25
                      pt-4
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-white/80
                        drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                      "
                    >
                      View Project
                    </span>


                    {project.year && (

                      <span
                        className="
                          text-[10px]
                          font-medium
                          tracking-[0.15em]
                          text-white/80
                          drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                        "
                      >
                        {project.year}
                      </span>

                    )}

                  </div>

                </div>

              </article>

            </Link>

          ))}

        </div>

      ) : (

        /* NO SEARCH RESULTS */
        <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#89643D]
              shadow-sm
            "
          >
            <Search
              size={23}
              strokeWidth={1.3}
            />
          </div>

          <h2 className="mt-6 font-serif text-3xl font-light">
            No projects found
          </h2>

          <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#77716A]">
            Try searching for another project or choose a
            different category.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="
              mt-6
              text-xs
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#89643D]
            "
          >
            Clear filters
          </button>

        </div>

      )

    ) : (

      /* EMPTY STATE */
      <div
        className="
          flex
          min-h-[420px]
          flex-col
          items-center
          justify-center
          rounded-[28px]
          border
          border-dashed
          border-[#D8CFC3]
          bg-white
          px-6
          text-center
        "
      >

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#F5F1E9]
            text-[#89643D]
          "
        >
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