import React from "react";
import ImageEffect from "./MyImage";
import TypingText from "./TypingText";
import SumitResume from "../../assets/sumit-resume.pdf"

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 gap-10 ">
      <div className="md:w-2/4 md:pt-10">
        <TypingText />
        <p className="text-gray-300 mt-3 text-lg">
          Focused on building modern web applications and always learning new skills to grow better every day.
        </p>
        
        <a
          href={SumitResume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block text-white text-sm md:text-lg md:py-2 md:px-4 py-2 px-3 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] "
        >
          Download CV
        </a>
      </div>

      <div>
        <ImageEffect />
      </div>
    </div>
  );
};

export default Home;
