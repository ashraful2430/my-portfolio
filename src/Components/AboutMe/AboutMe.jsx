
import ashik from "../../assets/ashik.jpg"

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
        </div>
    );
};

export default AboutMe;