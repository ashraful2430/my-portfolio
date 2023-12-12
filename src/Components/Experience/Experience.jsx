import Lottie from "lottie-react";
import experience from "../../assets/experience.json"

const Experience = () => {
    return (
        <div id="experience">
            <h3 className="text-4xl text-center mt-10 font-semibold "><span className="text-[#66B888]">My</span> Experience</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-9 font-medium">
                <div>
                    <Lottie className="w-96 h-96" animationData={experience}></Lottie>
                </div>
                <div>
                    <p>As a fresh junior developer, I may not have formal work experience, but what sets me apart is my unwavering patience and determination to overcome challenges. I have  cultivated the ability to persistently tackle problems, demonstrating my commitment to finding effective solutions. In navigating the learning process, I have  honed my patience and resilience, ensuring that I can navigate obstacles and achieve successful outcomes.</p>
                    <br />
                    <p>
                        Moreover, I bring a dedicated mindset towards meeting deadlines. I have consistently met task completion timelines, showcasing my reliability and commitment to delivering results in a timely manner. My experience has taught me the value of perseverance, instilling in me the drive to explore multiple avenues until a solution is found.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Experience;