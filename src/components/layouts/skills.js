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
    <section class="site-section section-skills my-5 py-5">
      <div class="container">
        <div class="text-center">
          <h2 className="section_header">My Skills</h2>
          <img src={line} class="img-lines" alt="lines"></img>
        </div>
        <div class="row mt-5 d-flex justify-content-center">
          {skills.map((skill) => (
            <div class="col-md-3 mt-3">
              <div class="skill">
                <h4>{skill.name}</h4>
                <div class="progress">
                  <div
                    class="progress-bar"
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
