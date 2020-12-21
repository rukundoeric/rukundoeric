import React, { useEffect } from "react";
import line from "../../assets/imgs/lines.svg";
import { $ } from "../../assets/js/plugins";
import { projects } from "../../data/index.json";

export default function Projects() {
  
  useEffect(() => {
     $("#projects").waitForImages(function () {
       var $container = $(".portfolio_container");
       $container.isotope({
         filter: "*",
       });

       $(".portfolio_filter a").click(function () {
         $(".portfolio_filter .active").removeClass("active");
         $(this).addClass("active");

         var selector = $(this).attr("data-filter");
         $container.isotope({
           filter: selector,
           animationOptions: {
             duration: 500,
             animationEngine: "jquery",
           },
         });
         return false;
       });
     });
  }, [])

  return (
    <section className="projects_container py-5" id="projects-section">
      <div className="section" id="projects">
        <div className="container">
          <div className="text-center">
            <h2 className="section_header">{projects.title}</h2>
            <img src={line} className="img-lines" alt="lines"></img>
          </div>
          <div className="main-container portfolio-inner clearfix">
            <div className="portfolio-div">
              <div className="portfolio">
                <div className="categories-grid wow fadeInLeft">
                  <nav className="categories">
                    <ul className="portfolio_filter">
                      {projects.categories.map(
                        ({ name, data_filter, link, className }, index) => (
                          <li key={`key_${index}`}>
                            <a
                              href={link}
                              className={className}
                              data-filter={data_filter}
                            >
                              {name}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </nav>
                </div>

                <div
                  className="no-padding portfolio_container clearfix"
                  data-aos="fade-up"
                >
                  {projects.projects.map(
                    (
                      {
                        name,
                        type,
                        description,
                        image_url,
                        source_code_url,
                        live_demo_url,
                      },
                      index
                    ) => (
                      <div
                        key={`key_${index}`}
                        className={`col-md-6 col-sm-12 ${type}`}
                      >
                        <div className="portfolio_item">
                          <img
                            src={image_url}
                            alt="project_image"
                            className="img-responsive"
                          />
                          <div className="portfolio_item_hover">
                            <div className="portfolio-border clearfix">
                              <div className="item_info">
                                <div className="project_info">
                                  <span>{name}</span> <em>{description}</em>
                                </div>
                                <div className="project_btns mt-5">
                                  <a
                                    href={source_code_url}
                                    className="boxed-btn3-white-2 mx-1"
                                  >
                                    <i className="fa fa-github"></i>
                                    Source Code
                                  </a>
                                  <a
                                    href={live_demo_url}
                                    className="boxed-btn3-white-2 mx-1"
                                  >
                                    <i className="fa fa-eye"></i>
                                    Live Demo
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
