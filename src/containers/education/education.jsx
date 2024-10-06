import "./education.css";
import { educationInfo } from "../../data/portfolio";
import EducationCard from "../../components/education-card/education-card";

const Education = () => {
  return (
    educationInfo.display && (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    )
  );
};

export default Education;
