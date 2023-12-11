import Lottie from "lottie-react";
import education from "../../assets/education.json"
import { FaLocationArrow } from "react-icons/fa";

const Education = () => {
    return (
        <div id="education">
            <h3 className="text-4xl text-center my-10">My <span className="text-[#66B888]">Education</span></h3>
            <div className="flex justify-center items-center gap-8 my-2">
                <div>
                    <Lottie className="w-96 h-96" animationData={education}></Lottie>
                </div>
                <div>
                    <div className="">
                        <h3 className="text-xl font-medium">Senior School Certificate </h3>
                        <p className="text-lg my-2">School: Bangladesh Railway High School</p>
                        <div className="flex gap-3 items-center text-lg mt-2">
                            <p><FaLocationArrow /></p>
                            <p> Bhairab , Kishargang , Dhaka </p>
                        </div>
                        <p className="text-lg mt-2">Group : Science</p>
                        <p className="text-lg mt-2">Marks : 4.44 GPA</p>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-xl font-medium">College :Chittagong PolyTechnich Institution </h3>
                        <div className="flex gap-3 items-center text-lg mt-2">
                            <p><FaLocationArrow /></p>
                            <p> 2 NO gate , Technical Mor , Chittagong </p>
                        </div>
                        <p className="text-lg mt-2">Technology : Computer Science</p>
                        <p className="text-lg mt-2">Marks : Still Running</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;