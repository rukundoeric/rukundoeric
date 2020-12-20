import React from "react";
import line from "../../assets/imgs/lines.svg";

export default function About() {
  return (
    <section id="about" className="section-about text-center">
      <div className="container about_container">
        <div className="row my-5">
          <div className="col-md-12 col-md-offset-3 px-5">
            <h2 className="section_header">About Me</h2>
            <img src={line} className="img-lines" alt="lines"></img>
            <p className="px-lg-5 mt-4">
              Hi, I'm Eric, I’m an organized, detail-oriented, self-motivated,
              dedicated professional, and experienced developer with a passion
              for developing innovative programs that expedite the efficiency
              and effectiveness of organization success. After discovering my
              passion for web development, I couldn’t get enough. I made
              websites for friends and family, worked with a local business, and
              hired myself out as a freelancer. I’m looking forward to bringing
              that passion to a full-time role. If you have a project that you
              want to get started or think you need my help with something, then
              get in touch.
            </p>
            <a
              href="http://www.grad.illinois.edu/sites/default/files/pdfs/cvsamples.pdf"
              className="boxed-btn3 mt-5"
              target="_blank"
              download
            >
              Download my cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
