import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  Users,
} from "lucide-react";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";

const ContactHeader = () => {
  return (
    <>
      <section className="bg-[#F6F6F6] min-h-screen overflow-hidden -mx-6">
        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-[#111111] text-white ">
          {/* Purple Glow */}

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="absolute -top-56 -left-40 w-[700px] h-[700px] bg-violet-700/30 blur-[180px] rounded-full" />
            <div className="absolute -right-40 top-10 w-[650px] h-[650px] bg-blue-700/20 blur-[180px] rounded-full" />
          </div>

          {/* Background */}

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-20 max-w-7xl mx-auto px-6 sm:pt-36 pt-24 sm:pb-48 pb-36">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-center"
            >
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm mb-6">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                 &nbsp; • Contact Us
              </span>

              <h1 className="text-3xl md:text-7xl font-medium leading-tight">
                Have A Question Or
                <br />
                <span className="italic font-serif font-normal">
                  Just Want To Chat?
                </span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* ================= CARD ================= */}

        <div className="-mt-28 relative z-30 max-w-7xl mx-auto px-5 pb-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="bg-white rounded-[40px] shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-14 p-8 md:p-14">
              {/* ================= LEFT ================= */}

              <div className="sm:block hidden">
                <h2 className="text-5xl font-medium leading-tight">
                  Tell Us Your
                  <br />
                  Amazing
                  <br />
                  <span className="italic font-serif font-normal">
                    Project Here
                  </span>
                </h2>

                <div className="mt-12 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <Clock3 size={18} className="text-violet-700" />
                    </div>

                    <div>
                      <h4 className="font-semibold">Quick Response</h4>

                      <p className="text-gray-500">
                        Expect a response within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <ShieldCheck size={18} className="text-violet-700" />
                    </div>

                    <div>
                      <h4 className="font-semibold">NDA Available</h4>

                      <p className="text-gray-500">
                        Happy to sign an NDA before discussing your idea.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                      <Users size={18} className="text-violet-700" />
                    </div>

                    <div>
                      <h4 className="font-semibold">Dedicated Team</h4>

                      <p className="text-gray-500">
                        Work directly with designers and developers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video/Image Card */}

                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="mt-12 rounded-3xl overflow-hidden bg-[#141414] relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800"
                    alt=""
                    className="w-full h-64 object-cover opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute left-6 bottom-6">
                    <h3 className="text-white text-2xl font-semibold">
                      Let's Build Something Great
                    </h3>

                    <p className="text-white/70 mt-2">
                      Your next big idea starts with one conversation.
                    </p>
                  </div>

                  <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl">
                    ↗
                  </button>
                </motion.div>
              </div>

              {/* ================= FORM ================= */}

              <div>
                <ContactForm/>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactHeader;
