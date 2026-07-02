import { motion } from "framer-motion";

export default function WorkCard({ project, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: .25,
      }}
      transition={{
        duration: .7,
        delay: index * .08,
      }}
      whileHover={{
        y: -8,
      }}
      className="bg-[#F4F4F4] rounded-2xl p-3"
    >
      <div className="overflow-hidden rounded-xl">
        <motion.img
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: .4,
          }}
          src={project.image}
          className="w-full h-[360px] object-cover"
        />
      </div>

      <h3 className="mt-5 text-2xl font-semibold">
        {project.title}
      </h3>

      <p className="text-gray-500">
        {project.category}
      </p>
    </motion.div>
  );
}