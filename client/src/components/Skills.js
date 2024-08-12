import React from "react";
import { PureIncrement } from "pure_counter";

const skills = [
  { name: "HTML", percentage: 75 },
  { name: "CSS", percentage: 65 },
  { name: "JavaScript", percentage: 70 },
  { name: "PHP", percentage: 65 },
  { name: "Wordpress", percentage: 70 },
  { name: "React JS", percentage: 80 },
  { name: "Node JS", percentage: 85 },
  { name: "SQL", percentage: 70 },
  { name: "Mongo DB", percentage: 70 },
  { name: "Bootstrap", percentage: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Continuously learning new skills while refining and enhancing my
          existing knowledge.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row skills-content skills-animation">
          {skills.slice(0, 10).map((skill, index) => (
            <div className="col-lg-6" key={index}>
              <div className="progress">
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">
                    <PureIncrement
                      start={0}
                      end={skill.percentage}
                      duration={1.3}
                      className="purecounter"
                    />
                    %
                  </i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
              {/* End Skills Item */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
