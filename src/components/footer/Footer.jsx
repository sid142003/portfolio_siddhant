import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const chatonwhatsapp = () => {
    window.open("https://wa.me/918090453205", "_blank");
  };

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-10 px-4">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        <h2 data-aos="zoom-in" className="text-3xl font-black text-white sm:text-2xl">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <div className="flex items-center gap-5">
          <a
            onClick={chatonwhatsapp}
            className="cursor-pointer flex flex-col items-center gap-1 text-gray-400 hover:text-green-400 transition-all"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-green-400/50 transition-all">
              <IoLogoWhatsapp className="text-2xl" />
            </div>
            <span className="text-xs font-medium">WhatsApp</span>
          </a>
          <a
            href="https://github.com/sid142003"
            target="_blank"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-all"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/50 transition-all">
              <AiFillGithub className="text-2xl" />
            </div>
            <span className="text-xs font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/siddhantkumar14/"
            target="_blank"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-400 transition-all"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all">
              <FaLinkedinIn className="text-xl" />
            </div>
            <span className="text-xs font-medium">LinkedIn</span>
          </a>
        </div>
        <p className="text-gray-600 text-xs">
          © 2025 Made with ❤️ by <span className="text-yellow-400 font-semibold">Siddhant Kumar</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
