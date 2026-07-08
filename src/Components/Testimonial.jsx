import { useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title: "High Quality Work",
    text: "The social media and Google Ads campaigns have been extremely effective and engaging, resulting in increased brand awareness and customer engagement.",
    name: "Vikram Shastry",
    role: "CEO, BLACK LOTUS",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    title: "Exceeded our expectations",
    text: "Subham has been very instrumental in designing various marketing materials. They created beautiful brochures, flyers and digital creatives that helped us stand out.",
    name: "Dr. Pooja Malhotra",
    role: "Co-Founder, VNA Hospital",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    title: "Creative Team",
    text: "Working with Subham was smooth from beginning to end. Their communication and design execution exceeded our expectations.",
    name: "Rahul Sharma",
    role: "Founder, PixelCraft",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    title: "Amazing Branding Experience",
    text: "Our complete brand identity was transformed beautifully. We received exactly what we imagined and even more.",
    name: "Priya Mehta",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/150?img=48",
  },
  {
    title: "Highly Recommended",
    text: "They understand branding deeply and deliver premium quality work with excellent attention to detail.",
    name: "Amit Jain",
    role: "Startup Founder",
    image: "https://i.pravatar.cc/150?img=14",
  },
];

export default function Testimonial() {
  const autoplay = Autoplay({
    delay: 2000,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplay],
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-white py-28 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-semibold">Testimonials</h2>
        </div>

        <div className="relative">
          {/* Left Blur */}
          <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none  max-md:hidden" />

          {/* Right Blur */}
          <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none max-md:hidden" />

          {/* ================= Desktop Carousel ================= */}
          <div className="hidden md:block">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.concat(testimonials).map((item, index) => (
                  <div
                    key={index}
                    className="
                    flex-[0_0_85%]
                    md:flex-[0_0_58%]
                    xl:flex-[0_0_40%]
                    px-5
                  "
                  >
                    <motion.div
                      // whileHover={{
                      //   y: -8,
                      //   scale: 1.02,
                      // }}
                      // transition={{
                      //   duration: .3,
                      // }}
                      className="
                      rounded-[36px]
                      bg-[#F5F5F5]
                      p-10
                      h-full
                    "
                    >
                      <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center mb-8">
                        <Quote size={22} className="text-white" />
                      </div>

                      <h3 className="text-3xl font-semibold leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-lg mt-6 leading-9">
                        {item.text}
                      </p>

                      <div className="flex items-center gap-5 mt-10">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />

                        <div>
                          <h4 className="font-semibold text-2xl">
                            {item.name}
                          </h4>

                          <p className="text-gray-500 mt-1">{item.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= Mobile Cards ================= */}

          <div className="md:hidden px-5 space-y-5">
            {testimonials.slice(0, 3).map((item, index) => (
              <div key={index} className="bg-[#F5F5F5] rounded-[26px] p-6">
                <h3 className="text-2xl font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">{item.text}</p>

                <div className="flex items-center gap-3 mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>

                    <p className="text-sm text-gray-500 uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
