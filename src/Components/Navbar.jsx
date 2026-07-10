import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const workItems = [
    {
      title: "UI/UX Design",
      desc: "Design systems, mobile & web experiences",
      path: "/our-work/branding",
    },
    {
      title: "AI Design",
      desc: "AI visuals & creative assets",
      path: "/our-work/social",
    },
    {
      title: "Website Development",
      desc: "Modern websites & web applications",
      path: "/our-work/web",
    },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="px-6 md:px-10 py-6">
          <div className="flex items-center justify-between relative">
            {/* Logo */}

            <Link to="/" className="flex items-center gap-3 text-white">
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
            </Link>

            {/* Desktop Navbar */}

            <nav
              className="
              hidden
              md:flex
              absolute
              left-1/2
              -translate-x-1/2
              items-center
              gap-10
              px-8
              py-4
              rounded-full
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
            "
            >
              <Link
                to="/"
                className="text-white hover:text-violet-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-white hover:text-violet-400 transition"
              >
                About
              </Link>

              {/* Dropdown */}

              <div
                className="relative"
                onMouseEnter={() => setWorkOpen(true)}
                onMouseLeave={() => setWorkOpen(false)}
              >
                <button className="flex items-center gap-2 text-white hover:text-violet-400 transition">
                  Our Work
                  <ChevronDown
                    size={18}
                    className={`transition duration-300 ${
                      workOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {workOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-7
                      w-80
                      rounded-3xl
                      overflow-hidden
                      bg-[#181818]
                      border
                      border-white/10
                      shadow-2xl
                    "
                    >
                      <div className="p-3">
                        {workItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={() => setWorkOpen(false)}
                            className="
                            block
                            rounded-2xl
                            p-5
                            hover:bg-white/5
                            transition
                          "
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="text-white font-semibold text-lg">
                                  {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mt-1">
                                  {item.desc}
                                </p>
                              </div>

                              <motion.div
                                whileHover={{
                                  x: 4,
                                }}
                                className="text-gray-500 text-xl"
                              >
                                →
                              </motion.div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop Button */}

            <div className="hidden md:block">
              <Link to="/contact">
                <button
                  className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  text-white
                  hover:bg-white/10
                  transition
                  hover:cursor-pointer
                "
                >
                  Connect
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setIsOpen(true)}
              className="
              md:hidden
              w-12
              h-12
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
            "
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[999]
              bg-black/95
              backdrop-blur-xl
            "
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="
                h-full
                flex
                flex-col
                items-center
                justify-center
                px-8
                py-10
              "
            >
              {/* Close */}

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

              {/* Home */}

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="
                 text-3xl
                  font-semibold
                  text-white
                  hover:text-violet-400
                  transition
                  mb-8
                "
              >
                Home
              </Link>

              {/* About */}

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="
                 text-3xl
                  font-semibold
                  text-white
                  hover:text-violet-400
                  transition
                  mb-10
                "
              >
                About
              </Link>

              {/* Our Work */}

              <div className="w-full max-w-sm">
                <h2 className="text-centertext-3xl font-semibold text-white mb-6">
                  Our Work
                </h2>

                <div className="space-y-4">
                  {workItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="
                        block
                        rounded-2xl
                        bg-white/5
                        border
                        border-white/10
                        p-5
                        hover:bg-white/10
                        transition
                      "
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white text-lg font-semibold">
                            {item.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-1">
                            {item.desc}
                          </p>
                        </div>

                        <span className="text-gray-500 text-2xl">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Connect */}

              <Link to="/contact" rel="noopener noreferrer" className="mt-12">
                <button
                  className="
                    px-10
                    py-4
                    rounded-full
                    bg-violet-600
                    hover:bg-violet-700
                    text-white
                    hover:cursor-pointer
                    transition
                  "
                >
                  Connect
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
