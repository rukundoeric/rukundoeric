import React from 'react';
import SIcon from '../shared/SIcon';

export default function Service({
  icon, iconStyle, title, description, animation,
}) {
  return (
    <div
      data-aos={animation.name}
      data-aos-anchor-placement="bottom-bottom"
      data-aos-easing={animation.easing}
      data-aos-duration={animation.duration}
      data-aos-delay={animation.delay}
      className="col-md-6 col-lg-4 d-flex align-self-stretch ftco-animate"
    >
      <div className="media block-6 services d-block text-center">
        <SIcon styleClass={iconStyle} icon={icon} />
        <div className="media-body py-md-4">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
