import React, { useEffect, useState } from 'react'
import Header from '../layouts/header';
import Slider from '../layouts/slider';
import About from '../layouts/about';
import Expertise from '../layouts/Services';
import Skills from  '../layouts/skills';
import Experience from '../layouts/experience';
import Projects from '../layouts/projects';
import Recommendations from '../layouts/Testmony';
import Contact from "../layouts/contact";
import SIcon from "../shared/SIcon";
import { $ } from '../../assets/js/plugins';

export default function Home() {

  const [activeMenu, setActiveMenu] = useState('Home');

  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 200) {
        $("#sticky-header").removeClass("sticky");
        $("#sticky-header-top").removeClass("sticky");
        $("#back-top").fadeIn(500);
      } else {
        $("#sticky-header").addClass("sticky");
        $("#sticky-header-top").addClass("sticky");
        $("#back-top").fadeIn(500);
      }
    });

    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }

    window.$(window).scroll(() => {
      const home = window.$(window).scrollTop() + 1;
      const about = window.$("#about-section").offset().top - 200;
      const expertise = window.$("#expertise-section").offset().top - 200;
      const skills = window.$("#skills-section").offset().top - 200;
      const experience = window.$("#experience-section").offset().top - 200;
      const projects = window.$("#projects-section").offset().top - 200;
      const recommendations =
        window.$("#recommendations-section").offset().top - 200;

      if (home < about) {
        setActiveMenu("Home");
      } else if (home >= about && home < expertise) {
        setActiveMenu("About");
      } else if (home >= expertise && home < skills) {
        setActiveMenu("Expertise");
      } else if (home >= skills && home < experience) {
        setActiveMenu("Skills");
      } else if (home >= experience && home < projects) {
        setActiveMenu("Experience");
      } else if (home >= projects && home < recommendations) {
        setActiveMenu("Projects");
      } else if (home >= recommendations) {
        setActiveMenu("Recommendations");
      }
    });

    $(".contact_me_action").animatedModal();

  }, []);
   
  const goTo = (e, d) => {
    e.preventDefault();
    window.$("html,body").animate(
      {
        scrollTop: window.$(d).offset().top - 150,
      },
      3000,
      "easeInOutExpo"
    );
  };

  return (
    <div>
      <button
        href="#animatedModal"
        className="message_button contact_me_action"
      >
        <SIcon
          elmId="contact-us-btn"
          styleClass="icon4"
          icon={"icon-envelope-open"}
        />
      </button>
      <Header goto={goTo} activeMenu={activeMenu} />
      <Slider goto={goTo} activeMenu={activeMenu} />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Projects />
      <Recommendations />
      <Contact />
    </div>
  );
}