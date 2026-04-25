import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const Information = () => {
  const contactInfo = [
    {
      icon: <FiPhone size={24} />,
      title: "+880 1792524289",
      desc: "Thursday - Friday",
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Dhaka, Bangladesh",
      desc: "Mirpur, Dhaka 1216",
    },
    {
      icon: <FiMail size={24} />,
      title: "taposhbarai03@gmail.com",
      desc: "Contact me every time!",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[#f9fbff]">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact Info Cards Only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center border border-gray-50"
            >
              <div className="text-[#f26457] bg-red-50 p-4 rounded-full mb-4">
                {info.icon}
              </div>
              <h3 className="text-[#0a1d37] font-bold text-lg mb-2">{info.title}</h3>
              <p className="text-gray-500 text-sm">{info.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Information;