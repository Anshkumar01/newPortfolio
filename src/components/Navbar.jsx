import React from "react";

const NavLink = ({ id, children }) => (
  <a
    href={`#${id}`}
    className="hover:text-gray-400"
    onClick={(e) => {
      e.preventDefault();
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    {children}
  </a>
);

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-50">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">Ansh Kumar</div>
        <div className="space-x-6">
          <NavLink id="home">Home</NavLink>
          <NavLink id="about">About Me</NavLink>
          <NavLink id="service">Services</NavLink>
          <NavLink id="project">Projects</NavLink>
          <NavLink id="contact">Contact</NavLink>
        </div>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
