import React, { useEffect, useRef, useState } from "react";
import PankajImage from "../../../assets/image.png";

const Clients = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: "Pankaj Mallick",
      img: PankajImage,
      desc: "Amazing developer! Delivered project on time with perfect UI design.",
    },
    {
      name: "Md. Mohoiminul Islam Chowdhury",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjVhxCV2df9VAl9B7oJXDvjXKO-q65BmqvljxtMhFA2NfNICQIM=s75-c",
      desc: "Very professional and skilled. Highly recommended for web projects.",
    },
    {
      name: "Mr. Montaser Abdul Quader",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUpdMc2mSpHEeuK5yKc5CpJpXYa_wJPN1wosce5B7CtG8hYsEf6=s75-c",
      desc: "Great communication and clean code. Loved working with him.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 lg:px-20 bg-white overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          What My HR Says
        </h2>

        <p className="text-gray-500 mt-6 ">
          Here is what some of my happy HR say about my work and experience
        </p>

        <div className="w-20 h-1 bg-red-500 mx-auto  mt-6 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {clients.map((client, i) => (
          <div
            key={i}
            className={`bg-gray-50 p-8 rounded-2xl shadow-md text-center
            transform transition-all duration-700
            ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {/* Circle Image */}
            <div className="flex justify-center">
              <img
                src={client.img}
                alt={client.name}
                className="w-20 h-20 rounded-full border-4 border-red-500 object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-5">{client.desc}</p>

            {/* Red line */}
            <div className="w-12 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>

            {/* Name */}
            <h4 className="mt-3 font-bold text-gray-800">
              {client.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;