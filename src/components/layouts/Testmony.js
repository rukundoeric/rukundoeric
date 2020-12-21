/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
/* eslint-disable import/first */
/* eslint-disable no-multi-assign */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from "react";
import { recommendation } from "../../data/index.json";
import TestmonyItem from "../items/Testmony";
import line from "../../assets/imgs/lines.svg";

export default class Testmony extends Component {
  componentDidMount() {
    window.$(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      navText: [
        '<span class="icon-arrow-left">',
        '<span class="icon-arrow-right">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        300: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 2,
        },
      },
    });
  }

  render() {
    return (
      <section id="recommendations-section" className="testimony-section py-5">
        <div className="section" id="projects">
          <div className="container">
            <div className="text-center">
              <h2 className="section_header">{recommendation.title}</h2>
              <img src={line} className="img-lines" alt="lines"></img>
            </div>
            <div className="main-container portfolio-inner clearfix">
              <div className="portfolio-div">
                <div className="row">
                  <div className="col-md-12">
                    <div className="carousel-testimony owl-carousel">
                      {recommendation.recommendations.map((item, i) => (
                        <TestmonyItem
                          key={`key_${i}`}
                          icon={item.icon}
                          iconStyle={item.iconStyle}
                          message={item.message}
                          author={item.author}
                          flexCenter
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
