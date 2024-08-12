import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [" Full Stack Developer", " Freelancer", " Lifelong Learner"],
      typeSpeed: 60,
      backSpeed: 35,
      loop: true,
      backDelay: 2000,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src="assets/img/hero-bg.jpg"
        alt=""
        data-aos="fade-in"
        className="hero-image"
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Himanshu Kumar Tiwari</h2>
        <p>
          I'm a <span className="typed" ref={typedElement}></span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Home;
