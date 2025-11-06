import React from "react";
import ProjectCard from "./ProjectCard";
import SamsungImg from "../../assets/samsung-clone-img.png";
import WeatherImg from "../../assets/weather-img.avif";
import TodolistImg from "../../assets/to-do-list-img.webp";
import BootstrapImg from "../../assets/bootstrap-img.jpg";


const Projects = () => {
  return (
    <div id="Projects" className="p-5 md:p-0 md:px-24  text-white ">
   
      <div className="md:py-8 md:px-8 flex flex-wrap gap-4">
        <ProjectCard
          Img={SamsungImg}
          title="Samsung Clone"
          main="A fully responsive Samsung website clone created using HTML, CSS and JavaScript with smooth UI and product section."
          demoLink="https://samsung-website-clone-gray.vercel.app/"
          codeLink="https://github.com/sumitgujjar609/Samsung-Website-Clone.git"
        />

        <ProjectCard
          Img={WeatherImg}
          title="Weather App"
          main="Simple weather app using HTML, CSS and JavaScript that fetches live weather data from WeatherAPI."
          demoLink="https://weather-api-beta-ten.vercel.app/"
          codeLink="https://github.com/sumitgujjar609/Weather-App.git"
        />

        <ProjectCard
          Img={TodolistImg}
          title="To-Do App"
          main="To-Do List app built with HTML, CSS and JavaScript to add, delete and manage tasks."
          demoLink="https://to-do-list-gwdto68c2-sumit-kumars-projects-c0bce058.vercel.app/"
          codeLink="https://github.com/sumitgujjar609/TO-DO-LIST.git"
        />

        <ProjectCard
          Img={BootstrapImg}
          title="SmartTech Store"
          main="Bootstrap 5 based responsive website including navbar, cards, grid layout and forms."
          demoLink="https://majestic-gumption-8eb327.netlify.app/"
          codeLink="https://github.com/sumitgujjar609/Sumit-Bootstrap-Project.git"
        />
      </div>
    </div>
  );
};

export default Projects;
