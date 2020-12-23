/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { header } from "../../data/index.json";

export default function Header(props) {
  const { activeMenu } = props;
  return (
    <header>
      <div className="header-area ">
        <div
          id="sticky-header-top"
          className="header-top_area d-none d-lg-block"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 ">
                <div className="social_media_links">
                  {header.top.social_links.map(({ name, link, icon }) => (
                    <a target="_blank" key={name} href={link}>
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
                        <i className="fa fa-envelope"></i> {header.top.email}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone"></i> {header.top.phone}
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
                  <a href="#home">
                    <span className="d-flex align-items-center">
                      <i>{header.main.name.substring(0, 1).toUpperCase()}</i>
                      {header.main.name.substring(1, header.main.name.length)}
                    </span>
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      {header.main.sections_links.map(({ name, section }) => (
                        <li
                          key={name}
                          className={activeMenu === name ? "activepage" : ""}
                        >
                          <a
                            onClick={(e) => {
                              props.goto(e, section);
                            }}
                          >
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="Appointment">
                  <div className="d-none d-lg-block">
                    {header.main.actions.map(({ name, link, style }, index) => (
                      <button
                        key={`key_` + index}
                        href={link}
                        className={style}
                      >
                        {name}
                      </button>
                    ))}
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
