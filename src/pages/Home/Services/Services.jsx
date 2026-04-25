import React from "react";
import { FaCode, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      description:
        "Building fast, scalable, and responsive websites using modern technologies like React, Node.js, and MongoDB.",
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: "UI/UX Design",
      description:
        "Creating visually appealing and user-friendly interfaces that deliver seamless digital experiences.",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "MERN Stack Solutions",
      description:
        "Developing full-stack applications with powerful backend systems and dynamic frontend experiences.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          What Services I'm Providing
        </h1>

        <h5 className="text-black mt-4 text-lg mt-10">
          Delivering creative, scalable, and impactful digital solutions for
          businesses and individuals worldwide.
        </h5>

        <div className="w-20 h-1 bg-red-500 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition-all duration-500 hover:-translate-y-3 hover:bg-red-500 hover:text-white group"
          >
            {/* Icon */}
            <div className="flex justify-center text-red-500 group-hover:text-white transition duration-500">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl text-black group-hover:text-white font-bold mt-6">{service.title}</h3>

            {/* Description */}
            <p className="mt-4 text-gray-600 group-hover:text-white transition duration-500">
              {service.description}
            </p>

            {/* Button */}
            <button className="mt-6 px-6 py-3 rounded-xl bg-red-500 text-white font-semibold shadow-md transition-all duration-500 group-hover:bg-white group-hover:text-red-500">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;