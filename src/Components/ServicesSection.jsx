import { useRef } from "react";
import {
  Fingerprint,
  MousePointerClick,
  Play,
  Sparkles,
  Palette,
  Infinity,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Clients from "./Clients";

const services = [
  {
    title: "Branding",
    description:
      "Visual Identity, Brand Style Guide & Collateral Design",
    icon: Fingerprint,
  },
  {
    title: "Graphic Design",
    description:
      "Social Media Posts, Pitch Decks, Ad Sets & More",
    icon: MousePointerClick,
  },
  {
    title: "Video & Animation",
    description: "Short and Long form video content",
    icon: Play,
  },
  {
    title: "AI Image Gen",
    description:
      "Transforming Concepts into Stunning Visuals",
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Section enters from below
  const y = useTransform(scrollYProgress, [0, 0.2], [120, 0]);

  // Section scales down slightly when next section arrives
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.96]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      style={{ y, scale }}
      className="
        relative
        z-20
        bg-[#FAFAFA]
        rounded-t-[40px]
        md:rounded-t-[60px]
        -mt-20
        pt-16
        md:pt-24
        pb-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Clients />

        {/* Heading */}
        <div className="text-center mb-14 mt-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black">
            Our Services
          </h2>

          <p className="mt-5 text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We specialise in creating eye-catching visuals, modern brand
            identities, innovative products, and immersive websites.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="
                  bg-[#F3F3F3]
                  rounded-[28px]
                  p-6 md:p-6 
                  min-h-[220px]
                  flex
                  flex-col
                  justify-between
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <Icon
                  className="text-violet-600 w-14 h-14 md:w-16 md:h-16"
                  strokeWidth={1.5}
                />

                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* UX Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-[#F3F3F3]
              rounded-[28px]
              p-6 md:p-8
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
              min-h-[180px]
            "
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-violet-600 flex items-center justify-center shrink-0">
              <Palette
                size={50}
                strokeWidth={1.5}
                className="text-violet-600"
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                UX Design & Development
              </h3>

              <p className="mt-2 text-gray-500 leading-relaxed">
                App Design, Prototyping, Interaction Design, Motion Design &
                App Development.
              </p>
            </div>
          </motion.div>

          {/* SEO Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
              bg-[#F3F3F3]
              rounded-[28px]
              p-6 md:p-8
              flex
              flex-col
              sm:flex-row
              items-start
              sm:items-center
              gap-6
              min-h-[180px]
            "
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-violet-600 flex items-center justify-center shrink-0">
              <Infinity
                size={50}
                strokeWidth={1.5}
                className="text-violet-600"
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                Social SEO
              </h3>

              <p className="mt-2 text-gray-500 leading-relaxed">
                Skyrocket your Social Media Presence on Autopilot with little
                to no additional time or effort required.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button
            className="
              group
              flex
              items-center
              bg-black
              text-white
              rounded-full
              pl-2
              pr-5
              py-2
              hover:scale-105
              transition-all
              duration-300
            "
          >
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center mr-3">
              <ArrowRight size={18} />
            </div>

            <span className="font-medium">
              Learn More
            </span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}