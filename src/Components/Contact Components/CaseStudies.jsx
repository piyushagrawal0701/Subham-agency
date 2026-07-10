import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = {
  uiux: {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
    person: "Sofia Gouveia",
    role: "Design Director",
    company: "Esdiac",
    logo: "🖥️",
    review:
      "Working with our design team was an excellent experience. Every screen felt polished, user-friendly and conversion focused. Their attention to detail exceeded our expectations.",
  },

  web: {
    title: "Website Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    person: "Michael Brown",
    role: "Founder",
    company: "Nova Studio",
    logo: "🌐",
    review:
      "The website completely transformed our online presence. Performance improved, visitors stayed longer and our conversion rate increased significantly after launch.",
  },

  social: {
    title: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
    person: "Emma Wilson",
    role: "Marketing Head",
    company: "GrowthLab",
    logo: "📱",
    review:
      "Their social creatives helped us stand out across every platform. Engagement grew rapidly and our campaigns started generating measurable business results.",
  },
};

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("uiux");

  const current = projects[activeTab];

  return (
    <section className="bg-white sm:py-20 py-16 sm:px-6 px-4 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block border border-green-500 text-green-600 rounded-full px-5 py-2 text-sm font-medium">
            Client Stories
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight max-md:px-2">
            Success{" "}
            <span className="italic font-serif font-normal">Stories</span>{" "}
            That{" "}
            <span className="italic font-serif font-normal">Inspire Us</span>
          </h2>
        </div>

        {/* Tabs */}

        <div className="flex justify-center sm:mt-12 mt-6">
          <div className="flex flex-wrap justify-center gap-3 bg-gray-100 rounded-[10px] sm:px-6  px-2 py-4">
            {[
              {
                id: "uiux",
                label: "UI / UX",
              },
              {
                id: "web",
                label: "Web Design",
              },
              {
                id: "social",
                label: "Social Media",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all hover:cursor-pointer duration-300
                ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-lg"
                    : "hover:bg-white text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mt-16"
          >
            <div className="grid lg:grid-cols-2 overflow-hidden rounded-[16px] bg-[#F6F6F6] shadow-xl">
              {/* Left Image */}

              <div className="relative sm:h-[500px] h-[350px] overflow-hidden">
                <img
                  src={current.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right */}

              <div className="relative flex items-center justify-center p-3 lg:p-14">
                {/* Blur */}

                <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent" />

                <div className="relative bg-white rounded-3xl shadow-2xl sm:p-8 p-6 max-w-md w-full">
                  {/* Person */}

                  <div className="flex items-center gap-4">
                    <img
                      src={`https://i.pravatar.cc/150?u=${activeTab}`}
                      className="w-14 h-14 rounded-full object-cover"
                      alt=""
                    />

                    <div>
                      <h4 className="text-xl font-semibold">
                        {current.person}
                      </h4>

                      <p className="text-gray-500">
                        {current.role} • {current.company}
                      </p>
                    </div>
                  </div>

                  {/* Review */}

                  <p className="mt-8 text-gray-700 leading-8 text-lg">
                    {current.review}
                  </p>

                  {/* Bottom */}

                  <div className="mt-10 flex justify-between items-center max-md:flex-wrap gap-0 max-md:gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-2xl">
                        {current.logo}
                      </div>

                      <span className="font-semibold text-lg">
                        {current.company}
                      </span>
                    </div>

                    <button className="group px-6 py-3 rounded-full border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transition-all flex items-center gap-2">
                      Book a Call

                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}