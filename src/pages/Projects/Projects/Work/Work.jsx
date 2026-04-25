// import React from "react";
// import { FiArrowRight } from "react-icons/fi";
// import { motion } from "framer-motion";

// const Work = () => {
//   return (
//     <section className="px-6 md:px-16 py-24 bg-white text-center border-t border-gray-100">
//       <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37] leading-tight">
//         Let’s Build Something Great Together
//       </h2>
//       <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg leading-relaxed">
//         Open to freelance projects, collaborations, and exciting opportunities.
//       </p>

//       {/* Animated Button */}
//       <motion.button
//         whileHover={{ 
//           scale: 1.1, 
//           backgroundColor: "#0a1d37", 
//           boxShadow: "0px 10px 30px rgba(242, 100, 87, 0.4)" 
//         }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         className="mt-10 inline-flex items-center gap-3 bg-[#f26457] text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all cursor-pointer"
//       >
//         Contact Me
//         <motion.span
//           animate={{ x: [0, 5, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//         >
//           <FiArrowRight size={22} />
//         </motion.span>
//       </motion.button>
//     </section>
//   );
// };

// export default Work;




import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";


const Work = () => {
  const navigate = useNavigate(); 

  return (
    <section className="px-6 md:px-16 py-24 bg-white text-center border-t border-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37] leading-tight">
        Let’s Build Something Great Together
      </h2>
      <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg leading-relaxed">
        Open to freelance projects, collaborations, and exciting opportunities.
      </p>

      {/* Animated Button */}
      <motion.button
        onClick={() => navigate("/contact")} 
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "#0a1d37", 
          boxShadow: "0px 10px 30px rgba(242, 100, 87, 0.4)" 
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="mt-10 inline-flex items-center gap-3 bg-[#f26457] text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all cursor-pointer"
      >
        Contact Me
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowRight size={22} />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Work;