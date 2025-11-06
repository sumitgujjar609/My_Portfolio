import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center text-white px-6 py-20 bg-[#171d32] min-h-screen">

      {/* 🔹 Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold inline-block border-b-4 border-indigo-500 pb-2">
          Contact Me
        </h2>
       
      </div>

      {/* 🔹 Contact Container */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-14 max-w-5xl bg-black/40 p-10 md:p-16 rounded-2xl shadow-lg w-full md:w-[80%]">

        {/* 🔸 Left Text Section */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Let’s Connect
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-sm">
            Feel free to reach out for collaborations, freelance projects, or just a friendly chat!
          </p>
        </div>

        {/* 🔸 Contact Links */}
        <ul className="space-y-5 text-sm md:text-lg">
          <li className="flex gap-4 items-center hover:text-[#687EFF] transition-all duration-300">
            <MdOutlineEmail size={24} />
            <a
              href="mailto:sumitgujjar609@gmail.com"
              className="hover:underline"
            >
              sumitgujjar609@gmail.com
            </a>
          </li>

          <li className="flex gap-4 items-center hover:text-[#687EFF] transition-all duration-300">
            <FaGithub size={24} />
            <a
              href="https://github.com/sumitgujjar609"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/sumitgujjar609
            </a>
          </li>

          <li className="flex gap-4 items-center hover:text-[#687EFF] transition-all duration-300">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/sumit-gujjar-422604279"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/sumit-gujjar-422604279
            </a>
          </li>

          <li className="flex gap-4 items-center hover:text-[#687EFF] transition-all duration-300">
            <FaWhatsapp size={24} />
            <a
              href="https://wa.me/916395948248"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              +91 6395948248
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
