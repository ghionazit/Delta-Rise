import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/#services" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#F4F0E9]">
      <nav className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="relative z-[60] flex items-center gap-[2px]"
        >
          <img
            src={logo}
            alt="Delta Rise Engineering PLC"
            className="h-auto w-[100px] object-contain md:w-[100px]"
          />

          <span className="-ml-6 text-xl font-bold tracking-[-0.03em] !text-[#371700] md:text-xl ">
            DELTA RISE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">

          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium tracking-wide !text-[#2C0901] transition-opacity duration-300 hover:opacity-50"
            >
              {link.name}
            </Link>
          ))}

          {/* Contact */}
          <Link
            to="/#contact"
            className="ml-3 flex items-center gap-2 rounded-full bg-[#371700] px-6 py-3 text-sm font-medium tracking-wide !text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2C0901]/90"
          >
            <span className="!text-white">
              Contact
            </span>

          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-[60] flex h-10 w-10 items-center justify-center !text-[#2C0901] md:hidden"
        >
          {open ? (
            <X size={26} strokeWidth={1.5} />
          ) : (
            <Menu size={26} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#F4F0E9] transition-all duration-500 md:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col justify-center px-8">

          {/* Mobile Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="absolute left-6 top-6 flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Delta Rise Engineering PLC"
              className="h-auto w-[150px] object-contain"
            />

            <span className="text-lg font-semibold tracking-[-0.03em] !text-[#2C0901]">
              DELTA RISE
            </span>
          </Link>

          {/* Mobile Navigation */}
          <div className="flex flex-col gap-5">
            {links.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 text-5xl font-light tracking-[-0.04em] !text-[#2C0901]"
              >
                <span className="text-xs !text-[#2C0901]/40">
                  0{index + 1}
                </span>

                <span className="!text-[#2C0901]">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Contact */}
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-12 flex w-fit items-center gap-2 rounded-full bg-[#1b2909] px-7 py-3.5 text-sm font-medium !text-white"
          >
            <span className="!text-white">
              Contact
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
              className="!text-white"
            />
          </Link>

        </div>
      </div>
    </header>
  );
}