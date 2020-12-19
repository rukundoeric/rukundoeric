import React from "react";
import {
  social_links as s_link,
  contact_info,
  sections_links,
} from "../../data/index.json";

export default function header() {
  return (
    <header>
      <div className="header-area ">
        <div className="header-top_area d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 ">
                <div className="social_media_links">
                  {s_link.map(({ name, link, icon }) => (
                    <a key={name} href={link}>
                      <i className={icon}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="short_contact_list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope"></i> {contact_info.email}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i> {contact_info.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="main-header-area mt-4">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-block">
                <div className="logo">
                  <a href="index.html">
                    <span>
                      <i>R</i>ukundoeric
                    </span>
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      {sections_links.map(({ name, link }) => (
                        <li key={name}>
                          <a href={link}>{name}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <a className="popup-with-form" href="#test-form">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
