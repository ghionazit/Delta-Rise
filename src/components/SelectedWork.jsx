import { useEffect, useState } from "react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

function SelectedWork() {
  const [projects, setProjects] = useState([]);

  // =========================
  // LOAD SELECTED PROJECTS
  // =========================
  useEffect(() => {
    const loadProjects = () => {
      try {
        const savedProjects = JSON.parse(
          localStorage.getItem("deltaRiseProjects") || "[]"
        );

        // Only show projects selected by admin
        const selectedProjects = savedProjects
          .filter((project) => project.isSelected)
          .slice(0, 3);

        setProjects(selectedProjects);
      } catch (error) {
        console.error("Unable to load selected projects:", error);
        setProjects([]);
      }
    };

    loadProjects();

    // Update when localStorage changes
    window.addEventListener("storage", loadProjects);

    return () => {
      window.removeEventListener("storage", loadProjects);
    };
  }, []);

  return (
    <section className="bg-[#F4F0E9] px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-[1400px]">

        {/* =========================
            HEADER
        ========================= */}
        <div className="mb-8 flex items-center justify-between">

          <div>
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

        {/* =========================
            SELECTED PROJECTS
        ========================= */}
        {projects.length > 0 ? (

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project, index) => (

              <Link
                key={project.id}
                to={`/projects/${project.slug || project.id}`}
                className="group block"
              >

                <article
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    rounded-[20px]
                    bg-[#2C0901]
                    shadow-[0_12px_30px_rgba(44,9,1,0.12)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_45px_rgba(44,9,1,0.20)]
                  "
                >

                  {/* =========================
                      FULL IMAGE
                  ========================= */}
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
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                  ) : (

                    <div className="absolute inset-0 flex items-center justify-center bg-[#2C0901] text-white/40">
                      <ImageIcon
                        size={40}
                        strokeWidth={1.2}
                      />
                    </div>

                  )}

                  {/* =========================
                      DARK IMAGE OVERLAY
                  ========================= */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#2C0901]/95
                      via-[#2C0901]/25
                      to-transparent
                    "
                  />

                  {/* =========================
                      PROJECT NUMBER
                  ========================= */}
                  <span
                    className="
                      absolute
                      left-4
                      top-4
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F4F0E9]/90
                      text-[9px]
                      font-medium
                      tracking-[0.1em]
                      text-[#a9501c]
                      backdrop-blur-sm
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* =========================
                      ARROW
                  ========================= */}
                  <span
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F4F0E9]/90
                      text-[#2C0901]
                      opacity-0
                      translate-y-2
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                    />
                  </span>

                  {/* =========================
                      TEXT CONTENT
                  ========================= */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-10
                      p-5
                      md:p-6
                    "
                  >

                    {/* CATEGORY */}
                    <p
                      className="
                        text-[9px]
                        font-medium
                        uppercase
                        tracking-[0.2em]
                        text-white/70
                        drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)]
                      "
                    >
                      {project.category || "Project"}
                    </p>

                    {/* TITLE */}
                    <h3
                      className="
                        mt-2
                        font-serif
                        text-2xl
                        font-light
                        leading-tight
                        tracking-[-0.03em]
                        text-white
                        drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]
                      "
                    >
                      {project.title}
                    </h3>

                    {/* LOCATION */}
                    {project.location && (
                      <p
                        className="
                          mt-2
                          text-sm
                          text-white/75
                          drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
                        "
                      >
                        {project.location}
                      </p>
                    )}

                  </div>

                </article>

              </Link>

            ))}

          </div>

        ) : (

          /* =========================
              EMPTY STATE
          ========================= */
          <div className="flex min-h-[280px] items-center justify-center rounded-[20px] border border-dashed border-[#D8CFC3] bg-white">

            <div className="text-center">

              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
                Selected Work
              </p>

              <h3 className="mt-3 font-serif text-2xl font-light text-[#171717]">
                Coming soon
              </h3>

              <p className="mt-2 text-sm text-[#77716A]">
                Selected projects will appear here.
              </p>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}

export default SelectedWork;