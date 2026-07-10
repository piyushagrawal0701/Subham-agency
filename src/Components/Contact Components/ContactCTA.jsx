import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const clients = [
  "Microsoft",
  "Rakuten Viber",
  "Property Finder",
  "Pepsi",
  "GoodGreens",
  "Liberate Labs",
  "Edvive",
  "KSL",
  "Music",
  "Carbon",
  "Camera.io",
  "Compass",
  "CPG Synergy",
  "66",
  "DocuSeal",
];

export default function ContactCTA() {
  return (
    <section className="bg-[#080808] text-white py-24 overflow-hidden relative">

      {/* Background Pattern */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.9) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Purple Glow */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-violet-700/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Client Logos */}

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-8 items-center justify-items-center mb-24"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-white/60 text-sm md:text-base font-medium hover:text-white transition"
            >
              {client}
            </div>
          ))}
        </motion.div> */}

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="flex justify-center"
        >
          <span className="border border-green-500 text-green-400 rounded-full px-5 py-2 text-sm">
            Connect Now
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="text-center text-2xl md:text-5xl font-medium mt-8 leading-tight"
        >
          Get In Touch Now For Business Or
          <br />
          <span className="italic font-serif font-normal">
            Career Opportunities!
          </span>
        </motion.h2>

        {/* Contact Cards */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
          className="grid md:grid-cols-2 gap-10 mt-12 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <p className="text-white/50 mb-3">
              Project Inquiries? Let's Team Up.
            </p>

            <a
              href="mailto:hello@youragency.com"
              className="text-xl font-semibold underline underline-offset-4 hover:text-violet-400 transition"
            >
              hello@youragency.com
            </a>
          </div>

          <div className="text-center">
            <p className="text-white/50 mb-3">
              Join Our Amazing Team.
            </p>

            <a
              href="mailto:career@youragency.com"
              className="text-xl font-semibold underline underline-offset-4 hover:text-violet-400 transition"
            >
              career@youragency.com
            </a>
          </div>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
          className="flex justify-center mt-20"
        >
          <a
            href="https://wa.me/919999999999?text=Hi,%20I%20visited%20your%20website%20and%20want%20to%20discuss%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="group bg-violet-600 hover:bg-violet-700 transition px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
          >
            Let's Talk

            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}