import Lottie from 'lottie-react';
import aboutMe from '../../assets/about-me.json'

const AboutMeDetails = () => {
    return (
        <div id='about-me'>
            <div>
                <h3 className='text-center text-4xl font-semibold my-10'>
                    <span className='text-[#66B888]'>About</span> me
                </h3>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                {/* Lottie Animation */}
                <div>
                    <Lottie className='w-96' animationData={aboutMe}></Lottie>
                </div>

                {/* About Me Text */}
                <div className='my-4 max-w-xl'>
                    <p className='mb-4 md:text-xl flex items-center'>
                        <span className="mr-2">⚡</span>
                        Hello There! I’m 
                        <span className='ml-2 text-[#66B888] font-semibold'>Ashraful Islam Ashik</span>
                    </p>

                    {/* Quote Style */}
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
                        "CloudOps/DevOps Engineer with 1.5+ years of hands-on experience in AWS, Kubernetes, 
                        Terraform, and CI/CD automation. Passionate about building scalable systems, 
                        streamlining deployments, and driving efficiency."
                    </blockquote>

                    <p className="text-gray-700 mb-4">
                        I design and manage cloud infrastructure, automate deployments with Terraform and 
                        Ansible, and containerize applications using Docker and Kubernetes. I specialize 
                        in making deployments faster, scalable, and reliable.
                    </p>

                    <p className="text-gray-700 mb-4">
                        My journey started with curiosity for solving real-world challenges through automation. 
                        Today, I thrive on reducing complexity, fostering collaboration in Agile teams, and 
                        building resilient systems that empower innovation.
                    </p>

                    <p className="text-gray-700">
                        Beyond technical expertise, I believe in knowledge sharing, mentoring, and continuous 
                        learning. I see every project not just as a task, but as an opportunity to grow and 
                        create impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMeDetails;
