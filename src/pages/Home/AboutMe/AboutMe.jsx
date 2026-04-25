import React from "react";
import about from "../../../assets/about.jpg";
import { useNavigate } from "react-router";


const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white px-6 lg:px-20 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0d2341]">About Me</h2>
        <p className="text-gray-500 mt-4">
          Passionate about building modern web solutions that <br /> combine creativity,
          performance, and real-world problem solving.
        </p>
        <div className="w-20 h-1 bg-red-400 mx-auto mt-4 rounded"></div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Text */}
        <div>
          <h3 className="text-3xl font-bold text-[#0d2341] leading-snug">
            Developing With a Passion <br />
            While Exploring The World.
          </h3>

          <div className="w-16 h-1 bg-red-400 mt-5 rounded"></div>

          <p className="text-gray-600 mt-6 leading-relaxed">
            I am a passionate MERN Stack Developer with hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I love turning ideas into real-world products with clean, scalable, and maintainable code.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
           Motivated and detail-oriented Full-Stack Developer with strong skills in Tailwind CSS, React.Js, Node.Js, Express.Js, Firebase and MongoDB, seeking a position as a Full-Stack Developer or remote job where I can show my skills to build responsive, user-friendly web applications and contribute to a dynamic team environment.
          </p>

      <button 
      onClick={() => navigate("/contact")} // ৩. এখানেও 'n' ছোট হাতের হবে
      className="mt-8 px-6 py-3 bg-red-400 text-white rounded-md shadow-md hover:bg-red-500 transition cursor-pointer"
    >
      Contact Me
    </button>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute top-5 right-10 w-72 h-80 bg-red-400 rounded-lg"></div>
          <img
            src={about}
            alt="About"
            className="relative w-72 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;