import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import home from './pages/home';
import "../assets/css/bootstrap.min.css";
// import "../assets/css/owl.carousel.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/nice-select.css";
import "../assets/css/flaticon.css";
import "../assets/css/gijgo.css";
import "../assets/css/animate.css";
import "../assets/css/aos.css";
import "../assets/css/slick.css";
import "../assets/css/slicknav.css";
import '../assets/css/style.css';
import "../assets/js/plugins";
import aos from "aos";


function App() {

  useEffect(() => {
    aos.init({
      duration: 1200,
      once: true,
      disable: "mobile",
    });
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
