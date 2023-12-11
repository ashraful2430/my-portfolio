

import ashik from "../../assets/ashik.jpg"
import { FaEye, FaDownload } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div id="home">
            <div className="flex justify-center items-center">

                <div>
                    <img className="w-72 h-80 rounded-full object-cover" src={ashik} alt="" />
                </div>
            </div>
            <div className="text-center mt-5">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">Welcome I am</h3>
                <h1 className="text-2xl lg:text-5xl text-[#66B888] font-semibold mt-2 lg:mt-4">ASHRAFUL ISLAM ASHIK</h1>
                <h1 className="text-2xl lg:text-4xl font-bold mt-2 lg:mt-4">MERN Stack Developer</h1>
                <p className="mt-2 lg:mt-4">Hello there! I am <span className="font-bold text-[#66B888]">ASHRAFUL ISLAM ASHIK</span>, a dynamic and enthusiastic junior MERN stack developer on a mission to transform innovative ideas into robust, user-friendly web applications. With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on turning complex problems into elegant, efficient solutions.</p>
            </div>
            <div className="flex justify-center items-center gap-2 lg:gap-7 mt-5">

                <a
                    className="group relative inline-flex items-center overflow-hidden rounded bg-[#66B888] px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                    href="https://drive.google.com/file/d/1SaT9USxjw2FiR6wAl3NpXe1LIdXMoj1W/view?usp=sharing"
                >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                        <FaEye></FaEye>
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:ms-4"> See Resume </span>
                </a>
                <a
                    className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-[#66B888] focus:outline-none focus:ring active:text-indigo-500"
                    href="https://drive.google.com/u/0/uc?id=1SaT9USxjw2FiR6wAl3NpXe1LIdXMoj1W&export=download"
                    download="Ashraful Islam Ashik Resume.pdf"
                >
                    <span className="absolute -start-full transition-all group-hover:start-4">
                        <FaDownload />
                    </span>

                    <span className="text-sm font-medium transition-all group-hover:ms-4"> Download Resume </span>
                </a>

            </div>
        </div>
    );
};

export default AboutMe;