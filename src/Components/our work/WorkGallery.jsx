import WorkCard from "./WorkCard";

export default function WorkGallery({ works }) {
  return (
    <section
      className="
      relative
      bg-white
      rounded-t-[60px]
      -mt-10
      z-20
      px-8
      md:px-14
      py-20
      "
    >
      <div className="grid md:grid-cols-2 gap-8">
        {works.map((project, index) => (
          <WorkCard
            key={index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}