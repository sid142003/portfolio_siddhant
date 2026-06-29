import React from "react";
import WorkCard from "../../chip/WorkCard";

const Work = () => {
  return (
    <div id="works" className="w-full bg-[#111111] py-16 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div data-aos="fade-up" className="section-heading mb-10">
          <h3>Works</h3>
          <span className="divider"></span>
          <p className="text-gray-400 font-medium text-sm mt-1">
            A selection of projects I've built and shipped.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 mt-4">
          <WorkCard />
        </div>
      </div>
    </div>
  );
};

export default Work;
