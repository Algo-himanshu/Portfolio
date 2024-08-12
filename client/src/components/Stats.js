import React from "react";
import { PureIncrement } from "pure_counter";

const Stats = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-code" />
              <PureIncrement
                start={0}
                end={16}
                duration={1}
                className="purecounter"
              />
              <p>
                <strong>Projects</strong> <span>Personal</span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext" />
              <PureIncrement
                start={0}
                end={7}
                duration={1}
                className="purecounter"
              />
              <p>
                <strong>Projects</strong>
                <span>Company/Freelance work</span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-terminal-dash" />
              <PureIncrement
                start={0}
                end={21}
                duration={1}
                className="purecounter"
              />
              <p>
                <strong>Technologies</strong>
                <span>Learning Since 6 years.</span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-briefcase" />
              <PureIncrement
                start={0}
                end={6}
                duration={1}
                className="purecounter"
              />
              <p>
                <strong>Experience (In Months)</strong>
                <span>Internship Not Included</span>
              </p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
      </div>
    </section>
  );
};

export default Stats;
