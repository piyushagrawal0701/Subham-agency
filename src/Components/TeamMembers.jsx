import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Piyush Agrawal",
    role: "Co-Founder & Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGCoOXcvToLkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727718133917?e=2147483647&v=beta&t=TqtXFQeJqozgO2K66T1f6uy2P9Kr-DSt-Ntt50dmzIA",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Aman Sharma",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Rahul Verma",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Priya Gupta",
    role: "Brand Strategist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Rohit Jain",
    role: "UI Designer",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=1200",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Ananya Singh",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200",
    linkedin: "#",
    portfolio: "#",
  },
];

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
    },
  }),
};

export default function TeamMembers() {
  return (
    <section className="bg-[#F8F8F8] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.2em] text-gray-500 uppercase">
            Our People
          </span>

          <h2 className="mt-4 text-5xl md:text-7xl font-medium text-black">
            Meet The Team
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
            The talented minds behind every successful project,
            bringing creativity, strategy, and innovation together.
          </p>
        </motion.div>

        {/* Team Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // whileHover={{ y: -8 }}
              className="group"
            >
              {/* Image */}

              <div className="relative overflow-hidden rounded-[15px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full
                    h-[354px]
                    object-cover
                    transition-all
                    duration-700
                   
                  "
                />

              
              </div>

              {/* Content */}

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-black">
                  {member.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}