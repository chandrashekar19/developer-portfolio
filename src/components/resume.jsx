import PropTypes from "prop-types";

const Resume = (props) => {
  const { data } = props;

  let education, work, skills, skillmessage;

  if (data) {
    skillmessage = data.skillmessage;

    education = data.education.map((edu) => (
      <div key={edu.school}>
        <h3>{edu.school}</h3>
        <p className="info">
          {edu.degree} <span>&bull;</span>
          <em className="date">{edu.graduated}</em>
        </p>
        <p>{edu.description}</p>
      </div>
    ));

    work = data.work.map((job) => (
      <div key={job.company}>
        <h3>{job.company}</h3>
        <p className="info">
          {job.title}
          <span>&bull;</span>
          <em className="date">{job.years}</em>
        </p>
        <p>{job.description}</p>
      </div>
    ));

    skills = data.skills.map((skill) => {
      const className = "bar-expand " + skill.name.toLowerCase();
      return (
        <li key={skill.name}>
          <span style={{ width: skill.level }} className={className}></span>
          <em>{skill.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <p>{skillmessage}</p>
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// PropTypes validation
Resume.propTypes = {
  data: PropTypes.shape({
    skillmessage: PropTypes.string,
    education: PropTypes.arrayOf(
      PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        graduated: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    work: PropTypes.arrayOf(
      PropTypes.shape({
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        years: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Resume;
