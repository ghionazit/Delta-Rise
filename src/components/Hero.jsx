import {
  ArrowRight,
  Building2,
  Users,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#F5F1E9]
        text-[#171717]

        sm:min-h-[760px]

        md:h-[78vh]
        md:min-h-[700px]

        lg:h-[70vh]
        lg:min-h-[650px]
      "
    >
      {/* =========================
          HERO IMAGE
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-30%]
          top-0
          h-[48%]
          w-[145%]

          sm:right-[-25%]
          sm:h-[55%]
          sm:w-[125%]

          md:right-[-18%]
          md:h-[80vh]
          md:w-[84%]

          lg:right-[-14%]
          lg:h-[80vh]
          lg:w-[86%]
        "
      >
        <img
          src={heroImage}
          alt="Delta Rise interior design project"
          className="
            h-full
            w-full
            object-cover
            object-[62%_55%]

            sm:object-[62%_50%]

            md:object-[65%_bottom]

            lg:object-[65%_bottom]
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#F5F1E9]/25
            via-transparent
            to-transparent

            md:bg-gradient-to-r
            md:from-[#F5F1E9]/25
            md:via-transparent
            md:to-transparent
          "
        />
      </div>

      {/* =========================
          HERO CONTENT
      ========================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[650px]
          max-w-[1600px]
          items-end
          px-6
          pb-[50px]
          pt-40

          sm:min-h-[670px]
          sm:px-8
          sm:pb-[250px]

          md:min-h-[78vh]
          md:items-center
          md:px-10
          md:pb-40
          md:pt-28

          lg:min-h-[88vh]
          lg:px-16
          lg:pb-40
          lg:pt-28
        "
      >
        <div
          className="
            w-full
            max-w-[680px]

            md:max-w-[680px]

            lg:max-w-[680px]
          "
        >
          {/* Eyebrow */}
          <p
            className="
              mb-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#765636]
            "
          >
            We design
          </p>

          {/* =========================
              HEADING
          ========================= */}
          <h1
            className="
              font-serif
              text-[58px]
              font-light
              leading-[0.9]
              tracking-[-0.05em]

              sm:text-[72px]

              md:text-[86px]

              lg:text-[104px]
            "
          >
            <span className="block">
              Spaces
            </span>

            <span
              className="
                relative
                z-20
                block
                text-[#2C0901]

                md:whitespace-nowrap
                md:-mr-32

                lg:-mr-40
              "
            >
              that elevate
            </span>

            <span className="block">
              life.
            </span>
          </h1>

          {/* =========================
              DESCRIPTION
          ========================= */}
          <p
            className="
              mt-7
              max-w-[360px]
              text-[13px]
              leading-6
              text-[#5F5B56]

              sm:max-w-[420px]
              sm:text-sm
              sm:leading-7

              md:max-w-[420px]
              md:text-base
            "
          >
            Architecture. Interior. Visualization.
            <br />
            Thoughtful spaces, crafted with purpose.
          </p>

          {/* =========================
              CTA
          ========================= */}
          <div className="mt-8 text-white">
            <Link
              to="/projects"
              className="
                group
                inline-flex
                min-h-[48px]
                items-center
                gap-4
                rounded-full
                bg-[#2C0901]
                px-6
                py-3.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:bg-[#2C0901]
                hover:shadow-[0_12px_30px_rgba(139,101,62,0.25)]
              "
            >
              Explore our work

              <span
                className="
                  flex
                  h-7
                  w-7
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
                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================
          STATS
      ========================= */}
      <div
        className="
          absolute
          bottom-5
          left-4
          right-4
          z-20
          rounded-[24px]
          bg-[#2C0901]
          px-3
          py-2
          shadow-[0_20px_60px_rgba(80,60,40,0.10)]
          backdrop-blur-md
          text-white

          sm:bottom-7
          sm:left-6
          sm:right-6
          sm:px-4

          md:bottom-8
          md:left-auto
          md:right-10
          md:w-[62%]
          md:max-w-[850px]
          md:px-5
          md:py-3

          lg:bottom-10
          lg:right-16
          lg:w-[58%]
        "
      >
        <div
          className="
            grid
            grid-cols-3
            divide-x
            divide-[#DDD5CA]
          "
        >
          {/* =========================
              FOUNDED
          ========================= */}
          <div
            className="
              flex
              min-w-0
              items-center
              justify-center
              gap-2
              px-2
              py-3

              sm:gap-3
              sm:px-3

              md:justify-start
              md:px-4
              md:py-2
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F2EEE7]
                text-[#8B653E]

                sm:h-11
                sm:w-11

                md:h-[48px]
                md:w-[48px]
              "
            >
              <Building2
                size={20}
                strokeWidth={1.3}
              />
            </div>

            <div className="min-w-0">
              <p className="text-xl font-medium">
                2024
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-[11px]
                  uppercase
                  tracking-[0.1em]
                  text-[#ffff]

                  md:text-[13px]
                "
              >
                Founded
              </p>
            </div>
          </div>

          {/* =========================
              TEAM
          ========================= */}
          <div
            className="
              flex
              min-w-0
              items-center
              justify-center
              gap-2
              px-2
              py-3

              sm:gap-3
              sm:px-3

              md:justify-start
              md:px-4
              md:py-2
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F2EEE7]
                text-[#8B653E]

                sm:h-11
                sm:w-11

                md:h-[48px]
                md:w-[48px]
              "
            >
              <Users
                size={20}
                strokeWidth={1.3}
              />
            </div>

            <div className="min-w-0">
              <p className="text-xl font-medium">
                25+
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-[11px]
                  uppercase
                  tracking-[0.1em]
                  text-[#ffff]

                  md:text-[13px]
                "
              >
                Expert Team
              </p>
            </div>
          </div>

          {/* =========================
              QUALITY
          ========================= */}
          <div
            className="
              flex
              min-w-0
              items-center
              justify-center
              gap-2
              px-2
              py-3

              sm:gap-3
              sm:px-3

              md:justify-start
              md:px-4
              md:py-2
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F2EEE7]
                text-[#8B653E]

                sm:h-11
                sm:w-11

                md:h-[48px]
                md:w-[48px]
              "
            >
              <Star
                size={20}
                strokeWidth={1.3}
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xl font-medium">
                Quality
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-[11px]
                  uppercase
                  tracking-[0.1em]
                  text-[#ffff]

                  md:text-[13px]
                "
              >
                Our Commitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;