import React from "react";
import Tilt from "react-parallax-tilt";
import SumitImg from "../../assets/sumit-img.png";


const ImageEffect = () => {
    return (
        <div className="flex justify-center items-center ">
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.4}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="rounded-full"
            >
                <img
                    src={SumitImg}
                    alt="Profile"
                    className="  w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-[#465697]  shadow-xl object-cover object-[50%_0%] "
                />
            </Tilt>
        </div>
    );
};

export default ImageEffect;
