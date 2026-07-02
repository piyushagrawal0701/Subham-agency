import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About",
      to: "/about",
    },
    // {
    //   label: "Services",
    //   to: "/services",
    // },
    {
      label: "Our Work",
      to: "/our-work",
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999]">
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 pt-6">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <a href="/" className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M6 6H18V18H6z" />
                  <path d="M22 6H34V18H22z" />
                  <path d="M6 22H18V34H6z" />
                  <path d="M22 22H34V34H22z" />
                </svg>
              </div>

              <span className="text-3xl font-semibold">Subham</span>
            </a>

            {/* Desktop Nav */}

            <nav
              className="
                hidden
                md:flex
                absolute
                left-1/2
                -translate-x-1/2
                items-center
                gap-10
                bg-white/5
                backdrop-blur-xl
                border
                border-white/5
                rounded-full
                px-8
                py-4
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="
                    text-white
                    text-lg
                    font-medium
                    transition
                    hover:text-violet-400
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}

            <div className="hidden md:block">
              <a
                href="https://wa.me/+919334076843?text=Hi,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
                  hover:cursor-pointer
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  text-white
                  hover:bg-white/10
                  transition-all
                "
                >
                  Connect
                </button>
              </a>
            </div>

            {/* Mobile Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="
                md:hidden
                text-white
                w-12
                h-12
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
              "
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[1000]
              bg-black/90
              backdrop-blur-xl
            "
          >
            <motion.div
              initial={{
                y: -50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -50,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                h-full
                flex
                flex-col
                items-center
                justify-center
                gap-10
              "
            >
              <button
                onClick={() => setIsOpen(false)}
                className="
                  absolute
                  top-8
                  right-6
                  text-white
                "
              >
                <X size={32} />
              </button>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-white
                    text-3xl
                    font-semibold
                    hover:text-violet-400
                    transition
                  "
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/+919334076843?text=Hi,%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20my%20project.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
                  mt-6
                  px-8
                  py-4
                  bg-violet-600
                  text-white
                  rounded-full
                "
                >
                  Connect
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
