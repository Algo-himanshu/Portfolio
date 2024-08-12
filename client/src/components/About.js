import React from "react";

const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Driven by a passion for technology and innovation, I specialize in
          creating dynamic, user-friendly applications that solve real-world
          problems. My experience in full-stack development allows me to
          approach projects with a holistic view, ensuring that both the
          front-end and back-end work seamlessly together to deliver a superior
          user experience. Whether I'm building a mobile app or a complex web
          application, my goal is to create efficient, scalable solutions that
          exceed expectations.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src="assets/img/portfolio/Picsart_24-08-12_01-18-50-500.jpg"
              className="img-fluid"
              alt=""
              style={{ "clip-path": "inset(0 0 50px 0)" }}
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Full Stack Developer .</h2>
            <p className="fst-italic py-3">
              Successfully led and contributed to cross-functional teams,
              ensuring seamless integration between design and functionality.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Birthday:</strong> <span>12 Sept,2001</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Hobby:</strong> <span>ESports And Doodling</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Phone:</strong> <span>+91 7456020565</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>City:</strong>
                    <span>Raebareli, Uttar Pradesh </span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" /> <strong>Age:</strong>
                    <span>22</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Degree:</strong> <span>B.Tech(CSE)</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Email:</strong>
                    <span>himanshut909@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I’m the kind of person who thrives on challenges, whether it’s
              cracking a complex coding problem, optimizing a piece of software,
              or figuring out the most efficient way to organize my workspace. I
              find a deep sense of satisfaction in solving puzzles, and this
              love for problem-solving extends beyond my work; it's a
              fundamental part of who I am. My friends and colleagues often
              describe me as a natural problem-solver with a keen eye for
              detail. They appreciate my ability to approach issues from
              multiple angles and come up with creative solutions that others
              might overlook. Despite my analytical nature, I maintain a
              laid-back and approachable demeanor. I’m always ready for a
              spontaneous adventure, whether it’s exploring a new city, trying
              out a novel technology, or engaging in deep conversations about
              the future of tech and the impact it has on our world. This
              balance between a focused, detail-oriented mindset and a relaxed,
              adaptable attitude allows me to navigate both work and life with a
              sense of purpose and enjoyment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
