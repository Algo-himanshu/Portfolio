import React from "react";

const Services = () => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          I possess a diverse skill set as a Full Stack Developer, with strong
          expertise in both frontend and backend development. I excel in
          creating responsive user interfaces using modern frameworks like
          React.js and Next.js while ensuring robust server-side logic with
          Node.js and PHP. My knowledge of databases like SQL and MongoDB allows
          me to manage data efficiently. Additionally, I have experience in
          system design, crafting scalable and reliable architectures. My UI/UX
          design skills enable me to create intuitive and visually appealing
          digital experiences, and my understanding of DevOps practices ensures
          smooth, automated deployments and continuous integration.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-server" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Backend Developer
                </a>
              </h4>
              <p className="description">
                Design and implement server-side logic, manage databases, and
                ensure seamless communication between the front end and backend
                systems. Create efficient APIs, manage server infrastructure,
                and optimize application performance for scalability.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-window" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Frontend Developer
                </a>
              </h4>
              <p className="description">
                Focus on creating intuitive user experiences by translating
                designs into functional web pages, ensuring cross-browser
                compatibility and accessibility.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-layers" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  Full Stack Developer
                </a>
              </h4>
              <p className="description">
                Handle everything from the user interface to server logic,
                integrating databases, and deploying applications, ensuring
                cohesive functionality across the entire stack.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-diagram-3" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  System Designer
                </a>
              </h4>
              <p className="description">
                Design the overall structure of applications, including data
                flow, communication between components, and system integration,
                ensuring a robust foundation for development.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-palette" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  UI/UX Designer
                </a>
              </h4>
              <p className="description">
                Create user-centered designs that enhance usability and
                satisfaction. Conduct user research, design wireframes,
                prototypes, and user interfaces, ensuring that digital products
                are both visually appealing and intuitive to use.
              </p>
            </div>
          </div>
          {/* End Service Item */}
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-gear" />
            </div>
            <div>
              <h4 className="title">
                <a href="service-details.html" className="stretched-link">
                  DevOps Engineer
                </a>
              </h4>
              <p className="description">
                Bridge the gap between development and operations by automating
                deployment processes, managing CI/CD pipelines, and ensuring
                smooth collaboration between teams.
              </p>
            </div>
          </div>
          {/* End Service Item */}
        </div>
      </div>
    </section>
  );
};

export default Services;
