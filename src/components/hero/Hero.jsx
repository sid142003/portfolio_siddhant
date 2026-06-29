import React from "react";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";
import imagemine from "../../assets/IMG_1555.jpg";

const Hero = () => {
  const gotoemail = () => {
    window.location.href = "mailto:siddhant.rbl2016@gmail.com";
  };

  return (
    <div id="home" className="relative min-h-screen bg-[#0f0f0f] overflow-hidden flex items-center">
      {/* Background glow orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-yellow-500 rounded-full filter blur-[160px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[350px] h-[350px] bg-orange-500 rounded-full filter blur-[160px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto pt-24 pb-12 px-4 flex items-center gap-10 md:flex-col-reverse sm:pt-20 sm:pb-8 sm:gap-6">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6 md:items-center md:text-center">
          <div className="flex flex-col gap-3">
            <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Software Engineer</span>
            <h2 data-aos="fade-up" className="text-5xl font-black text-white leading-tight sm:text-3xl">
              Hello, I'm<br />
              <span className="gradient-text">Siddhant Kumar</span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Full Stack Developer",
                2000,
                "Backend Engineer",
                2000,
                "AI & Automation",
                2000,
                "",
              ]}
              speed={35}
              wrapper="h3"
              repeat={Infinity}
              className="text-yellow-400 text-2xl font-bold sm:text-xl"
            />
            <p data-aos="fade-up" className="text-gray-300 text-base font-medium w-4/5 leading-relaxed md:w-full sm:text-sm">
              Software Engineer at <span className="text-yellow-400 font-bold">Devsthan</span> with B.Tech from IIIT Vadodara. I've architected scalable platforms serving <span className="text-white font-semibold">10K+ users</span> at Devsthan, improved ATS matching to <span className="text-white font-semibold">~90% accuracy</span> at <span className="text-yellow-400 font-bold">NextgenApply</span>, and built AI healthcare systems including voice agents & FHIR integrations at <span className="text-yellow-400 font-bold">GPT Innovations</span>. I deliver high-performance full-stack apps using React, Spring Boot, MongoDB, and AWS.
            </p>
          </div>

          <div data-aos="fade-up" className="flex gap-4 flex-wrap md:justify-center">
            <a
              onClick={gotoemail}
              className="cursor-pointer bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-all duration-300 animate-glow text-sm sm:px-6"
            >
              Contact me
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 text-sm sm:px-6"
              download
            >
              Resume <FiDownload />
            </a>
          </div>

          <div data-aos="fade-up" data-aos-duration="1500">
            <ul className="flex gap-5">
              <li>
                <a target="_blank" href="https://github.com/sid142003" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black text-white transition-all duration-300">
                  <AiFillGithub className="text-xl" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.linkedin.com/in/siddhantkumar14/" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black text-white transition-all duration-300">
                  <FaLinkedinIn className="text-xl" />
                </a>
              </li>
              <li>
                <a href="tel:+918090453205" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/15 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black text-white transition-all duration-300">
                  <FaPhone className="text-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: profile image */}
        <div className="flex-1 flex items-center justify-center relative md:w-full">
          <div className="relative w-[340px] h-[400px] sm:w-[240px] sm:h-[290px]">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-500 blur-md opacity-30"></div>
            <img
              data-aos="fade-left"
              className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-yellow-400/40 animate-float"
              src={imagemine}
              alt="Siddhant Kumar"
            />
            {/* Spinning badge */}
            <div className="absolute bottom-4 right-[-24px] sm:right-0 z-20">
              <div data-aos="zoom-in" data-aos-duration="1000" className="relative cursor-pointer">
                <img
                  className="w-[100px] sm:w-[70px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
