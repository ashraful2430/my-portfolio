import { BiSolidSchool } from "react-icons/bi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchoolSharp } from "react-icons/io5";

const Education = () => {
  return (
    <div id="education">
      <h3 className="text-4xl text-center my-10 font-semibold">
        My <span className="text-[#66B888]">Education</span>
      </h3>
      <div className=" my-2">
        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017 - 2018"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<BiSolidSchool />}
            >
              <p>Bangladesh Railway High School</p>
              <h4 className="vertical-timeline-element-subtitle">
                Bhairab , Kisharganj , Dhaka
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - Running"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<IoSchoolSharp />}
            >
              <h3 className="vertical-timeline-element-title">
                Computer Engineering
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Technical More , 2 No gate
              </h4>
              <p>Chattogram Polytechnic Institute</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        {/* <div>
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
                </div> */}
      </div>
    </div>
  );
};

export default Education;
