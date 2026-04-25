
import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../../components/Logo/Logo';

const Navbar = () => {

    const navStyle = ({ isActive }) =>
        `font-semibold transition-all duration-300 rounded-xl px-4 py-2 ${
            isActive
                ? "bg-red-500 text-white shadow-md"
                : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg"
        }`;

    const links = (
        <>
            <li><NavLink to="/" className={navStyle}>Home</NavLink></li>
            <li><NavLink to="/about" className={navStyle}>About</NavLink></li>
            <li><NavLink to="/projects" className={navStyle}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={navStyle}>Contact</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm pt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                <div className="cursor-pointer text-xl">
                    <Logo />
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {links}
                </ul>
            </div>

           <div className="navbar-end">
            <NavLink
                to="/about"
                className="btn bg-red-500 text-white hover:bg-red-600 border-none rounded-xl"
            >
                Hire me
            </NavLink>
        </div>
        </div>
    );
};

export default Navbar;