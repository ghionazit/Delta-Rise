import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden  bg-[#F4F0E9] px-6 py-14 md:px-10 md:py-18 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1350px]">

        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#A8895B]" />

          <span className="text-xl font-medium uppercase tracking-[0.3em] text-[#A8895B]">
            Contact
          </span>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

          {/* LEFT SIDE */}
          <div className="rounded-[24px] bg-[#2C0901] p-7 text-[#F8F5EF] md:p-8 lg:p-9">

            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#A8895B]">
              Start a conversation
            </p>

            <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Let's create
              <br />
              <span className="text-[#A8895B]">
                something
                <br />
                meaningful.
              </span>
            </h2>

            <p className="mt-6 max-w-[360px] text-sm leading-6 text-[#F8F5EF] md:text-base">
              Have a project in mind? Whether you're planning a new
              building, transforming an interior, or need technical
              expertise, we'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="mt-9 space-y-5">

              <a
                href="mailto:info@deltarise.com"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A8895B] text-[#A8895B] transition-all duration-300 group-hover:bg-[#A8895B] group-hover:text-[#2C0901]">
                  <Mail size={16} strokeWidth={1.3} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#F8F5EF]">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-[#F8F5EF]/90">
                    info@deltarise.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+251900000000"
                className="group flex items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A8895B]/25 text-[#A8895B] transition-all duration-300 group-hover:bg-[#A8895B] group-hover:text-[#2C0901]">
                  <Phone size={16} strokeWidth={1.3} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#F8F5EF]/40">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#F8F5EF]/90">
                    +251 900 000 000
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#A8895B]/25 text-[#A8895B]">
                  <MapPin size={16} strokeWidth={1.3} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-[#F8F5EF]/40">
                    Studio
                  </p>

                  <p className="mt-1 text-sm text-[#F8F5EF]/90">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-[24px] border border-[#DED9CF] bg-white p-7 md:p-8 lg:p-9">

            <div className="mb-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#A8895B]">
                Project Inquiry
              </p>

              <h3 className="mt-2 font-serif text-3xl font-light tracking-[-0.03em] text-[#2C0901] md:text-4xl">
                Tell us about your project.
              </h3>
            </div>

            <form className="space-y-6">

              {/* Name + Email */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0906]">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-[#DED9CF] bg-transparent px-0 py-2.5 text-base text-[#171717] outline-none transition-all duration-300 placeholder:text-[#0a0906] focus:border-[#2C0901]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0906]">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border-b border-[#DED9CF] bg-transparent px-0 py-2.5 text-base text-[#171717] outline-none transition-all duration-300 placeholder:text-[#0a0906] focus:border-[#2C0901]"
                  />
                </div>

              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0906]">
                  Phone{" "}
                  <span className="normal-case tracking-normal text-[#0a0906]">
                    (optional)
                  </span>
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full border-b border-[#DED9CF] bg-transparent px-0 py-2.5 text-base text-[#171717] outline-none transition-all duration-300 placeholder:text-[#0a0906] focus:border-[#2C0901]"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0906]">
                  Project Type
                </label>

                <select
                  defaultValue=""
                  className="w-full border-b border-[#DED9CF] bg-transparent px-0 py-2.5 text-base text-[#0a0906] outline-none transition-all duration-300 focus:border-[#2C0901]"
                >
                  <option value="" disabled>
                    Select project type
                  </option>

                  <option value="architecture">
                    Architecture
                  </option>

                  <option value="engineering">
                    Engineering
                  </option>

                  <option value="interior">
                    Interior Design
                  </option>

                  <option value="visualization">
                    3D Visualization
                  </option>

                  <option value="planning">
                    Planning
                  </option>

                  <option value="construction">
                    Construction
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-[0.14em] text-[#0a0906]">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full resize-none border-b border-[#DED9CF] bg-transparent px-0 py-2.5 text-base leading-6 text-[#171717] outline-none transition-all duration-300 placeholder:text-[#0a0906] focus:border-[#2C0901]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2C0901] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-[#F8F5EF] transition-all duration-300 hover:bg-[#A8895B] hover:shadow-[0_10px_25px_rgba(44,9,1,0.15)]"
              >
                Send Inquiry

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;