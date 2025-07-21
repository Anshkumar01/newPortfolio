import React from "react";
const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16 mt-20">
      <img
        src="public/ansh.jpg"
        alt=""
        className="mx-auto mb-10 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Ansh Kumar
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="/ANSH%20KUMAR%20REsume%200011%20(1)%20(1).pdf"
          download
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
