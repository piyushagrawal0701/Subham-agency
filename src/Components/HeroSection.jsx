import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./css/HeroCarousel.css";
import countriesSvg from "../assets/contries.svg";
import MainBtn from "./MainBtn";

const topImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEE_nXIteFIau10acFeO_8-7S-A_R8ep-NO3e_1KZXEA&s=10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzlaIltsntXfMDnru_sS4enW8yphOSvuYDWF7dYzijPV08MGdNodYBxba&s=10",
  "https://static.wixstatic.com/media/4b9d2b_4ba75c826a1b4308a6757ee924271032~mv2.png/v1/fill/w_704,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4b9d2b_4ba75c826a1b4308a6757ee924271032~mv2.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDK1YMi0cuPp4cUzWOBqt1ddyv87-JLQ7PIXzPmzgFoOL63Z1frzHXIY&s=10",
  "https://img.magnific.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_hybrid&w=740&q=80",
  "https://img.magnific.com/free-psd/professional-website-design-landing-page-template_23-2148772440.jpg",
];

const bottomImages = [
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white -mx-6">
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/src/assets/hero-bg.png')",
          backgroundPosition: "top",
        }}
      />

      {/* Dark Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.35), rgba(0,0,0,.55))",
        }}
      />

      {/* Vignette */}

      {/* <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.45) 100%)",
        }}
      /> */}

      {/* Dot Pattern */}

      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.9) 1.5px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      /> */}

      {/* Glow */}
      {/* 
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-violet-500 blur-[220px] opacity-30" /> */}

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:pt-28 pt-20">
        {/* Google Rating */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="sm:text-5xl text-4xl font-bold">G</div>

          <div className="flex text-yellow-400 mt-0">
            <span className="pt-[5px] text-white/80 text-[12px] px-2">
              4.9{" "}
            </span>{" "}
            ★★★★★
          </div>

          <h4 className="mt-4 sm:text-xl text-md font-semibold">
            Leading UI/UX Design Agency
          </h4>
        </motion.div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <h1 className="font-semibold leading-[1.1] text-3xl md:text-7xl ">
            We <span className="italic font-serif font-normal">Design</span>{" "}  <br className="max-md:block hidden" /> 
            Products  That
            <br className="max-md:hidden" /> Drive
            <span className="hidden md:inline-flex items-center mx-6">
              <div className="bg-white rounded-full p-3 text-3xl">🎨</div>

              <div className="bg-white rounded-full p-3 text-3xl ">🌐</div>

              <div className="bg-white rounded-full p-3 text-3xl">⚡</div>
            </span>
            <span className="md:hidden inline px-2 text-yellow-300">
              Amazing
            </span>
            <span className="italic font-serif font-normal">Results</span>
          </h1>
        </motion.div>

        {/* Countries */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center sm:mt-8 mt-6"
        >
          <div className="rounded-full bg-black/40 border border-white/20 backdrop-blur-xl sm:px-8 px-4 py-3 text-xs md:text-base">
            <img src={countriesSvg} alt="" />
          </div>
        </motion.div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center sm:mt-10 mt-6 max-md:w-full"
        >
          {/* <button className="group bg-white text-violet-700 px-8 py-5 rounded-xl font-semibold flex items-center gap-3 hover:scale-105 transition max-md:w-full max-md:justify-center">
            Book a Call
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </button> */}
          <MainBtn />
        </motion.div>
      </div>

      {/* ================= IMAGE CAROUSELS ================= */}

      <div className="relative z-20 sm:mt-16 mt-10 pb-12">
        {/* Top */}

        <div className="carousel-wrapper">
          <div className="carousel-track-left">
            {[...topImages, ...topImages].map((img, index) => (
              <div
                key={index}
                className="w-auto h-[240px] rounded-3xl overflow-hidden flex-shrink-0"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}

        <div className="carousel-wrapper mt-5">
          <div className="carousel-track-right">
            {[...bottomImages, ...bottomImages].map((img, index) => (
              <div
                key={index}
                className="w-auto h-[240px] rounded-3xl overflow-hidden flex-shrink-0"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
