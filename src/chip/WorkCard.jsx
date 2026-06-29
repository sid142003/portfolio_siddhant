import React from "react";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((item) => (
        <div
          data-aos="fade-up"
          key={item.id}
          className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] hover-lift hover:border-yellow-400/40 transition-all duration-300"
        >
          {/* Image */}
          <div className="relative overflow-hidden h-[200px] sm:h-[180px]">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {item.link && (
                <Link
                  to={item.link}
                  target="_blank"
                  className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold text-sm hover:bg-yellow-300 transition-all"
                >
                  <RxExternalLink /> Demo
                </Link>
              )}
              <Link
                to={item.git}
                target="_blank"
                className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/20 transition-all"
              >
                <AiOutlineGithub /> Code
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3 className="text-white font-black text-lg mb-1 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            <div className="flex gap-3 mt-4">
              {item.link && (
                <Link
                  to={item.link}
                  target="_blank"
                  className="flex items-center gap-1.5 text-yellow-400 text-xs font-bold hover:underline"
                >
                  <RxExternalLink /> Live Demo
                </Link>
              )}
              <Link
                to={item.git}
                target="_blank"
                className="flex items-center gap-1.5 text-gray-400 text-xs font-bold hover:text-white transition-colors"
              >
                <AiOutlineGithub /> Source Code
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkCard;
