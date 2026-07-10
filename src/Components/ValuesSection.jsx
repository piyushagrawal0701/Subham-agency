import { motion } from "framer-motion";

const values = [
  {
    label: "OUR VALUES",
    title: "Curiosity\n& Creativity",
    description:
      "We ask a lot of questions. Then we make stuff no one's made before. We see curiosity as fuel to dig deeper, ask better questions, and never settle for the obvious. Together, they keep our work honest, original, and alive.",
  },
  {
    label: "OUR MISSION",
    title: "To Help Our\nClients Win",
    description:
      "Our mission is to build the kind of design that doesn't just look great — it works. Whether it's a product launch, a rebrand, or a bold new site, we back our clients with thinking that's sharp and visuals that cut through.",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2,
    },
  }),
};

export default function ValuesSection() {
  return (
    <section
      className="
      relative
      z-30
      bg-[#F8F8F8]
      rounded-t-[60px]
      pt-24  md:pt-20
      "
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {values.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className={`
              grid
              lg:grid-cols-2
              gap-4
              lg:gap-10
              items-start
              ${
                index !== values.length - 1
                  ? "pb-14 md:pb-10"
                  : ""
              }
            `}
          >
            {/* Left */}
            <div>
              <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
                {item.label}
              </span>

              <h2
                className="
                mt-6
                text-3xl
                md:text-4xl
                leading-[1]
                font-medium
                text-black
                whitespace-pre-line
                "
              >
                {item.title}
              </h2>
            </div>

            {/* Right */}
            <div className="lg:pt-8">
              <p
                className="
                text-gray-600
                text-md
                md:text-md
                leading-relaxed
                max-w-2xl
                "
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}