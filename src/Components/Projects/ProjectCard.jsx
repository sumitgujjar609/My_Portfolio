const ProjectCard = ({ title, main, demoLink, codeLink,Img }) => {
  return (
    <div className="p-3  flex flex-col w-80 bg-[#393942] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4 h-52" src={Img} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-base md:text-md leading-tight py-2">{main}</p>

      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Live
        </a>

        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
