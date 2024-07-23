"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Frameworks and Libraries: React, Next.js, Tailwind CSS, Bootstrap</li>
        <li>Experience with Clerk, Strapi, and Wordprees</li>
        <li>Basic knowledge of SQL and NoSQL</li>
        <li>Understanding of server-side languages such as PHP</li>
        <li>Working knowledge of RESTful APIs and Web Services</li>
        <li>Knowledge of hardware components, installation, and troubleshooting</li>
        <li>Understanding of backup and recovery procedures</li>
        <li>Adobe Creative Suite Photoshop, Illustrator</li>
        <li>UX/UI Design</li>
        <li>Photography and Photo Editing</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Sudan Academy of Banking and Financial Sciences</li>
        <li>Full Stack Academy of Code</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="img" src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a highly motivated and detail-oriented web developer with 3+
years of experience in designing and developing dynamic websites and web applications, proficient in HTML, CSS,
JavaScript, and modern frameworks such as React, Next.js, Tailwind CSS, and Bootstrap, as well as content
management systems such as Clerk, Strapi, and Wordprees. I am also a dedicated IT support specialist with 6
months of experience in providing technical assistance and support for hardware, software, and network issues,
adept at troubleshooting, problem-solving, and user training. Additionally. <br/>
As a creative and detail-oriented graphic designer, I am eager to leverage my skills in Adobe Creative Suite and visual storytelling to develop innovative designs that enhance brand identity
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
