import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Embracing challenges with a positive mindset, I eagerly learn new
          technologies to innovate and grow continuously
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Full Time Software Developer</h4>
              <p>
                <em>
                  Innovative and deadline-driven Full Scale web developing
                  projects with 6+ months of experience designing and developing
                  user-centered apps and websites from initial concept to final,
                  polished deliverable.
                </em>
              </p>
              <ul>
                <li>Noida , Uttar Pradesh</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor Of Technology in computer Science</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>GLA University, Mathura</em>
              </p>
              <p>
                With each semester, I developed a deep understanding of both
                foundational and advanced concepts, from coding basics to
                complex algorithms. I spent countless hours learning about web
                development and experimenting with different tools and languages
                while embracing every opportunity to learn, whether through
                classroom lectures, hands-on projects, or collaborative team
                efforts.
              </p>
            </div>
            <div className="resume-item">
              <h4>Intermidiate</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>St. James Schhol NY</em>
              </p>
              <p>
                During my intermediate school years, I developed a strong
                interest in technology. I was fascinated by how websites and
                apps worked, and this curiosity quickly turned into a
                passion.This early exposure to technology laid the foundation
                for my continued interest in creating innovative digital
                solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Full stack developer</h4>
              <h5>2024 - Present</h5>
              <p>
                <em>Wingman Partners </em>
              </p>
              <ul>
                <li>
                  Gained expertise in backend technologies including Node.js,
                  Express, and MongoDB, contributing to the development and
                  maintenance of several key projects.
                </li>
                <li>
                  Improved database management skills, efficiently designing and
                  optimizing database schemas to enhance application performance
                  and data integrity.
                </li>
                <li>
                  Successfully implemented RESTful APIs, ensuring secure,
                  scalable, and maintainable code that aligns with industry
                  standards and best practices.
                </li>
                <li>
                  Developed problem-solving abilities by troubleshooting and
                  debugging complex issues, reducing downtime and improving
                  system reliability.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Web Developer Intern</h4>
              <h5>June - July , 2022</h5>
              <p>
                <em>Sayrnew.com, Bangalore, India</em>
              </p>
              <ul>
                <li>
                  Developed and maintained multiple responsive websites using
                  HTML, CSS, and JavaScript, ensuring cross-browser
                  compatibility and a seamless user experience across all
                  devices.
                </li>
                <li>
                  Gained proficiency in WordPress by customizing themes and
                  plugins to meet specific client requirements, which enhanced
                  the functionality and aesthetic appeal of their websites.
                </li>
                <li>
                  Collaborated with designers and content creators to implement
                  design mockups and integrate multimedia elements, resulting in
                  visually engaging and user-friendly web pages.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
