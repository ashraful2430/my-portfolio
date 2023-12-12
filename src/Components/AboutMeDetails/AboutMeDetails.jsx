import Lottie from 'lottie-react';
import aboutMe from '../../assets/about-me.json'

const AboutMeDetails = () => {
    return (
        <div id='about-me'>
            <div>
                <h3 className='text-center text-4xl font-semibold my-10'><span className='text-[#66B888]'>About</span> me</h3>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div>
                    <Lottie className='w-96' animationData={aboutMe}></Lottie>
                </div>
                <div className='my-4'>
                    <p className='mb-4 md:text-xl'>
                        👋 Hello There ! I m <span className='text-[#66B888]'>Ashraful Islam Ashik</span>
                    </p>
                    <p>I am a dynamic junior MERN (MongoDB, Express.js, React.js, Node.js) stack developer with a fervor for crafting captivating web experiences. As a tech enthusiast, I specialize in building responsive and user-friendly applications, leveraging the power of modern web technologies.</p>
                    <br />
                    <p>My journey into the world of web development began with a passion for turning ideas into reality. I find joy in solving complex problems and take pride in creating efficient, elegant solutions that bring value to users.
                    </p>
                    <br />
                    <p>What sets me apart is not just my technical acumen but also my commitment to effective collaboration and communication. I thrive in team environments, valuing open dialogue, constructive feedback, and shared success. I see every project as an opportunity for growth and learning.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutMeDetails;