import React, { useEffect, useState } from "react";

const Experience = () => {
  const [count, setCount] = useState({
    frontend: 0,
    backend: 0,
    projects: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (
          prev.frontend >= 90 &&
          prev.backend >= 80 &&
          prev.projects >= 65
        ) {
          clearInterval(interval);
          return prev;
        }

        return {
          frontend: Math.min(prev.frontend + 2, 90),
          backend: Math.min(prev.backend + 2, 80),
          projects: Math.min(prev.projects + 1, 65), // ✅ 65% updated
        };
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const Circle = ({ value, color }) => {
    const radius = 40;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      circumference - (value / 100) * circumference;

    return (
      <svg height={100} width={100} className="mx-auto">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={50}
          cy={50}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={50}
          cy={50}
        />
        <text
          x="50"
          y="55"
          textAnchor="middle"
          className="text-sm font-bold"
        >
          {value}%
        </text>
      </svg>
    );
  };

  const data = [
    {
      title: "Frontend Development",
      value: count.frontend,
      color: "#ef4444",
      desc: "React, Tailwind, UI Design",
      titleColor: "text-red-500", // ✅ new
    },
    {
      title: "Backend Development",
      value: count.backend,
      color: "#8b5cf6",
      desc: "Node.js, Express, MongoDB",
      titleColor: "text-purple-500", // ✅ new
    },
    {
      title: "Project Completion",
      value: count.projects,
      color: "#10b981",
      desc: "Real-world client & portfolio projects",
      titleColor: "text-emerald-500", // ✅ new
    },
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          My Experience
        </h2>

        <p className="text-gray-500 mt-3">
          A quick overview of my skills and completed work
        </p>

        <div className="w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <Circle value={item.value} color={item.color} />

            {/* ✅ Attractive title colors */}
            <h3 className={`text-xl font-bold mt-4 ${item.titleColor}`}>
              {item.title}
            </h3>

            <p className="text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;