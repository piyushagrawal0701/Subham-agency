import {
  ArrowUpRight,
//   Instagram,
//   Linkedin,
//   Dribbble,
//   Twitter,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0B0B] text-white">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-14 pt-20 sm:pb-56 pb-24">

        <div className="flex max-md:flex-col justify-between gap-20">

          {/* LEFT */}

          <div>

            <Link
              to="/"
              className="text-5xl font-semibold tracking-tight"
            >
              Subham
            </Link>

            <div className="flex items-center gap-4 mt-10">

              <button className="bg-violet-500 text-white px-6 py-3 rounded-full hover:cursor-pointer hover:bg-violet-600 transition">
                Get in Touch
              </button>

            </div>

            <a
              href="mailto:hello@subham.com"
              className="flex items-center gap-3 mt-10 text-gray-300 hover:text-violet-400 transition"
            >
              <ArrowUpRight size={18} />

              hello@subham.com
            </a>

          </div>

            {/* RIGHT */}

         <div className="flex gap-20 max-lg:flex-col">
             <div>

            <h4 className="uppercase tracking-widest text-sm flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-violet-500" />

              Company

            </h4>

            <div className="flex flex-col mt-8 gap-y-5 text-gray-500">

              <Link to="/about" className="hover:text-violet-400">
                About
              </Link>
            

              <Link to="/" className="hover:text-violet-400">
                Services
              </Link>

              

              <Link to="/our-work/branding" className="hover:text-violet-400">
                Work
              </Link>

              <Link to="/contact" className="hover:text-violet-400">
                Contact
              </Link>

            </div>

          </div>


          <div>

            <h4 className="uppercase tracking-widest text-sm flex items-center gap-2">

              <span className="w-2 h-2 rounded-full bg-violet-500" />

              Socials

            </h4>

            <div className="mt-8 space-y-5 text-gray-500">

              <a
                href="#"
                className="flex items-center gap-3 hover:text-violet-400"
              >
                Dribbble
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-violet-400"
              >
                Linkedin
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-violet-400"
              >
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-violet-400"
              >
                X (Twitter)
              </a>

            </div>

          </div>
         </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-400 text-sm">

          <p>
            © {new Date().getFullYear()} Subham. All rights reserved.
          </p>

          {/* <div className="flex gap-8">

            <Link to="/">
              Privacy Policy
            </Link>

            <Link to="/">
              Refund Policy
            </Link>

            <Link to="/">
              Terms & Conditions
            </Link>

          </div> */}

        </div>

      </div>

      {/* Huge Watermark */}

      <div
        className="
          absolute
          sm:bottom-[-30px]
          bottom-[10px]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          pointer-events-none
          select-none
          text-[60px]
          sm:text-[60px]
          md:text-[140px]
          lg:text-[220px]
          xl:text-[280px]
          font-normal
          leading-none
          text-white/[0.08]
        "
      >
        Subham®
      </div>

    </footer>
  );
}