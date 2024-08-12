import React from "react";

const ScrollUpBTN = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#!"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center"
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short" />
    </a>
  );
};

export default ScrollUpBTN;

// import React from "react";

// const ScrollUpBTN = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <button
//       id="scroll-top"
//       className="scroll-top d-flex align-items-center justify-content-center"
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//     >
//       <i className="bi bi-arrow-up-short" />
//     </button>
//   );
// };

// export default ScrollUpBTN;
