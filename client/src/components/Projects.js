import React, { useEffect } from "react";
import GLightbox from "glightbox";

const Projects = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          These are some of my best projects, each showcasing a different
          technology and approach. Throughout these projects, I have explored
          various aspects of web and software development, focusing on creating
          innovative and functional solutions. I have consistently aimed to
          solve real-world problems while adhering to industry standards and
          best practices. Each project reflects my commitment to continuous
          learning and my ability to adapt to different development environments
          and challenges.
        </p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul
            className="portfolio-filters isotope-filters"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <li data-filter="*" className="filter-active">
              All Project
            </li>
          </ul>
          {/* End Portfolio Filters */}
          <div
            className="row gy-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/chat.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Real-Time Chat App</h4>
                  <p>MongoDB, Express.js, React.js, Node.js, Socket.io</p>
                  <a
                    href="assets/img/portfolio/chat.jpg"
                    title="A real-time messaging platform that supports instant communication between users."
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/Algo-himanshu/GLA-Developer-Society"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/ecommerce.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>PhoneZone</h4>
                  <p>MongoDB, Express.js, React.js, Node.js, Next.js</p>
                  <a
                    href="assets/img/portfolio/ecommerce.jpg"
                    title="An e-commerce platform for browsing and purchasing mobile phones with advanced search and comparison features."
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/Algo-himanshu/PhoneZone"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/hms.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Hospital Management System</h4>
                  <p>MongoDB, Express.js, React.js, Node.js</p>
                  <a
                    href="assets/img/portfolio/hms.png"
                    title="A system that allows users to select doctors and book appointments, enhancing healthcare management."
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/Algo-himanshu/Hospital-Management-System"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/omnishea.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Omnishea</h4>
                  <p>HTML, CSS, PHP, SQL</p>
                  <a
                    href="assets/img/portfolio/omnishea.jpg"
                    title="A social media website combining features of Reddit and Facebook for user interactions and content sharing."
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/Algo-himanshu/OmniShea"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/hrs.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Hotel Review System</h4>
                  <p>ML - Anaconda Jupyter Notebook</p>
                  <a
                    href="assets/img/portfolio/hrs.jpg"
                    title="Analyzes hotel reviews to determine sentiment and visualize frequent terms in a word cloud, aiding hotels in improving services."
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/Algo-himanshu/Hotel-Review-System-Using-NLP"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div className="portfolio-content h-100">
                <img
                  src="assets/img/portfolio/taskManager.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Task Management App</h4>
                  <p>React.js, Node.js, Express.js, MongoDB</p>
                  <a
                    href="assets/img/portfolio/taskManager.jpg"
                    title="A task management application that helps users organize and track their tasks efficiently with real-time updates and notifications."
                    data-gallery="portfolio-gallery-app"
                    className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
                  </a>
                  <a
                    href="https://github.com/Algo-himanshu/Movies-Library"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
