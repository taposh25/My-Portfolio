import React from "react";

const Communication = () => {
  return (
    <section className="relative flex items-center justify-center h-[60vh] bg-gradient-to-b from-[#0a1d37] via-[#0f2a4a] to-[#0a1d37] overflow-hidden">
      
      {/* Soft Glow/Spotlight Effect */}
      <div className="absolute w-[500px] h-[500px] bg-[#f26457] opacity-10 blur-[120px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-10 blur-[100px] rounded-full -bottom-20 -right-20"></div>

      {/* Content Area */}
      <div className="text-center z-10">
        {/* Subtitle (Optional, looks professional) */}
        <p className="text-[#f26457] uppercase tracking-[0.3em] text-sm font-bold mb-2">
          Please Feel Free To
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Contact Me
        </h1>

        {/* Dynamic Red Line */}
        <div className="w-20 h-1.5 bg-[#f26457] mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(242,100,87,0.6)]"></div>
      </div>

    </section>
  );
};

export default Communication;