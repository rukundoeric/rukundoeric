import React from "react";
import Code from "./code";
import SIcon from "../shared/SIcon";
import { banner } from "../../data/index.json";

export default function Slider() {
  return (
    <div id="home-section" className="slider_area">
      <div className="slider_active">
        <div className="single_slider  d-flex align-items-center slider_bg_2 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="slider_text ">
                  <span className="sd_text">{banner.greating}</span>
                  <h3>{banner.introduction}</h3>
                  <p dangerouslySetInnerHTML={{ __html: banner.description }} />
                  <div className="video_service_btn">
                    {banner.actions.map(({ name, link, style }) => (
                      <a href={link} className={style}>
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 code-area d-none d-lg-flex justify-content-center align-items-center">
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
