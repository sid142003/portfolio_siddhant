import React from "react";
import resumePDF from "../../assets/Resume.pdf";
import { FiDownload } from "react-icons/fi";

const experiences = [
  {
    role: "Software Engineer I",
    company: "Devsthan, Bengaluru",
    period: "July 2025 – Present",
    description:
      "Delivered a religious full-stack mobile and web platform using React, React Native, Spring Boot, and MongoDB, serving 10K+ users and processing 50K+ orders. Architected 30+ REST APIs with Spring Security & JWT, enabling Rs.2Cr+ in Razorpay transactions. Improved performance via Redux Toolkit (0.19% crash rate). Shipped 12+ Retool apps for OPS workflows.",
  },
  {
    role: "Software Engineer (Independent Consultant)",
    company: "NextgenApply",
    period: "July 2025 – August 2025",
    description:
      "Designed a React-based dashboard with RBAC. Orchestrated scalable backend pipelines using Python and OpenAI APIs to improve ATS matching accuracy to ~90%. Implemented CI/CD and AWS EC2 Auto Scaling, achieving 70% reduction in infra costs.",
  },
  {
    role: "Software Engineering Intern",
    company: "Devsthan, Bengaluru",
    period: "January 2025 – June 2025",
    description:
      "Engineered Java-based deep-linking and secure short-link service with token expiry. Integrated Firebase Cloud Messaging (FCM) for real-time notifications across 10K+ active users. Built a React Native Virtual Darshan module handling 8+ real-time event types.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "GPT Innovations, Inc",
    period: "February 2024 – December 2024",
    description:
      "Delivered full-stack web features reducing form submission time by 66.67%. Built QuickScribe AI transcription (95% efficiency gain), AI Voice Agent with Twilio & Deepgram, FHIR/MeldRx integrations, and automated eligibility bots using PyAutoGUI.",
  },
];

const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "IIIT Vadodara, Gujarat",
    period: "December 2021 – July 2025",
    detail: "Focused on full-stack development, data structures, algorithms, and system design.",
  },
  {
    degree: "XII – Higher Secondary Education",
    institution: "S.J.S Public School, Raebareli, UP",
    period: "Achieved 93.2%",
    detail: "",
  },
  {
    degree: "X – Senior Secondary Education",
    institution: "S.J.S Public School, Raebareli, UP",
    period: "Achieved 95.8%",
    detail: "",
  },
];

const achievements = [
  {
    title: "Selected as Backend Developer Mentor",
    sub: "SSIP 2.0 at IIIT Vadodara",
    tag: "",
  },
  {
    title: "Idea Accepted under SSIP Gujarat Program",
    sub: "BUS KAROO – IIIT Vadodara",
    tag: "1st Category Recognition",
  },
];

const Card = ({ children }) => (
  <div className="relative pl-5 border-l-2 border-yellow-400/40 py-4 hover-lift cursor-default group">
    <div className="absolute w-3 h-3 rounded-full bg-yellow-400 left-[-7px] top-5 shadow-[0_0_10px_2px_rgba(250,204,21,0.4)]"></div>
    {children}
  </div>
);

const Resume = () => {
  return (
    <div id="resume" className="w-full bg-[#0f0f0f] py-16 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div data-aos="fade-up" className="section-heading mb-10">
          <h3>Resume</h3>
          <span className="divider"></span>
          <p className="text-gray-400 font-medium text-sm mt-1">
            My experiences, education, and achievements.
          </p>
        </div>

        <div data-aos="fade-up" className="mb-8 flex items-center justify-between flex-wrap gap-3">
          <p className="text-gray-300 text-sm">Download my full resume for detailed information.</p>
          <a
            href={resumePDF}
            download
            className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-xl font-bold hover:bg-yellow-300 transition-all text-sm"
          >
            Download CV <FiDownload />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
          {/* Experience */}
          <div data-aos="fade-right">
            <h4 className="text-yellow-400 font-black text-lg uppercase tracking-widest mb-6">Experience</h4>
            <div className="flex flex-col gap-2">
              {experiences.map((exp, i) => (
                <Card key={i}>
                  <h5 className="text-white font-bold text-base leading-tight group-hover:text-yellow-400 transition-colors">{exp.role}</h5>
                  <span className="text-gray-400 text-xs font-semibold">{exp.company}</span>
                  <span className="block text-yellow-500 text-xs font-bold mt-0.5">{exp.period}</span>
                  <p className="text-gray-300 text-xs mt-2 leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education + Achievements */}
          <div className="flex flex-col gap-8">
            <div data-aos="fade-left">
              <h4 className="text-yellow-400 font-black text-lg uppercase tracking-widest mb-6">Education</h4>
              <div className="flex flex-col gap-2">
                {education.map((edu, i) => (
                  <Card key={i}>
                    <h5 className="text-white font-bold text-base leading-tight group-hover:text-yellow-400 transition-colors">{edu.degree}</h5>
                    <span className="text-gray-400 text-xs font-semibold">{edu.institution}</span>
                    <span className="block text-yellow-500 text-xs font-bold mt-0.5">{edu.period}</span>
                    {edu.detail && <p className="text-gray-300 text-xs mt-2 leading-relaxed">{edu.detail}</p>}
                  </Card>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h4 className="text-yellow-400 font-black text-lg uppercase tracking-widest mb-6">Achievements</h4>
              <div className="flex flex-col gap-2">
                {achievements.map((ach, i) => (
                  <Card key={i}>
                    <h5 className="text-white font-bold text-base leading-tight group-hover:text-yellow-400 transition-colors">{ach.title}</h5>
                    <span className="text-gray-400 text-xs font-semibold">{ach.sub}</span>
                    {ach.tag && <span className="block text-yellow-500 text-xs font-bold mt-0.5">{ach.tag}</span>}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
