import React from "react";
import AboutImg from "../../assets/avtar-img.png";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black/30 shadow-xl mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-20">
          <img className="md:h-80 mb-6 md:mb-0" src={AboutImg} alt="About img" />

          <ul className="space-y-6">

            <li className="flex gap-4">
              <FaCode size={30} className="mt-1 text-[#687EFF]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
                <p className="text-sm md:text-md text-gray-300">
                  Strong in building modern UI using React, Tailwind CSS, and Framer Motion.
                  I focus on responsive, fast, and smooth user interactions.
                </p>
              </span>
            </li>

            <li className="flex gap-4">
              <FaServer size={30} className="mt-1 text-[#4ECCA3]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
                <p className="text-sm md:text-md text-gray-300">
                  Experience with Node.js and Express to build secure and scalable backend APIs.
                </p>
              </span>
            </li>

            <li className="flex gap-4">
              <FaDatabase size={30} className="mt-1 text-[#62CDFF]" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">Database Handling</h1>
                <p className="text-sm md:text-md text-gray-300">
                  Skilled in working with MongoDB, creating efficient database structures, and connecting databases with backend APIs for real-world applications.
                </p>
              </span>
            </li>

         

          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
