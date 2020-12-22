import React from "react";
import line from "../../assets/imgs/lines.svg";
import { about  } from "../../data/index.json";

export default function About() {
  return (
    <section id="about-section" className="section-about text-center">
      <div className="container about_container">
        <div className="row my-5">
          <div className="col-md-12 col-md-offset-3 px-5">
            <h2 className="section_header">{about.title}</h2>
            <img src={line} className="img-lines" alt="lines"></img>
            <p className="px-lg-5 mt-4">{about.description}</p>
            {about.actions.map(({ name, link, style }, index) => (
              <a
                key={`key_` + index}
                href={link}
                className={style}
                target="_blank"
                download
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
