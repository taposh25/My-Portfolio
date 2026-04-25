import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const featuredProjects = [
  {
    title: "E-Commerce Dashboard",
    category: "Web App",
    description:
      "A modern dashboard with analytics, order tracking, and customer management.",
    tech: ["React", "Tailwind", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    category: "Personal Brand",
    description:
      "A responsive portfolio to showcase projects and professional identity.",
    tech: ["React", "Framer Motion", "CSS"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Real Estate Platform",
    category: "Business Solution",
    description:
      "A property listing platform with search, filtering, and inquiry system.",
    tech: ["React", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Management App",
    category: "Productivity",
    description:
      "A collaborative productivity app for managing daily tasks and projects.",
    tech: ["React", "Redux", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    liveLink: "#",
    codeLink: "#",
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
                className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                    className="px-3 py-1 text-sm bg-white rounded-full shadow-sm"
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