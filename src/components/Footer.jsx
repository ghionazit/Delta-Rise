// src/components/home/Footer.jsx

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full overflow-hidden bg-[#2C0901] text-[#F4F0E9]">

      <div className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 md:py-10 lg:px-16 lg:py-6">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.9fr] lg:gap-20">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#D1B18D]" />

              <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#D1B18D]">
                Delta Rise Engineering
              </p>
            </div>

            <h2 className="mt-7 max-w-[650px] font-serif text-5xl font-light leading-[0.92] tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Building ideas
              <br />
              <span className="text-[#D1B18D]">
                into reality.
              </span>
            </h2>


          </div>


          {/* NAVIGATION */}
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#D1B18D]">
              Explore
            </p>

            <nav className="mt-7 flex flex-col gap-4 text-sm">

              <a
                href="/"
                className="group flex w-fit items-center gap-3 text-sm text-[#F4F0E9]/70 transition-colors duration-300 hover:text-white"
              >
                Home

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>

              <a
                href="/projects"
                className="group flex w-fit items-center gap-3 text-sm text-[#F4F0E9]/70 transition-colors duration-300 hover:text-white"
              >
                Projects

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>

              <a
                href="/services"
                className="group flex w-fit items-center gap-3 text-sm text-[#F4F0E9]/70 transition-colors duration-300 hover:text-white"
              >
                Services

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>

              <a
                href="/about"
                className="group flex w-fit items-center gap-3 text-sm text-[#F4F0E9]/70 transition-colors duration-300 hover:text-white"
              >
                About

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>

              <a
                href="/contact"
                className="group flex w-fit items-center gap-3 text-sm text-[#F4F0E9]/70 transition-colors duration-300 hover:text-white"
              >
                Contact

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </a>

            </nav>
          </div>


          {/* CONTACT */}
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.3em] text-[#D1B18D]">
              Get in Touch
            </p>

            <div className="mt-7 space-y-5 text-sm">

              {/* Email */}
              <a
                href="mailto:info@deltariseengineering.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={15}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#D1B18D]"
                />

                <span className="text-sm leading-5 text-[#F4F0E9]/65 transition-colors duration-300 group-hover:text-white">
                  info@deltariseengineering.com
                </span>
              </a>


              {/* Phone */}
              <a
                href="tel:+251000000000"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={15}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#D1B18D]"
                />

                <span className="text-sm leading-5 text-[#F4F0E9]/65 transition-colors duration-300 group-hover:text-white">
                  +251 00 000 0000
                </span>
              </a>


              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#D1B18D]"
                />

                <span className="text-sm leading-5 text-[#F4F0E9]/65">
                  Addis Ababa, Ethiopia
                </span>
              </div>

            </div>


            {/* =====================================================
                SOCIAL ICONS
            ===================================================== */}
            <div className="mt-8 flex gap-2">

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F4F0E9]/20 text-[#F4F0E9]/70 transition-all duration-300 hover:border-[#D1B18D] hover:bg-[#D1B18D] hover:text-[#2C0901]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F4F0E9]/20 text-[#F4F0E9]/70 transition-all duration-300 hover:border-[#D1B18D] hover:bg-[#D1B18D] hover:text-[#2C0901]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.55.45-1 1-1z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F4F0E9]/20 text-[#F4F0E9]/70 transition-all duration-300 hover:border-[#D1B18D] hover:bg-[#D1B18D] hover:text-[#2C0901]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 8.5A2.5 2.5 0 1 0 6.5 3a2.5 2.5 0 0 0 0 5.5zM4 10h5v10H4V10zm8 0h4.8v1.36h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.67V20h-5v-3.78c0-.9-.02-2.05-1.25-2.05-1.25 0-1.44.98-1.44 1.99V20h-5V10z" />
                </svg>
              </a>

            </div>
          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <div className="my-2h-px bg-[#F4F0E9]/10 md:my-4" />


        {/* =====================================================
            BOTTOM
        ===================================================== */}
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

          {/* Logo */}
          <div>
            <h3 className="font-serif text-2xl font-light tracking-[0.08em]">
              DELTA RISE
            </h3>

            <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.3em] text-[#D1B18D]">
              Engineering PLC
            </p>
          </div>


          {/* Services */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.16em] text-[#F4F0E9]/40">
            <span>Architecture</span>
            <span>Interior</span>
            <span>Engineering</span>
            <span>Construction</span>
            <span>Aluminum & Metal Works</span>
          </div>


          {/* Copyright */}
          <p className="text-[9px] uppercase tracking-[0.16em] text-[#F4F0E9]/40">
            © {currentYear} Delta Rise Engineering PLC
          </p>

        </div>

      </div>


      {/* Bottom Accent */}
      <div className="h-1 w-full bg-[#D1B18D]" />

    </footer>
  );
}

export default Footer;