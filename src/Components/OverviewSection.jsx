import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OverviewSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enter animation
  const y = useTransform(scrollYProgress, [0, 0.2], [120, 0]);

  // Exit animation (when next section comes)
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.96]);

  return (
    <motion.section
      ref={ref}
      style={{ y, scale }}
      className="
        relative
        z-30
        bg-[#0D0D0D]
        rounded-t-[40px]
        md:rounded-t-[60px]
        -mt-20
        py-20
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            Overview
          </h2>

          <p className="text-gray-400 max-w-md text-base md:text-lg">
            We've passionately brought projects to life since our inception.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-4">
          {/* Projects */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              xl:col-span-3
              bg-[#1A1A1A]
              rounded-[24px]
              p-6
              min-h-[220px]
            "
          >
            <h3 className="text-white text-4xl md:text-5xl font-semibold">
              100+
            </h3>

            <p className="text-white text-lg font-medium mt-2">
              Projects
            </p>

            <p className="text-gray-500 mt-8 text-sm leading-relaxed">
              Across Branding, Packaging, SEO, Product Design and Development.
            </p>
          </motion.div>

          {/* Team Members */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              xl:col-span-3
              xl:row-span-2
              bg-violet-600
              rounded-[24px]
              p-6
              min-h-[460px]
              flex
              flex-col
              justify-between
            "
          >
            <h3 className="text-white text-5xl md:text-6xl font-semibold">
              16+
            </h3>

            <div>
              <h4 className="text-white text-2xl md:text-3xl font-semibold">
                Team Members
              </h4>

              <p className="text-white/80 mt-3 leading-relaxed">
                A dynamic team of creatives shaping ideas into stunning realities.
              </p>

              <button className="mt-6 bg-white text-violet-600 px-5 py-2 rounded-full font-medium">
                Know More
              </button>
            </div>
          </motion.div>

          {/* Laptop Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="
              xl:col-span-3
              bg-black
              rounded-[24px]
              overflow-hidden
              min-h-[220px]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931"
              alt="Laptop"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Impressions */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              xl:col-span-3
              xl:row-span-2
              bg-[#1A1A1A]
              rounded-[24px]
              p-6
              min-h-[460px]
              flex
              flex-col
              justify-between
            "
          >
            <h3 className="text-white text-5xl md:text-6xl font-semibold">
              5M+
            </h3>

            <div>
              <h4 className="text-white text-2xl md:text-3xl font-semibold">
                Impressions
              </h4>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Generated 5M+ impressions and over 3M+ views in one year.
              </p>
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="
              xl:col-span-3
              bg-black
              rounded-[24px]
              overflow-hidden
              min-h-[220px]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Clients */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              xl:col-span-3
              bg-[#F5F5F5]
              rounded-[24px]
              p-6
              min-h-[220px]
            "
          >
            <h3 className="text-black text-4xl md:text-5xl font-semibold">
              50+
            </h3>

            <p className="text-black text-lg font-medium mt-2">
              Clients
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Across Technology, Healthcare, Finance, and beyond.
            </p>
          </motion.div>
        </div>

        {/* About Bar */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="
            mt-5
            bg-[#1A1A1A]
            rounded-[24px]
            p-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/80?img=1"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-black"
              />
              <img
                src="https://i.pravatar.cc/80?img=2"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-black"
              />
              <img
                src="https://i.pravatar.cc/80?img=3"
                alt=""
                className="w-12 h-12 rounded-full border-2 border-black"
              />
            </div>

            <h3 className="text-white text-xl md:text-2xl font-semibold">
              About Us
            </h3>
          </div>

          <button className="bg-violet-600 text-white px-6 py-3 rounded-full font-medium hover:bg-violet-700 transition">
            Know More
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}