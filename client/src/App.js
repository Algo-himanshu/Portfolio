import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUpBTN from "./components/ScrollUpBTN";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");

    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      }
    };

    scrollTop?.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("load", toggleScrollTop);
    document.addEventListener("scroll", toggleScrollTop);

    /**
     * Cleanup function to remove event listeners when component unmounts
     */
    return () => {
      scrollTop?.removeEventListener("click", toggleScrollTop);
      window.removeEventListener("load", toggleScrollTop);
      document.removeEventListener("scroll", toggleScrollTop);
    };
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position="top-center" // Position the toast container
        autoClose={5000} // Duration in milliseconds (5000ms = 5 seconds)
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Show newest toast on top
        closeOnClick
        rtl={false}
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="light" // You can also use "dark" or customize further
      />
      <Header />
      <div className="mainContent">
        <Home />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Contact />
      </div>
      <Footer />
      <ScrollUpBTN />
    </div>
  );
}

export default App;
