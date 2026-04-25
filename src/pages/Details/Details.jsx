
import React from 'react';
import { FaLinkedinIn, FaInstagram, FaGlobe, FaBehance } from 'react-icons/fa';
import AboutMe from "../../assets/about.png";

const Details = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* IMAGE */}
        <div className="relative">
          <div className="bg-[#f26457] w-full h-80 rounded-lg absolute top-8 -left-4 z-0"></div>
          <img 
            src={AboutMe} 
            alt="Profile" 
            className="relative z-10 rounded-lg w-full h-80 object-cover shadow-lg"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-[#0a1d37] leading-tight">
            Designing With <br /> Passion While <br /> Exploring The World
          </h2>

          <div className="w-12 h-1 bg-[#f26457]"></div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I am a frontend developer passionate about creating modern, responsive,
            and user-friendly web applications. I focus on clean UI design and smooth
            user experience using React and Tailwind CSS.
          </p>

          <p className="text-gray-600 text-sm">
            My goal is to build scalable digital products that solve real-world problems
            and provide meaningful value to users and businesses.
          </p>

          <div className="pt-4">
            <p className="text-sm text-gray-500 italic">Let's connect and build something great together.</p>
            <a href="mailto:contact@domain.com" className="text-lg font-bold text-[#0a1d37]">
              taposhbarai03@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-[#0a1d37] leading-tight">
            I Build Digital Products <br /> That Solve Problems
          </h2>

          <div className="w-12 h-1 bg-[#f26457]"></div>

          <p className="text-gray-600 text-sm leading-relaxed">
            I specialize in building interactive web interfaces, portfolio websites,
            and business landing pages that are optimized for performance and user experience.
          </p>

          <p className="text-gray-600 text-sm">
            With strong skills in React, JavaScript, and Tailwind CSS, I aim to deliver
            high-quality frontend solutions for modern web applications.
          </p>

          {/* SOCIAL */}
          <div className="flex space-x-4 pt-4 text-xl">
            <FaLinkedinIn className="cursor-pointer hover:text-[#f26457] transition" />
            <FaInstagram className="cursor-pointer hover:text-[#f26457] transition" />
            <FaGlobe className="cursor-pointer hover:text-[#f26457] transition" />
            <FaBehance className="cursor-pointer hover:text-[#f26457] transition" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Details;