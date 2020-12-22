import React, { useEffect } from "react";
import line from "../../assets/imgs/lines.svg";
import { $ } from "../../assets/js/plugins";
import { skills } from "../../data/index.json";

export default function Skills() {
  useEffect(() => {
    var $section = $(".section-skills");
    function loadDaBars() {
      $(".progress .progress-bar").progressbar({
        transition_delay: 500,
      });
    }

    $(document).bind("scroll", function (ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
        loadDaBars();
        // unbind event not to load scrolsl again
        $(document).unbind("scroll");
      }
    }); 
  }, []);

  return (
    <section
      id="skills-section"
      className="site-section section-skills my-5 py-5"
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section_header">{skills.title}</h2>
          <img src={line} className="img-lines" alt="lines"></img>
        </div>
        <div className="row mt-5 d-flex justify-content-center">
          {skills.skills.map((skill, index) => (
            <div key={`key_${index}`} className="col-md-3 mt-3">
              <div className="skill">
                <h4>{skill.name}</h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-transitiongoal={skill.level}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
