import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 px-6 lg:px-20">

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white-500">
            Taposh Barai Portfolio
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            I am a passionate frontend developer focused on building
            modern, responsive and user-friendly web applications.
            Let's build something amazing together.
          </p>
        </div>

        {/* Quick Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
          <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>
          <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
              }`
            }
          >
            About
          </NavLink>
        </li>

           <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
              }`
            }
          >
            Projects
          </NavLink>
        </li>
            
               <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer transition duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-400 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1GKTbwdPga/"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com/taposh_barai03S"
              className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="www.linkedin.com/in/taposh-barai-03s"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 transition"
            >
              <FaLinkedinIn />
            </a>

            {/* <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a> */}
           
        <div className="relative group">
        <a
            href="https://wa.me/8801792524289"
            target="_blank"
            className="p-3 bg-gray-800 rounded-full hover:bg-green-500 transition inline-flex items-center justify-center"
        >
            <FaWhatsapp />
        </a>

        {/* Tooltip / Number */}
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-green-500 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap">
            +880 1792524289
        </div>
        </div>

          </div>

          <p className="text-gray-400 mt-8 text-sm">
            Let's connect and build something great 
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Taposh Barai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;