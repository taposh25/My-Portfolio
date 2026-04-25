import React from "react";
import name from "../../../assets/name.png";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#f8f6f6] px-6 lg:px-20 ">
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
        
        {/* Left Content */}
        <div>
          <p className="text-red-400 font-semibold text-5xl mb-3">Hello,</p>

          <h1 className="text-4xl lg:text-6xl font-bold text-[#0d2341] leading-tight">
            I'm Web Developer <br />
            Taposh Barai
          </h1>

          <p className="text-gray-500 mt-6 max-w-lg">
             As a MERN Stack Developer, I create dynamic full-stack solutions with
             MongoDB, Express.js, React, and Node.js for seamless user experiences.
          </p>

          <button className="mt-8 px-6 py-3 bg-red-400 text-white rounded-md shadow-md hover:bg-red-500 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={name}
            alt="Developer"
            className="max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;