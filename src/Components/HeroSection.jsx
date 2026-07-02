import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <>
      <motion.section
        className="
    relative
    z-20
    rounded-t-[60px]
    -mt-24
    pt-24
  "
      >
        <section class="flex flex-col items-center text-white text-sm ">
          <svg
            class="absolute -z-10 w-screen -mt-40 md:mt-0"
            width="1440"
            height="676"
            viewBox="0 0 1440 676"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="-92"
              y="-948"
              width="1624"
              height="1624"
              rx="812"
              fill="url(#a)"
            />
            <defs>
              <radialGradient
                id="a"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="rotate(90 428 292)scale(812)"
              >
                <stop offset=".63" stop-color="#372AAC" stop-opacity="0" />
                <stop offset="1" stop-color="#372AAC" />
              </radialGradient>
            </defs>
          </svg>
          

          <div class="flex items-center mt-32 gap-2 border border-slate-600 text-gray-50 rounded-full px-4 py-2">
            <div class="size-2.5 bg-green-500 rounded-full"></div>
            <span>Prioritizing your brand identity</span>
          </div>
          <h1 class="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl">
            We help build brands
          </h1>
          <p class="text-center text-base max-w-lg mt-2">
            At Subham, we help brands create identities and stories that truly
            connect with today's audiences.
          </p>
          <div class="flex items-center gap-4 mt-8">
            <button class="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11">
              Start Today
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="border border-slate-400 active:scale-95 hover:bg-white/10 transition rounded-lg px-8 h-11">
              Free consultation
            </button>
          </div>
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
            class="w-full rounded-[15px] max-w-4xl mt-16"
            alt="hero section showcase"
          />
        </section>
      </motion.section>
    </>
  );
};

export default HeroSection;
