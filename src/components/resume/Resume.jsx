import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto mt-16">
      {/* Heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      {/* Introduction */}
      <div data-aos="fade-up" className="flex-1 w-full">
        <p className="text-gray-700 font-medium w-full">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* Card wrapper for experiences and education */}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto">
        {/* Experience section */}
        <div className="flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className="w-full p-5 py-1 sm:py-1"
          >
            <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            {/* Individual experiences */}
            {[ /* Array of experience data */
              {
                role: "Full Stack Developer Intern",
                company: "GPT Innovations, Inc",
                period: "February 2024 - September 2024",
                description: "Developed and launched two professional websites, elevating online sales by 754% and increasing web traffic by 54%. Implemented an admin panel to optimize data integration and automate workflows using MySQL. Led AI transcription integration for QuickScribe, enhancing medical documentation efficiency by 95% and spearheaded the use of FHIR and Meldrx APIs for healthcare system interoperability."
              },
            {
              role: "Freelancer(Wix)",
                company: "Datum Intelligence",
                period: "September 2024 - October 2024",
                description: "Managed and designed a professional Wix website, including store setup and customization. Utilized Wix Velo for enhanced website functionality and dynamic web elements. Improved user experience through responsive design and seamless store integration. Worked on SEO."
              },
            
              {
                role: "Full Stack Developer Intern",
                company: "Visafied",
                period: "October 2023 - November 2023",
                description: "With a team of two, designed and developed a tourism website enhancing customer interaction through WhatsApp API. Led frontend and backend development efforts."
              },
              {
                role: "Full Stack Developer Intern",
                company: "Linsible Technologies",
                period: "June 2023 - September 2023",
                description: "Coordinated with a 13-member team to create user-friendly signup and login interfaces. Led API development for an Admin Control Panel, executing strategies to boost system performance."
              }
            ].map((exp, index) => (
              <fieldset
                key={index}
                data-aos="zoom-in"
                className="w-full p-5 py-12 sm:py-8 mt-4"
              >
                <div className="relative margin-8">
                  <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
                    <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                    <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                    <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                    <h1 className="text-[1.4rem] font-semibold sm:text-xl">{exp.role}</h1>
                    <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">{exp.company}</span>
                    <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">{exp.period}</span>
                    <p className="text-[.9rem] text-justify break-words text-gray-500">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </fieldset>
            ))}
          </fieldset>
        </div>
        {/* Education section */}
        <div className="flex-1 flex items-center justify-center">
        <fieldset data-aos="zoom-in" className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
    <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
        Education
    </legend>
    <div className="relative">
        {/* <!-- Design --> */}
        <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
            <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
            <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
        </div>
        {/* <!-- Content for Bachelor of Technology --> */}
        <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">Bachelor of Technology - Computer Science and Engineering</h1>
            <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">Indian Institute of Information Technology, Vadodara</span>
            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">December 2021 - Expected July 2025</span>
            <p className="text-[.9rem] text-justify break-words text-gray-500">
                Pursuing a Bachelor's degree focused on full-stack development, data structures, and algorithms. Engaged in practical projects and team collaborations to enhance software development skills.
            </p>
        </div>
        {/* <!-- Content for Higher Secondary Education --> */}
        <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">XII - Higher Secondary Education</h1>
            <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">S.J.S Public School, Raebareli, Uttar Pradesh</span>
            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">Achieved 93.2%</span>
        </div>
        {/* <!-- Content for Senior Secondary Education -->/ */}
        <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">X - Senior Secondary Education</h1>
            <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">S.J.S Public School, Raebareli, Uttar Pradesh</span>
            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">Achieved 95.8%</span>
        </div>
    </div>
</fieldset>
<fieldset data-aos="zoom-in" className="w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2">
    <legend className="w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
        Achievements
    </legend>
    <div className="relative">
        {/* <!-- Design --> */}
        <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px]">
            <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
            <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
            <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
        </div>
        {/* <!-- Content for Backend Developer Mentor --> */}
        <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">Selected as Backend Developer Mentor</h1>
            <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">SSIP 2.0 at IIIT Vadodara</span>
        </div>
        {/* <!-- Content for SSIP Gujarat Program --> */}
        <div className="flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg mt-4">
            <h1 className="text-[1.4rem] font-semibold sm:text-xl">Idea Accepted under SSIP Gujarat Program</h1>
            <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">BUS KAROO - IIIT Vadodara</span>
            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">1st Category Recognition</span>
        </div>
    </div>
</fieldset>


        </div>
        
      </div>
    </div>
  );
};

export default Resume;
