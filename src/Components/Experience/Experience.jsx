import Lottie from "lottie-react";
import experience from "../../assets/experience.json";

const Experience = () => {
  return (
    <div id="experience" className="py-12">
      <h3 className="text-4xl text-center mt-10 font-semibold">
        <span className="text-[#66B888]">My</span> Experience
      </h3>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-9 font-medium mt-8">
        {/* Left: Lottie Animation */}
        <div>
          <Lottie className="w-96 h-96" animationData={experience}></Lottie>
        </div>

        {/* Right: Experience Content */}
        <div className="max-w-2xl">
          {/* Quote-style highlight */}
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
            "Junior DevOps Engineer at SDB IT, deploying and automating scalable
            cloud infrastructure with AWS, Terraform, Kubernetes, and CI/CD pipelines."
          </blockquote>

          <p className="text-gray-700 mb-4">
            At <span className="font-semibold">SDB IT</span>,
            I have been working as a Junior DevOps Engineer since February 2024.
            My responsibilities include designing and deploying scalable
            cloud-native applications, managing microservices with Docker and
            Kubernetes, and ensuring reliability through Infrastructure as Code
            using Terraform and Ansible.
          </p>

          <p className="text-gray-700 mb-4">
            I optimized CI/CD pipelines using GitLab CI/CD and ArgoCD, enabling
            rapid and reliable deployments with automated rollbacks. I also
            configured and monitored AWS services such as VPC, RDS, S3, IAM,
            ELB, and Auto Scaling to ensure performance, security, and cost
            efficiency.
          </p>

          <p className="text-gray-700">
            In addition, I implemented observability solutions with Prometheus,
            Grafana, and the EFK stack, improving system visibility and proactive
            issue resolution. I also mentor Bootcamp students with hands-on
            DevOps labs and contribute to content development aligned with
            industry best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
