import Lottie from "lottie-react";
import education from "../../assets/education.json"

const Education = () => {
    return (
        <div id="education">
            <h3 className="text-4xl text-center my-10 font-semibold">My <span className="text-[#66B888]">Education</span></h3>
            <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8 my-2">
                <div>
                    <Lottie className="w-96 h-96" animationData={education}></Lottie>
                </div>
                <div>
                    <div className="">
                        <div className="card ">
                            <div className="card-body">
                                <h2 className="card-title">Secondary School Certificate (SSC)</h2>
                                <p>Bangladesh Railway High School</p>
                                <div className="flex items-center text-lg mt-2">
                                    <p>Location: Bhairab , Kishargang , Dhaka </p>
                                </div>
                                <p className="text-lg mt-2">Group : Science</p>
                                <p className="text-lg mt-2">Marks : 4.44 GPA</p>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <div className="card ">
                            <div className="card-body">
                                <h2 className="card-title">Polytechnic Institute.</h2>
                                <p>Chittagong PolyTechnich Institution</p>
                                <div className="flex items-center text-lg mt-2">
                                    <p>Location: Bhairab , Kishargang , Dhaka </p>
                                </div>
                                <p className="text-lg mt-2">Technology : Computer Science</p>
                                <p className="text-lg mt-2">Marks : Still Running</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;