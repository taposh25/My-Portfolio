import React from "react";

const Myself = () => {
  return (
    <section className="relative flex items-center justify-center h-[60vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      
      {/* Optional soft glow background */}
      <div className="absolute w-72 h-72 bg-red-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          About Me
        </h1>

        {/* Red line */}
        <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

    </section>
  );
};

export default Myself;