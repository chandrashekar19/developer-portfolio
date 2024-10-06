// Summary And Greeting Section

import emoji from "react-easy-emoji";

// Import images for education, work, and achievements
import harvardLogo from "../assets/images/harvardLogo.png";
import stanfordLogo from "../assets/images/stanfordLogo.png";
import cpLogo from "../assets/images/cpLogo.png";
import ersteLogo from "../assets/images/ersteLogo.jpg";
import vodafoneLogo from "../assets/images/vodafoneLogo.png";
import saayaHealthLogo from "../assets/images/saayaHealthLogo.webp";
import nextuLogo from "../assets/images/nextuLogo.webp";
import codeInLogo from "../assets/images/codeInLogo.webp";
import googleAssistantLogo from "../assets/images/googleAssistantLogo.webp";
import pwaLogo from "../assets/images/pwaLogo.webp";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "David Rakosi",
  title: "Hi all, I'm David",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/drakosi99",
  gmail: "contact@davidrakosi.com",
  medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/davidrakosi/",
  twitter: "https://twitter.com/davidrakosi_",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third-party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: harvardLogo,
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Stanford University",
      logo: stanfordLogo,
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", // Insert stack or technology you have experience in
      progressPercentage: "90%", // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: cpLogo,
      date: "September 2020 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials",
      ],
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: ersteLogo,
      date: "July 2019 – September 2020",
      desc: "I lead software developers building the API for the bank in order to fulfill the PSD2 regulation requirements.",
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: vodafoneLogo,
      date: "November 2018 – July 2019",
      desc: "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    },
  ],
};

// Open Source Section to View Your Github Pinned Projects

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your GitHub username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: saayaHealthLogo,
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa",
        },
      ],
    },
    {
      image: nextuLogo,
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: codeInLogo,
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices worldwide.",
      image: googleAssistantLogo,
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certification from SMIT for PWA Web App Development",
      image: pwaLogo,
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learned.",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a465b1117c7",
      title:
        "Create a Google Assistant Action and Win a Google T-Shirt and Cloud Credits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      url: "https://medium.com/@davidrakosi/building-a-chat-application-with-react-56c03c1762a8",
      title: "Building a Chat Application with React",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "I would love to help you!",
  email: "contact@davidrakosi.com",
  phone: "+420 777 600 225",
  display: true, // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  talkSection,
  podcastSection,
};
