import React from "react";
import line from "../../assets/imgs/lines.svg";
import { experience } from "../../data/index.json"

export default function Experience() {
  return (
    <section id="experience-section" className="experience_container py-5">
      <div className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section_header">{experience.title}</h2>
            <img src={line} className="img-lines" alt="lines"></img>
          </div>
          <div className="col-md-12 mt-5">
            <ul className="timeline">
              {experience.experiences.map((exp, index) => (
                <li
                  key={`key_${index}`}
                  className="timeline-event"
                  data-aos="fade-up"
                >
                  <label className="timeline-event-icon"></label>
                  <div className="timeline-event-copy">
                    <p className="timeline-event-thumbnail">{exp.duration}</p>
                    <h3>{exp.role}</h3>
                    <h4 className="with_line">
                      {exp.organization + " - " + exp.type}
                    </h4>
                    {exp.description.map((a, index) => (
                      <div
                        key={`key_${index}`}
                        className="d-flex my-3 exp-desc"
                      >
                        <i className="fa fa-check mt-1"></i>
                        <p className="exp-p ml-2">{a}</p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
