import React, { useEffect } from 'react'
import Header from '../layouts/header';
import Slider from '../layouts/slider';
import About from '../layouts/about';
import Experties from '../layouts/Services';
import Skills from  '../layouts/skills';
import { $ } from '../../assets/js/plugins';
// import { $ } from 'react-jquery-plugin';

export default function Home() {
  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 200) {
        $("#sticky-header").removeClass("sticky");
        $("#back-top").fadeIn(500);
      } else {
        $("#sticky-header").addClass("sticky");
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
      <Experties />
      <Skills />
    </div>
  )
}