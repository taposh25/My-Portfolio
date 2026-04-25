import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import tradeImg from "../../../../assets/TradeNest.JPG";

const featuredProjects = [
  {
    title: "School Management System",
    category: "Web App",
    description:
      "A modern dashboard with analytics, order tracking, and customer management.",
    tech: ["React", "Tailwind", "Firebase", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveLink: "https://school-system-bb33d.web.app/",
    codeLink: "https://github.com/taposh25/school-management-system-client",
  },
  {
    title: "Matrimony Platform",
    category: "Personal Brand",
    description:
      "A responsive portfolio to showcase projects and professional identity.",
    tech: ["React", "Node.js", "MongoDB","Express", "Tailwind", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    liveLink: "https://frontend-three-woad-37.vercel.app/",
    codeLink: "https://frontend-three-woad-37.vercel.app/",
  },
  {
    title: "Book Courier Service",
    category: "Business Solution",
    description:
      "A property listing platform with search, filtering, and inquiry system.",
    tech: ["React", "Node.js", "MongoDB","Express", "Tailwind", "Stripe"],
    image:
      "https://bfcpublications.com/blog/wp-content/uploads/2025/08/Rabindranath-Tagore-Books-1024x576.webp",
    liveLink: "https://book-courier-service.web.app/",
    codeLink: "https://github.com/taposh25/Book-Courier-Client",
  },
  {
    title: "Trade Nest Application",
    category: "Productivity",
    description:
      "A collaborative productivity app for managing daily tasks and projects.",
    tech: ["React", "Stripe", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: tradeImg,
    liveLink: "https://trade-nest-8c857.web.app/",
    codeLink: "https://github.com/taposh25/Trade-Next-Client",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full  object-cover group-hover:scale-110 transition-transform duration-500 "
              />
            </div>

            <div className="p-6">
              <span className="text-sm text-orange-500 font-semibold">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                {project.title}
              </h3>

              <p className="text-slate-600 mt-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm text-slate-500 hover:text-sky-500 bg-white rounded-full shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 flex items-center gap-2 font-medium hover:underline"
                >
                  Live Demo <FiExternalLink size={18} />
                </a>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 flex items-center gap-2 font-medium hover:underline"
                >
                  Code <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;