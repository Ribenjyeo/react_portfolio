import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  const skillsArray = [
    {
      title: "React",
      imgUrl: images.react,
      bgColor: "",
    },
    {
      title: "Redux",
      imgUrl: images.redux,
      bgColor: "",
    },
    {
      title: "Figma",
      imgUrl: images.figma,
      bgColor: "",
    },
    {
      title: "Typescript",
      imgUrl: images.typescript,
      bgColor: "",
    },
    {
      title: "Git",
      imgUrl: images.git,
      bgColor: "",
    },
    {
      title: "Flutter",
      imgUrl: images.flutter,
      bgColor: "",
    },
    {
      title: "HTML",
      imgUrl: images.html,
      bgColor: "",
    },
    {
      title: "CSS",
      imgUrl: images.css,
      bgColor: "",
    },
    {
      title: "NodeJS",
      imgUrl: images.node,
      bgColor: "",
    },
    {
      title: "Mui 5",
      imgUrl: images.mu5,
      bgColor: "",
    },
  ];

  const expArray = [
    {
      title: "Software Engineer",
      company: "Meta",
      desc: "I worked as a Software Engineer at Meta",
      year: "2022",
    },
    {
      title: "Software Engineer",
      company: "Microsoft",
      desc: "I worked as a Software Engineer at Microsoft",
      year: "2022",
    },
    {
      title: "Software Engineer",
      company: "Student",
      desc: "I worked as a Software Engineer at Student",
      year: "2021",
    },
  ];

  useEffect(() => {
    setSkills(skillsArray);
    setExperience(expArray);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((item, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={item.title}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <p className="p-text">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experience?.map((item, index) => (
            <motion.div className="app__skills-exp-item" key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{item.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    key={index}
                  >
                    <h4 className="bold-text">{item.title}</h4>
                    <p className="p-text">{item.company}</p>
                  </motion.div>
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
