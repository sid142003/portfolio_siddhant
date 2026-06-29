import React from "react";
import { FaJava, FaPython, FaReact, FaAws, FaDocker, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiSpring, SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiPostman, SiExpress, SiRazorpay } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { GrCode } from "react-icons/gr";
import { MdOutlineApi } from "react-icons/md";

// Row 1 – Languages & Frontend
const row1 = [
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux Toolkit", icon: <GrCode /> },
  { name: "Vite", icon: <GrCode /> },
  { name: "Retool", icon: <GrCode /> },
];

// Row 2 – Backend & APIs
const row2 = [
  { name: "Spring Boot", icon: <SiSpring /> },
  { name: "Spring Security", icon: <SiSpring /> },
  { name: "Node.js", icon: <IoLogoNodejs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "FastAPI", icon: <GrCode /> },
  { name: "REST APIs", icon: <MdOutlineApi /> },
  { name: "JWT", icon: <GrCode /> },
  { name: "Microservices", icon: <GrCode /> },
  { name: "API Design", icon: <MdOutlineApi /> },
];

// Row 3 – AI, Cloud, Databases & Integrations
const row3 = [
  { name: "OpenAI API", icon: <GrCode /> },
  { name: "LLM Workflows", icon: <GrCode /> },
  { name: "RAG Pipelines", icon: <GrCode /> },
  { name: "AI Voice Agents", icon: <GrCode /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Twilio", icon: <GrCode /> },
  { name: "Razorpay", icon: <GrCode /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "CI/CD", icon: <GrCode /> },
];

const MarqueeRow = ({ items, reverse = false, speed = 35 }) => {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden w-full relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0f0f0f, transparent)" }}></div>
      <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0f0f0f, transparent)" }}></div>

      <div
        className={`flex gap-3 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((skill, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.06] text-gray-200 text-sm font-semibold hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-200 cursor-default"
          >
            <span className="text-yellow-400 text-base hover:text-black">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="w-full bg-[#0f0f0f] py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div data-aos="fade-up" className="section-heading mb-12">
          <h3>My Skills</h3>
          <span className="divider"></span>
          <p className="text-gray-400 font-medium text-sm mt-1">
            A comprehensive list of my technical skills and tools.
          </p>
        </div>
      </div>

      {/* Marquee rows — full width, no container constraint */}
      <div className="flex flex-col gap-4 w-full">
        <MarqueeRow items={row1} reverse={false} speed={30} />
        <MarqueeRow items={row2} reverse={true}  speed={25} />
        <MarqueeRow items={row3} reverse={false} speed={40} />
      </div>
    </div>
  );
};

export default Skills;
