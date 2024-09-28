import PropTypes from "prop-types";

const About = (props) => {
  const { data } = props;

  if (data) {
    var Name = data?.name;
    var ProfilePic = "images/" + data?.image;
    var Bio = data?.bio;
    var Street = data?.address.street;
    var City = data?.address.city;
    var State = data?.address.state;
    var Zip = data?.address.zip;
    var Phone = data?.phone;
    var Email = data?.email;
    var ResumeDownload = data?.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={ProfilePic} alt="Chandrashekar" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{Bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{Name}</span>
                <br />
                <span>
                  {Street}
                  <br />
                  {City} {State}, {Zip}
                </span>
                <br />
                <span>{Phone}</span>
                <br />
                <span>{Email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={ResumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.string,
    }),
    phone: PropTypes.string,
    email: PropTypes.string,
    resumedownload: PropTypes.string,
  }).isRequired, // Marking data as required
};

export default About;
