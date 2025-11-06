import React from "react";
import {FaHtml5,FaCss3,FaJs,FaReact,FaNode,FaGithub,} from "react-icons/fa";
import {SiTailwindcss,SiBootstrap,SiExpress,SiMongodb,SiVercel,SiNetlify,SiVscodium,SiPostman,SiNpm,} from "react-icons/si";

const Skills = () => {
  return (
    <section className=" flex flex-col justify-center items-center bg-[#171d32] text-white px-8 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-14 mt-4 md:gap-6 max-w-6xl w-full">

        {/* Frontend Div*/}
        <div>
          <div className="mb-6 inline-block bg-indigo-200/40 border border-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Frontend
          </div>

          <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
            {[
              { icon: <FaHtml5 size={50} color="#E34F26" />, label: "HTML5" },
              { icon: <FaCss3 size={50} color="#1572B6" />, label: "CSS3" },
              { icon: <FaJs size={50} color="#F7DF1E" />, label: "JavaScript" },
              { icon: <FaReact size={50} color="#61DAFB" />, label: "React" },
              {
                icon: <SiTailwindcss size={50} color="#38BDF8" />,
                label: "Tailwind",
              },
              {
                icon: <SiBootstrap size={50} color="#7952B3" />,
                label: "Bootstrap",
              },
            ].map((skill, i) => (
              <div key={i} className="skill-card">
                {skill.icon}
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & Database Div */}
        <div>
          <div className="mb-6 inline-block bg-indigo-200/40 border border-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Backend & Database
          </div>

          <div className="grid grid-cols-3 gap-6 sm:grid-cols-3">
            {[
              { icon: <FaNode size={50} color="#8CC84B" />, label: "Node.js" },
              { icon: <SiExpress size={50} color="#ffffff" />, label: "Express" },
              { icon: <SiMongodb size={50} color="#47A248" />, label: "MongoDB" },
            ].map((skill, i) => (
              <div key={i} className="skill-card">
                {skill.icon}
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Div*/}
        <div className="md:col-span-2">
          <div className="mb-6 inline-block bg-indigo-200/40 border border-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            Tools
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 sm:grid-cols-3">
            {[
              { icon: <FaGithub size={50} color="#FFFFFF" />, label: "GitHub" },
              { icon: <SiVercel size={50} color="#FFFFFF" />, label: "Vercel" },
              { icon: <SiNetlify size={50} color="#00C7B7" />, label: "Netlify" },
              { icon: <SiVscodium size={50} color="#2ECCFA" />, label: "VS Code" },
              { icon: <SiPostman size={50} color="#FF6C37" />, label: "Postman" },
              { icon: <SiNpm size={50} color="#CB3837" />, label: "NPM" },
            ].map((skill, i) => (
              <div key={i} className="skill-card">
                {skill.icon}
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .skill-card {
            background: #1f2937;
            padding: 18px;
            border-radius: 14px;
            text-align: center;
            color: white;
            font-size: 14px;
            transition: 0.3s ease;
            border: 1px solid rgba(255,255,255,0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .skill-card:hover {
            transform: translateY(-6px) scale(1.05);
            cursor: pointer;
            border-color: rgba(255,255,255,0.25);
            box-shadow: 0 8px 18px rgba(0,0,0,0.4);
          }
          .skill-card p {
            margin-top: 8px;
            font-size: 13px;
            opacity: 0.9;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
