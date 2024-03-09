import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className='flex flex-col sm:flex-row gap-4 lg:w-full justify-center text-white text-center'>
            <NavLink
                to="/"
                className="mb-2 md:mb-0 md:mr-10 hover:text-yellow-300 uppercase font-bold">
                Home
            </NavLink>

            <NavLink
                className="mb-2 md:mb-0 md:mr-10 text-white hover:text-yellow-300 uppercase font-bold"
                to="/circuits"
            >
                Circuits
            </NavLink>

            <NavLink
                className="mb-2 md:mb-0 md:mr-10 text-white hover:text-yellow-300 uppercase font-bold"
                to="/races"
            >
                Races
            </NavLink>

            <NavLink
                className="mb-2 md:mb-0 md:mr-10 text-white hover:text-yellow-300 uppercase font-bold"
                to="/drivers"
            >
                Drivers
            </NavLink>

            <NavLink
                className="mb-2 md:mb-0 text-white hover:text-yellow-300 uppercase font-bold"
                to="/teams"
            >
                Teams
            </NavLink>
        </nav>
    );
};
