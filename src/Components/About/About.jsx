import React from "react";
import AboutImg from "../../assets/avtar-img.png";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section className=" flex flex-col justify-center items-center bg-[#171d32] text-white px-6 py-16">
      
      <div className="flex flex-col md:flex-row items-center gap-32 max-w-5xl bg-black/40 p-10 rounded-2xl shadow-lg">

        <div className="flex justify-center">
          <img
            src={AboutImg}
            alt="Profile"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#687EFF] shadow-xl"
          />
        </div>

        <ul className="space-y-8">
          <li className="flex gap-4">
            <FaCode size={30} className="mt-1 text-[#687EFF]" />
            <span className="max-w-md">
              <h1 className="text-xl md:text-2xl font-semibold">Frontend Developer</h1>
              <p className="text-sm md:text-base text-gray-300">
                Expert in building interactive, fast, and responsive UIs using React, Tailwind CSS, and Framer Motion.
              </p>
            </span>
          </li>

          <li className="flex gap-4">
            <FaServer size={30} className="mt-1 text-[#4ECCA3]" />
            <span className="max-w-md">
              <h1 className="text-xl md:text-2xl font-semibold">Backend Developer</h1>
              <p className="text-sm md:text-base text-gray-300">
                Experienced in creating RESTful APIs with Node.js and Express, focusing on scalability and security.
              </p>
            </span>
          </li>

          <li className="flex gap-4">
            <FaDatabase size={30} className="mt-1 text-[#62CDFF]" />
            <span className="max-w-md">
              <h1 className="text-xl md:text-2xl font-semibold">Database Handling</h1>
              <p className="text-sm md:text-base text-gray-300">
                Skilled in MongoDB, schema design, and optimizing database performance for real-world applications.
              </p>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
