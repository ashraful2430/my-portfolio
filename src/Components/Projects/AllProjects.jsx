import chatCanvas from "../../assets/chat-canvas1.png"
import ChatCanvas from "./ChatCanvas";
import LearnItWritIt from "../../assets/learnit.png"
import LearnIt from "./LearnIt";
import Tech from "../../assets/tech1.png"
import TechTrend from "./TechTrend";

const AllProjects = () => {
    return (
        <div id="projects">
            <h3 className="text-4xl text-center my-10 font-semibold">My <span className="text-[#66B888]">Projects</span></h3>
            <h1 className="text-center text-lg md:text-xl lg:text-3xl font-medium">Here are three of my best projects that i did so far</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                    <div className="card card-compact h-full  bg-base-100 shadow-xl">
                        <figure><img className="object-cover  h-52" src={chatCanvas} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Chat Canvas</h2>
                            <p>Welcome to the Forum Website – a platform for engaging discussions and interactions.</p>
                            <ChatCanvas></ChatCanvas>
                        </div>
                    </div>
                    <div className="card card-compact h-full  bg-base-100 shadow-xl">
                        <figure><img className="object-cover  h-52" src={LearnItWritIt} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Learn It Writ It

                            </h2>
                            <p>Welcome to Learn It Write It – a platform for creating, taking, and managing assignments</p>
                            <LearnIt></LearnIt>
                        </div>
                    </div>
                    <div className="card card-compact h-full  bg-base-100 shadow-xl">
                        <figure><img className="object-cover  h-52" src={Tech} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Techno Trend Store

                            </h2>
                            <p>Welcome to Tech Trend Store – your go-to destination for the latest and greatest in brand-related tech products.</p>
                            <TechTrend></TechTrend>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;