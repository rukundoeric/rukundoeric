/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { services } from '../../data/index.json';
import Service from '../items/Service';
import line from "../../assets/imgs/lines.svg";

export default class Services extends Component {
  render() {
    return (
      <section className="service-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 heading-section text-center ftco-animate mb-5">
              <h2 className="section_header">{services.sectionName}</h2>
              <img src={line} class="img-lines" alt="lines"></img>
              <p className="mt-3">{services.subtitle}</p>
            </div>
          </div>
          <div className="row d-flex mt-3">
            {services.items.map((item, i) => (
              <Service
                key={`key_${i}`}
                icon={item.icon}
                iconStyle={item.iconStyle}
                title={item.title}
                description={item.description}
                animation={item.animation}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
