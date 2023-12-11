import Lottie from "lottie-react";
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import skill from "../../assets/skills.json"

const Skills = () => {
    return (
        <div>
            <h3 className="text-center text-4xl font-medium my-10">My <span className="text-[#66B888]">Skills</span></h3>
            <div className="flex flex-col lg:flex-row-reverse justify-center  items-center gap-5">
                <div>
                    <Lottie className="w-96 h-96" animationData={skill}></Lottie>
                </div>
                <div>
                    <h3 className="text-3xl">Here are some skill that I am proficient with </h3>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-center">
                            <div className="bg-gray-200 rounded-md shadow-xl p-5 mx-auto my-3">
                                <FaHtml5 className="text-6xl text-red-500"></FaHtml5>
                                <p className="text-center mt-3">HTML</p>
                            </div>
                            <div className="bg-gray-200 rounded-md shadow-xl p-5 mx-auto my-3">
                                <FaCss3 className="text-6xl text-blue-500" />
                                <p className="text-center mt-3">CSS</p>
                            </div>
                            <div className="bg-gray-200 rounded-md shadow-xl p-5 mx-auto my-3">
                                <IoLogoJavascript className="text-6xl text-yellow-400" />
                                <p className="text-center mt-3">Java Script</p>
                            </div>
                            <div className="bg-gray-200 rounded-md shadow-xl p-5 mx-auto my-3">
                                <FaReact className="text-6xl text-blue-400" />
                                <p className="text-center mt-3">React</p>
                            </div>
                            <div className="bg-gray-200 rounded-md shadow-xl p-5 mx-auto my-3">
                                <SiTailwindcss className="text-6xl text-blue-400" />
                                <p className="text-center mt-3">Tailwind</p>
                            </div>
                            <div className="bg-gray-200 rounded-md shadow-xl p-5 mx-auto my-3">
                                <SiMongodb className="text-6xl text-green-700" />
                                <p className="text-center mt-3">MongoDb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;