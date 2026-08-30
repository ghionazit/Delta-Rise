import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

const DEFAULT_DESCRIPTION =
  "A thoughtfully designed project focused on creating functional, refined, and meaningful spaces. Every element has been considered to balance aesthetics, comfort, and purpose.";

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    try {
      const savedProjects = JSON.parse(
        localStorage.getItem("deltaRiseProjects") || "[]",
      );

      const foundProject = savedProjects.find(
        (item) =>
          item.slug === slug ||
          String(item.id) === String(slug),
      );

      setProject(foundProject || null);
    } catch (error) {
      console.error("Failed to load project:", error);
      setProject(null);
    }
  }, [slug]);

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F1E9] px-6">
        <div className="max-w-md text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#89643D]">
            Project
          </p>

          <h1 className="mt-5 font-serif text-4xl font-light tracking-[-0.03em] text-[#2C0901]">
            Project not found
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#77716A]">
            The project you are looking for does not exist or
            may have been removed.
          </p>

          <Link
            to="/projects"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#2C0901] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F5F1E9] transition-transform duration-300 hover:scale-[1.02]"
          >
            <ArrowLeft
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const images = Array.isArray(project.images)
    ? project.images.filter(Boolean)
    : [];

  return (
    <main className="min-h-screen bg-[#F5F1E9] text-[#2C0901]">

      {/* =====================================================
          PROJECT HEADER
      ===================================================== */}
      <section className="px-6 pb-10 pt-10 md:px-10 md:pb-14 md:pt-12 lg:px-16">
        <div className="mx-auto max-w-[1450px]">

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Link
              to="/projects"
              className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#77716A] transition-colors duration-300 hover:text-[#2C0901]"
            >
              <ArrowLeft
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to Projects
            </Link>

            <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#89643D]">
              {project.category || "Project"}
            </span>
          </div>

          {/* Title */}
          <div className="mt-10 max-w-[1150px]  md:mt-10">


            <h1 className="font-serif text-5xl font-light leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-8xl lg:text-[110px]">
              {project.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#77716A]">
              <span>
                {project.category || "Architecture"}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#89643D]" />

              <span>
                {project.location || "Location not specified"}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#89643D]" />

              <span>
                {project.year || "2026"}
              </span>
            </div>
          </div>
        </div>
      </section>

{/* =====================================================
    HUGE HERO IMAGE
===================================================== */}
<section className="px-4 md:px-8 lg:px-12">
  <div className="mx-auto max-w-[950px]">

    <div className="group relative overflow-hidden rounded-[20px] md:rounded-[26px]">

      {project.mainImage ? (
        <img
          src={project.mainImage}
          alt={project.title}
          className="aspect-[16/8] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
        />
      ) : (
        <div className="flex aspect-[16/8] items-center justify-center bg-[#2C0901] text-[#F5F1E9]/40">
          <ImageIcon
            size={45}
            strokeWidth={1}
          />
        </div>
      )}

      <div className="absolute bottom-5 left-5 rounded-full bg-[#F5F1E9]/90 px-4 py-2 backdrop-blur-sm">
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#2C0901]">
          Project / 01
        </span>
      </div>

    </div>
  </div>
</section>


      {/* =====================================================
          PROJECT DESCRIPTION
      ===================================================== */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1450px]">

          <div className="grid gap-14 md:grid-cols-[0.38fr_1fr] lg:grid-cols-[0.42fr_1fr]">

            {/* Label */}
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#89643D]">
                Project Discrption
              </p>
            </div>

            {/* Description */}
            <div className="max-w-[950px]">


              <div className="mt-9 max-w-[780px]">
                <p className="text-base leading-8 text-[#625D57] md:text-lg md:leading-9">
                  {project.description || DEFAULT_DESCRIPTION}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


{/* =====================================================
    PROJECT IMAGE CAROUSEL
===================================================== */}
{images.length > 0 && (
  <section className="pb-24 md:pb-32">

    {/* Gallery Header */}
    <div className="mx-auto mb-10 flex max-w-[1450px] items-end justify-between gap-6 px-6 md:mb-14 md:px-10 lg:px-16">
      <div>
        <h2 className="font-serif text-4xl font-light tracking-[-0.03em] md:text-6xl">
          Inside the project
        </h2>
      </div>
    </div>

    {/* =========================
        IMAGE CAROUSEL
    ========================= */}
    <div className="relative overflow-hidden">

      <div className="flex items-center justify-center gap-5 px-6 md:gap-7 md:px-10 lg:px-16">

        {images.map((image, index) => {
          const total = images.length;

          const previousIndex =
            (activeImage - 1 + total) % total;

          const nextIndex =
            (activeImage + 1) % total;

          const isActive = index === activeImage;
          const isPrevious = index === previousIndex;
          const isNext = index === nextIndex;

          if (!isActive && !isPrevious && !isNext) {
            return null;
          }

          return (
            <div
              key={`${image}-${index}`}
              className={`
                relative shrink-0 overflow-hidden rounded-[20px]
                bg-[#2C0901]
                transition-all duration-500 ease-out
                md:rounded-[28px]
                ${
                  isActive
                    ? "w-[72vw] md:w-[55vw] lg:w-[48vw] xl:w-[42vw] scale-100 opacity-100"
                    : "hidden w-[24vw] md:block md:w-[27vw] lg:w-[24vw] xl:w-[21vw] scale-[0.96] opacity-70"
                }
              `}
            >

              <img
                src={image}
                alt={`${project.title} — project view ${index + 1}`}
                loading="lazy"
                className={`
                  h-full w-full object-cover
                  transition-transform duration-700
                  ${
                    isActive
                      ? "aspect-[16/10]"
                      : "aspect-[4/3]"
                  }
                `}
              />

              {/* Previous Arrow */}
              {isPrevious && (
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage(previousIndex)
                  }
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#2C0901]/70 text-[#F5F1E9] backdrop-blur-sm transition hover:bg-[#2C0901] md:left-6"
                >
                  <ArrowLeft
                    size={18}
                    strokeWidth={1.5}
                  />
                </button>
              )}

              {/* Next Arrow */}
              {isNext && (
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage(nextIndex)
                  }
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#2C0901]/70 text-[#F5F1E9] backdrop-blur-sm transition hover:bg-[#2C0901] md:right-6"
                >
                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                  />
                </button>
              )}

              {/* Image Number */}
              {isActive && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-[#2C0901]/75 px-4 py-2 backdrop-blur-sm md:bottom-6">
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#F5F1E9]">
                    {String(index + 2).padStart(2, "0")} /{" "}
                    {String(images.length + 1).padStart(2, "0")}
                  </span>
                </div>
              )}

            </div>
          );
        })}

      </div>

      {/* =========================
          DOTS
      ========================= */}
      <div className="mt-7 flex items-center justify-center gap-2">

        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`
              h-1.5 rounded-full transition-all duration-300
              ${
                activeImage === index
                  ? "w-7 bg-[#2C0901]"
                  : "w-1.5 bg-[#B9B0A5] hover:bg-[#89643D]"
              }
            `}
          />
        ))}

      </div>

    </div>

  </section>
)}


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
        <div className="mx-auto max-w-[1450px]">

          <div className="overflow-hidden rounded-[28px] bg-[#2C0901] px-8 py-14 text-[#F5F1E9] md:px-14 md:py-20 lg:px-20 lg:py-24">

            <p className="text-[10px] uppercase tracking-[0.28em] text-white">
              Delta Rise Engineering
            </p>

            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

              <h2 className="max-w-[800px] font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-7xl">
                Let&apos;s build something meaningful.
              </h2>

              <Link
                to="/#contact"
                className="group flex w-fit shrink-0 items-center gap-4  rounded-full border bg-[#2C0901] px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
              >
                Start Your Project

                <span className="flex h-7 w-7 items-center justify-center rounded-full border bg-[#2C0901] text-[#F5F1E9]">
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default ProjectDetails;