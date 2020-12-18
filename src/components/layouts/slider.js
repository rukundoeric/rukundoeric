import React from "react";
import Code from "./code";
import SIcon from "../shared/SIcon";

export default function Slider() {
  return (
    <div className="slider_area">
      <div className="slider_active owl-carousel">
        <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="slider_text ">
                  <span className="sd_text">Hi! There</span>
                  <h3>I'M Rukundo Eric</h3>
                  <p>
                    Full-Stack <span>Software Developer</span> With 2+ Years
                    <br />
                    Of Professional Experience.
                  </p>
                  <div className="video_service_btn">
                    <a href="#" className="boxed-btn3">
                      Hire Me
                    </a>
                    <a href="#" className="boxed-btn3-white">
                      {" "}
                      <i className="fa fa-github"></i>
                      View My Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 code-area d-flex justify-content-center align-items-center">
                <div className="content-d d-flex mt-auto justify-content-center align-items-center">
                  <div className="icon">
                    <SIcon icon="fa fa-chevron-right" styleClass="icon6" />
                  </div>
                  <div className="code align-items-center">
                    <Code />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
