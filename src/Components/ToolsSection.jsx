import { motion } from "framer-motion";

const tools = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Figma",
    icon: "https://cdn.simpleicons.org/figma",
  },
  {
    name: "Photoshop",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Illustrator",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Premiere",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "After Effects",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "WordPress",
    icon: "https://cdn.simpleicons.org/wordpress",
  },
  {
    name: "Shopify",
    icon: "https://cdn.simpleicons.org/shopify",
  },
  {
    name: "Webflow",
    icon: "https://cdn.simpleicons.org/webflow",
  },
  {
    name: "Framer",
    icon: "https://cdn.simpleicons.org/framer",
  },
  {
    name: "Slack",
    icon: "https://cdn.simpleicons.org/react",
  },
  {
    name: "Notion",
    icon: "https://cdn.simpleicons.org/notion",
  },
  {
    name: "YouTube",
    icon: "https://cdn.simpleicons.org/youtube",
  },
  {
    name: "Meta",
    icon: "https://cdn.simpleicons.org/meta",
  },
  {
    name: "Google Analytics",
    icon: "https://cdn.simpleicons.org/googleanalytics",
  },
];

const logoVariants = {
  hidden: {
    opacity: 0,
    y: -250,
    scale: 0.7,
    rotate: -15,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 140,
      damping: 12,
    },
  }),
};

export default function ToolsSection() {
  return (
    <section
      className="
        relative
        z-40
        bg-[#0D0D0D]
        rounded-t-[60px]
        -mt-20
        py-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Badge */}

        <div className="flex justify-center">
          <div className="bg-violet-600 text-white px-5 py-2 rounded-full text-sm font-medium">
            Applications
          </div>
        </div>

        {/* Heading */}

        <h2
          className="
            text-center
            text-white
            text-5xl
            md:text-7xl
            font-semibold
            mt-8
          "
        >
          Tools We Use
        </h2>

        {/* Floating Logos */}

        <div
          className="
            mt-24
            grid
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-5
            lg:grid-cols-6
            gap-8
          "
        >
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={logoVariants}
              whileHover={{
                y: -10,
                scale: 1.1,
              }}
              className="
                w-24
                h-24
                md:w-28
                md:h-28
                rounded-full
                bg-[#1A1A1A]
                flex
                items-center
                justify-center
                mx-auto
                shadow-lg
                cursor-pointer
              "
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-12 h-12 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}