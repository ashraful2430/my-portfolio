import ashik from "../../assets/ashik.jpg";
import { FaEye, FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div id="home">
      <div className="flex justify-center items-center">
        <div>
          <img
            className="w-72 h-80 rounded-full object-cover"
            src={ashik}
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-5">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Welcome I am
        </h3>
        <h1 className="text-2xl lg:text-5xl text-[#66B888] font-semibold mt-2 lg:mt-4">
          ASHRAFUL ISLAM ASHIK
        </h1>
        <h1 className="text-2xl lg:text-4xl font-bold mt-2 lg:mt-4">
          Junior DevOps Engineer
        </h1>
        <p class="mt-4 text-lg italic text-gray-600 border-l-4 border-blue-500 pl-4">
          "Building scalable cloud systems | Automating deployments | Driving efficiency with DevOps"
        </p>
        <p className="mt-2 lg:mt-4">
          Hello there! I am{" "}
          <span className="font-bold text-[#66B888]">ASHRAFUL ISLAM ASHIK</span>
          ,  a Junior DevOps Engineer with 1.5+ years of hands-on experience in AWS, Terraform, Kubernetes, Ansible, and CI/CD automation.
          I specialize in designing resilient cloud infrastructure, streamlining deployments, and ensuring scalability through containerization and modern DevOps practices.
          Passionate about automation and efficiency, I thrive on solving complex cloud challenges and mentoring others in best practices.

        </p>
      </div>
      <div className="flex justify-center items-center gap-2 lg:gap-7 mt-5">
        <div>
          <a
            className="group relative inline-flex items-center overflow-hidden rounded bg-[#66B888] px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            href="https://drive.google.com/file/d/1d8hiVx9zFzWNxReLttSf4--uo_rWtrA4/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <FaEye></FaEye>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              {" "}
              See Resume{" "}
            </span>
          </a>
        </div>
        <div>
          <a
            className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-[#66B888] focus:outline-none focus:ring active:text-indigo-500"
            href="https://drive.usercontent.google.com/u/0/uc?id=1d8hiVx9zFzWNxReLttSf4--uo_rWtrA4&export=download"
            download="Ashraful Islam Ashik Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute -start-full transition-all group-hover:start-4">
              <FaDownload />
            </span>

            <span className="text-sm font-medium transition-all group-hover:ms-4">
              {" "}
              Download Resume{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
