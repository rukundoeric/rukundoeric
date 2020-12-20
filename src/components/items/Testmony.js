import React from 'react';
import SIcon from '../shared/SIcon';

export default function Testmony({
  icon, iconStyle, message, author: { avata, name, position },
}) {
  return (
    <div className="item">
      <div className="testimony-wrap py-4">
        <SIcon
          styleClass={iconStyle}
          icon={icon}
        />
        <div className="text">
          <p className="mb-4">
            {message}
          </p>
          <div className="d-flex align-items-center">
            <img className="user-img" src={avata} alt="profile" />
            <div className="pl-3">
              <p className="name">{name}</p>
              <span className="position">{position}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
