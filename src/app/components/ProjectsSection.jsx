"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Where Every Dog Finds a Home Online",
    description: "Providing all necessary services for dog care",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mustafa4c/Pawmart",
    previewUrl: "https://github.com/mustafa4c/Pawmart",
  },
  {
    id: 2,
    title: "Experience Tomorrow Today",
    description: "Follow technology and acquire the latest modern devices",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mustafa4c/TechNest",
    previewUrl: "https://github.com/mustafa4c/TechNest",
  },
  {
    id: 3,
    title: "Portfolio Management",
    description: "My own website and gallery of my work",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Signature verification",
    description: "A system capable of verifying the authenticity of entered signatures",
    image: "/images/projects/4.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/mustafa4c/Signature-Detector",
    previewUrl: "https://github.com/mustafa4c/Signature-Detector",
  },
  {
    id: 5,
    title: "Stay Safe, Stay Healthy",
    description: "Integrated medical services and health consultations for a better life",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mustafa4c/-MedCare",
    previewUrl: "https://github.com/mustafa4c/-MedCare",
  },
  {
    id: 6,
    title: "Eat Fresh Everyday",
    description: "A landing page to raise awareness of the necessity of fruits in our lives",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mustafa4c/Fruits",
    previewUrl: "https://github.com/mustafa4c/Fruits",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
