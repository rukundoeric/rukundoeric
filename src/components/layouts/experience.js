import React from "react";
import line from "../../assets/imgs/lines.svg";
import { experience } from "../../data/index.json"

export default function Experience() {
  return (
    <section className="experience_container py-5" id="experience">
      <div class="section">
        <div class="container">
          <div class="text-center">
            <h2 className="section_header">My Experience</h2>
            <img src={line} class="img-lines" alt="lines"></img>
          </div>
          <div class="col-md-12 mt-5">
            <ul class="timeline">
              {experience.map((exp) => (
                <li class="timeline-event" data-aos="fade-up">
                  <label class="timeline-event-icon"></label>
                  <div class="timeline-event-copy">
                    <p class="timeline-event-thumbnail">{exp.duration}</p>
                    <h3>{exp.role}</h3>
                    <h4 className="with_line">
                      {exp.organization + " - " + exp.type}
                    </h4>
                    {exp.description.map((a) => (
                      <div className="d-flex my-3 exp-desc">
                        <i class="fa fa-check mt-1"></i>
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
