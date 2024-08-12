import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200; // Adjust offset as needed

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list" />
      <div className="profile-img">
        <img
          src="assets/img/my-profile-img.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>
      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Himanshu Tiwari</h1>
      </a>
      <div className="social-links text-center">
        <a href="https://x.com/himanshut909" className="twitter">
          <i className="bi bi-twitter-x" />
        </a>
        <a
          href="https://www.youtube.com/@HimanshuTiwarii1210"
          className="youtube"
        >
          <i className="bi bi-youtube" />
        </a>
        <a href="https://www.instagram.com/mr_him4nshu/" className="instagram">
          <i className="bi bi-instagram" />
        </a>
        <a href="https://github.com/Algo-himanshu" className="google-plus">
          <i className="bi bi-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-kumar-tiwari/"
          className="linkedin"
        >
          <i className="bi bi-linkedin" />
        </a>
      </div>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="#hero"
              className={activeSection === "#hero" ? "active" : ""}
            >
              <i className="bi bi-house navicon" />
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "#about" ? "active" : ""}
            >
              <i className="bi bi-person navicon" /> About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={activeSection === "#resume" ? "active" : ""}
            >
              <i className="bi bi-file-earmark-text navicon" /> Resume
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === "#portfolio" ? "active" : ""}
            >
              <i className="bi bi-images navicon" /> Portfolio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === "#services" ? "active" : ""}
            >
              <i className="bi bi-hdd-stack navicon" /> Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "#contact" ? "active" : ""}
            >
              <i className="bi bi-envelope navicon" /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
