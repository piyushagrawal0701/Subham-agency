import { useParams } from "react-router-dom";
import { projects } from "../data/projects";



import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WorkHero from "../Components/our work/WorkHero";
import WorkGallery from "../Components/our work/WorkGallery";

export default function WorkDetails() {

  const { type } = useParams();

  const project = projects[type];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0,.9],
    [1,.94]
  );

  return (

    <div ref={ref}>

      <motion.div
        style={{ scale }}
        className="sticky top-0 z-10"
      >
        <WorkHero
          title={project.title}
          subtitle={project.subtitle}
        />
      </motion.div>

      <div className="relative z-20">
        <WorkGallery works={project.works}/>
      </div>

    </div>

  );
}