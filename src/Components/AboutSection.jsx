import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  Users,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function AboutSection() {
  return (
    <section className="bg-black min-h-screen py-28">
        
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex bg-[#5B33D6] text-white text-sm px-4 py-2 rounded-full">
            About Us
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-white">
            Design Driven
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-gray-400 text-lg">
            We are the architects of brand strategy, crafting visual
            identities and narratives that resonate with audiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
          {/* Experience */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="xl:col-span-3 bg-[#1C1C1C] rounded-[28px] p-8"
          >
            <Award className="text-[#5B33D6]" size={42} />

            <h2 className="text-white text-5xl font-bold mt-8">
              100+
            </h2>

            <h3 className="text-white text-xl mt-2 font-medium">
              Projects
            </h3>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Across branding, packaging, SEO, web development and
              digital experiences.
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="xl:col-span-3 xl:row-span-2 bg-[#5B33D6] rounded-[28px] p-8 flex flex-col justify-between"
          >
            <Users size={48} className="text-white" />

            <div>
              <h2 className="text-white text-6xl font-bold">
                16+
              </h2>

              <h3 className="text-white text-3xl font-semibold mt-8">
                Team Members
              </h3>

              <p className="text-white/80 mt-4">
                A dynamic team of creatives, developers and strategists
                shaping ideas into meaningful experiences.
              </p>

              <button className="mt-6 bg-white text-[#5B33D6] px-6 py-3 rounded-full font-medium">
                Meet Team
              </button>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="xl:col-span-3 rounded-[28px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt=""
              className="w-full h-full object-cover min-h-[300px]"
            />
          </motion.div>

          {/* Impact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="xl:col-span-3 xl:row-span-2 bg-[#1C1C1C] rounded-[28px] p-8 flex flex-col justify-between"
          >
            <Briefcase
              size={44}
              className="text-[#5B33D6]"
            />

            <div>
              <h2 className="text-white text-6xl font-bold">
                5M+
              </h2>

              <h3 className="text-white text-3xl font-semibold mt-4">
                Impressions
              </h3>

              <p className="text-gray-400 mt-4">
                Generated millions of impressions through creative
                storytelling, branding and marketing campaigns.
              </p>
            </div>
          </motion.div>

          {/* Story Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="xl:col-span-3 bg-white border border-gray-200 rounded-[28px] p-8"
          >
            <Sparkles
              size={42}
              className="text-[#5B33D6]"
            />

            <h3 className="text-3xl font-semibold mt-6">
              Our Story
            </h3>

            <p className="text-gray-500 mt-4 leading-relaxed">
              We started with a simple mission: build brands that
              people remember. Today we help businesses stand out
              through strategy, design and technology.
            </p>
          </motion.div>

          {/* Clients */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="xl:col-span-3 bg-white border border-gray-200 rounded-[28px] p-8"
          >
            <h2 className="text-5xl font-bold text-black">
              50+
            </h2>

            <h3 className="text-xl font-medium mt-2">
              Clients
            </h3>

            <p className="text-gray-500 mt-4">
              Trusted by startups, enterprises and growing businesses
              worldwide.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="mt-6 bg-[#1C1C1C] rounded-[28px] p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Let's Build Something Amazing
            </h2>

            <p className="text-gray-400 mt-2">
              Partner with us to create memorable digital experiences.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#5B33D6] text-white px-6 py-3 rounded-full font-medium">
            Get Started
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}