import { useState } from "react";
import Lottie from "lottie-react";
import skill from "../../assets/skills.json";

// MERN icons
import {
  FaHtml5, FaCss3, FaReact, FaNode, FaGithub, FaGitAlt
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNetlify, SiTailwindcss, SiDaisyui } from "react-icons/si";

// DevOps icons
import {
  SiAmazonaws, SiDocker, SiKubernetes, SiTerraform, SiAnsible,
  SiJenkins, SiPrometheus, SiGrafana, SiNginx, SiLinux,
  SiPostgresql, SiMongodb as SiMongoDevOps, SiGitlab, SiArgo
} from "react-icons/si";

const MERN_SKILLS = [
  { Icon: FaHtml5, label: "HTML", color: "text-red-500" },
  { Icon: FaCss3, label: "CSS", color: "text-blue-500" },
  { Icon: IoLogoJavascript, label: "JavaScript", color: "text-yellow-400" },
  { Icon: FaReact, label: "React", color: "text-blue-400" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "text-blue-400" },
  { Icon: SiMongodb, label: "MongoDB", color: "text-green-700" },
  { Icon: FaNode, label: "Node.js", color: "text-green-700" },
  { Icon: SiExpress, label: "Express", color: "text-black" },
  { Icon: IoLogoFirebase, label: "Firebase", color: "text-yellow-400" },
  { Icon: FaGithub, label: "GitHub", color: "text-black" },
  { Icon: FaGitAlt, label: "Git", color: "text-red-500" },
  { Icon: SiNetlify, label: "Netlify", color: "text-blue-500" },
  { Icon: SiDaisyui, label: "DaisyUI", color: "text-gray-700" },
];

const DEVOPS_SKILLS = [
  { Icon: SiAmazonaws, label: "AWS", color: "text-orange-500" },
  { Icon: SiDocker, label: "Docker", color: "text-blue-500" },
  { Icon: SiKubernetes, label: "Kubernetes", color: "text-blue-400" },
  { Icon: SiTerraform, label: "Terraform", color: "text-purple-600" },
  { Icon: SiAnsible, label: "Ansible", color: "text-red-500" },
  { Icon: SiJenkins, label: "Jenkins", color: "text-red-600" },
  { Icon: SiArgo, label: "ArgoCD (GitOps)", color: "text-orange-500" },
  { Icon: SiPrometheus, label: "Prometheus", color: "text-orange-600" },
  { Icon: SiGrafana, label: "Grafana", color: "text-yellow-600" },
  { Icon: SiNginx, label: "Nginx", color: "text-green-600" },
  { Icon: FaGithub, label: "GitHub", color: "text-black" },
  { Icon: SiGitlab, label: "GitLab CI/CD", color: "text-orange-600" },
  { Icon: SiLinux, label: "Linux", color: "text-black" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-700" },
  { Icon: SiMongoDevOps, label: "MongoDB", color: "text-green-700" },
];

const SkillCard = ({ Icon, label, color }) => (
  <div className="bg-gray-100 rounded-md shadow-lg p-5 mx-auto my-3 hover:shadow-2xl transition">
    <Icon className={`text-5xl ${color} mx-auto`} />
    <p className="text-center mt-3 font-medium">{label}</p>
  </div>
);

const Tabs = ({ tab, setTab }) => {
  const active =
    "bg-[#66B888] text-white shadow-md";
  const inactive =
    "bg-white text-gray-700 hover:bg-gray-50 border";

  return (
    <div role="tablist" aria-label="Skills tabs" className="flex gap-2 mb-6 justify-center">
      <button
        role="tab"
        aria-selected={tab === "mern"}
        onClick={() => setTab("mern")}
        className={`px-4 py-2 rounded-full border transition ${tab === "mern" ? active : inactive}`}
      >
        MERN
      </button>
      <button
        role="tab"
        aria-selected={tab === "devops"}
        onClick={() => setTab("devops")}
        className={`px-4 py-2 rounded-full border transition ${tab === "devops" ? active : inactive}`}
      >
        DevOps
      </button>
    </div>
  );
};

const Skills = () => {
  const [tab, setTab] = useState("devops"); // default can be "mern"

  const data = tab === "mern" ? MERN_SKILLS : DEVOPS_SKILLS;

  return (
    <div id="skills">
      <h3 className="text-center text-4xl font-semibold mt-10 mb-5">
        My <span className="text-[#66B888]">Skills</span>
      </h3>
      <h3 className="text-xl lg:text-3xl mb-3  text-center">
        Here are the skills I’m proficient with
      </h3>

      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
        {/* Animation */}
        <div>
          <Lottie className="w-96 h-96" animationData={skill} />
        </div>

        {/* Tabs + Grid */}
        <div className="w-full max-w-4xl ">
          <Tabs tab={tab} setTab={setTab} />

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-center"
            role="tabpanel"
            aria-label={tab === "mern" ? "MERN Skills" : "DevOps Skills"}
          >
            {data.map((item) => (
              <SkillCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
