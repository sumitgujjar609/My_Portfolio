import { Typewriter } from "react-simple-typewriter";

const TypingText = () => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
                Hi, I'm <span className="text-blue-400">Sumit</span>
            </h1>

            <h2 className="text-2xl font-semibold text-white">
                <Typewriter
                    words={[
                        "Full Stack Developer",
                        "MERN Stack Specialist",
                        "Frontend + Backend Developer",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </h2>

          

        </div>
    );
};

export default TypingText;
