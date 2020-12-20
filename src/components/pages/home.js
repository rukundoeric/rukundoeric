import React, { useEffect } from 'react'
import Header from '../layouts/header';
import Slider from '../layouts/slider';
import About from '../layouts/about';
import Expertise from '../layouts/Services';
import Skills from  '../layouts/skills';
import Experience from '../layouts/experience';
import Projects from '../layouts/projects';
import Recommendations from '../layouts/Testmony';
import { $ } from '../../assets/js/plugins';
// import { $ } from 'react-jquery-plugin';

export default function Home() {
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

  }, [])
  return (
    <div>
      <Header />
      <Slider />
      <About />
      <Expertise />
      <Skills />
      <Experience />
      <Projects />
      <Recommendations />
    </div>
  );
}