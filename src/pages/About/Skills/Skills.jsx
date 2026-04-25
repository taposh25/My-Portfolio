import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Dynamic skill data array
  const skillsData = [
    { name: "JavaScript", percentage: 90 },
    { name: "HTML", percentage: 70 },
    { name: "CSS", percentage: 85 },
    { name: "React", percentage: 95 },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-bold text-[#0a1d37]">
            Frontend and Backend Developer
          </h2>
          <div className="w-16 h-[2px] bg-[#f26457]"></div>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            I work with technologies such as React.js, Tailwind CSS, Node.js, Express.js, Firebase, and MongoDB to build modern, responsive, and user-friendly web applications. I specialize in creating clean UI designs, efficient backend systems, and seamless full-stack solutions. I am actively looking for a Full-Stack Developer role or remote opportunity where I can apply my skills, contribute to real-world projects, and grow in a professional development environment.
          </p>
          
          {/* <button className="bg-[#f26457] text-white font-semibold py-3 px-8 rounded shadow-md hover:bg-[#d95349] transition-all w-fit mt-4">
            Download CV
          </button> */}

        <a
        href="/public/(CV)-TAPOSH.pdf"
        target="_blank"
        className="bg-[#f26457] text-white font-semibold py-3 px-8 rounded shadow-md hover:bg-[#d95349] transition-all w-fit mt-4 inline-block"
        >
        Download CV
        </a>


        </div>

        {/* Right Side: Dynamic Skill Bars */}
        <div className="flex flex-col space-y-8 pt-4">
          {skillsData.map((skill, index) => (
            <div key={index} className="relative">
              {/* Skill Name on Top of Bar */}
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-white absolute left-4 z-10 top-[10px]">
                  {skill.name}
                </span>
              </div>
              
              {/* Background Bar */}
              <div className="w-full bg-gray-100 h-9 rounded-full overflow-hidden relative">
                {/* Animated Fill Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }} // Animation hobe jakhon screen-e ashbe
                  className="h-full bg-[#f26457] rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;