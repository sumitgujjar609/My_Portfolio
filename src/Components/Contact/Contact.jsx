import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col gap-6 md:flex-row md:justify-between bg-[#2a3535] text-white p-10 md:p-16 items-center"
    >
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Let’s Connect</h3>
      </div>

      <ul className="text-sm md:text-xl space-y-3">


        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:sumitgujjar609@gmail.com"
            className="hover:underline"
          >
            sumitgujjar609@gmail.com
          </a>
        </li>


        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/sumitgujjar609"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline "
          >
            github.com/sumitgujjar609
          </a>
        </li>

       

        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/sumit-gujjar-422604279"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/sumit-gujjar-422604279
          </a>
        </li>

        <li className="flex gap-2 items-center">
          <FaWhatsapp size={20} />
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
  );
};

export default Contact;
