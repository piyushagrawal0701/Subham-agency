import { motion } from "framer-motion";

export default function WorkHero({ title, subtitle }) {
  return (
    <section
      className="
      relative
      h-[520px]
      overflow-hidden
      rounded-[45px]
      bg-[#141414]
      "
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"/>

      <motion.div
        initial={{
          opacity:0,
          y:60
        }}
        animate={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:.8
        }}
        className="
        flex
        h-full
        items-center
        justify-center
        text-center
        px-6
        "
      >
        <div>

          <span className="inline-block bg-violet-600 px-5 py-2 rounded-full text-white text-sm">
            Our Work
          </span>

          <h1 className="mt-6 text-4xl md:text-8xl font-semibold text-white">
            {title}
          </h1>

          <p className="mt-8 sm:text-xl text-md text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

        </div>
      </motion.div>
    </section>
  );
}