import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    text: "PrebuiltUI helped us move faster without sacrificing design quality. The components feel production-ready.",
    name: "Cristofer Levin",
    role: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "The attention to detail in PrebuiltUI is impressive. Saved me hours of repetitive work.",
    name: "Rohan Mehta",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "We were able to ship faster using PrebuiltUI. The consistency across components made UI feel polished.",
    name: "Jason Kim",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
  },
  {
    text: "PrebuiltUI feels like it was built by people who actually ship products.",
    name: "Alex Turner",
    role: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200",
  },
  {
    text: "Helped us maintain design consistency across multiple projects.",
    name: "Sofia Martinez",
    role: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
  {
    text: "Our team productivity improved noticeably after adopting PrebuiltUI.",
    name: "Daniel Wong",
    role: "UI Designer",
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
  },
];

export default function Testimonial() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2], [120, 0]);

  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.96]);

  const rows = [
    {
      start: 0,
      end: 3,
      className: "animate-scroll",
    },
    {
      start: 3,
      end: 6,
      className: "animate-scroll-reverse",
    },
  ];

  const renderCard = (testimonial, index) => (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      className="
      bg-[#fff]
      border
      border-gray-300
      rounded-2xl
      p-6
      shrink-0
      w-[350px]
      "
    >
      <div className="flex mb-5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">
            ★
          </span>
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="text-black font-medium">
            {testimonial.name}
          </h4>

          <p className="text-gray-500 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes scrollReverse {
            from {
              transform: translateX(-50%);
            }
            to {
              transform: translateX(0);
            }
          }

          .animate-scroll {
            animation: scroll 25s linear infinite;
          }

          .animate-scroll-reverse {
            animation: scrollReverse 25s linear infinite;
          }
        `}
      </style>

      <motion.section
        ref={ref}
        style={{ y, scale }}
        className="
          relative
          z-50
          bg-[#FAFAFA]
          rounded-t-[60px]
          -mt-20
          py-24
          overflow-hidden
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                bg-violet-100
                text-violet-700
                text-sm
                font-medium
                mb-5
              "
            >
              Loved By Clients
            </div>

            <h2 className="text-4xl md:text-7xl font-semibold text-black">
              What People Say
            </h2>

            <p className="text-gray-500 mt-5 max-w-xl mx-auto">
              Real feedback from founders, startups, agencies and businesses
              we've worked with.
            </p>
          </motion.div>

          {/* Rows */}

          <div className="space-y-6">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />

                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

                <div
                  className={`flex gap-6 ${row.className}`}
                >
                  {[
                    ...testimonials.slice(row.start, row.end),
                    ...testimonials.slice(row.start, row.end),
                  ].map((testimonial, index) =>
                    renderCard(testimonial, index)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}