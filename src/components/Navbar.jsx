import React from "react";
import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="header flex items-center justify-between transition-all duration-500">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">RS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black dark:text-white"
          }
        >
          Projects
        </NavLink>
      </nav>
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setIsDark(!isDark)}
        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <span className={` transition-transform duration-300 ease-in-out ${isDark ? 'rotate-180' : ''}`}>
          {isDark ? (
            // Sun icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentColor"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
              />
            </svg>
          ) : (
            // Moon icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </span>
      </button>
    </header>
  );
};

export default Navbar;
