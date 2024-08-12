import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "react-toastify/dist/ReactToastify.css";
import "glightbox/dist/css/glightbox.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations in milliseconds
      easing: "ease-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return <App />;
};

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
