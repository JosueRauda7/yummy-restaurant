import React, { Fragment } from "react";
import "./Developer.css";

const Developers = (props) => {
  return (
    <Fragment>
      <h1
        style={{
          textAlign: "center",
        }}>
        Desarrolladores
      </h1>
      <div className='profile-container'>
        <div className='profile-card'>
          <div className='profile-name'>Naomi Nicole Guardado Iglesias</div>
          <div
            style={{
              textAlign: "center",
            }}
            className='profile-position'>
            Frontend developer
          </div>
        </div>
        <div className='profile-card'>
          <div className='profile-name back'>Josué Milton Rauda Ramírez</div>
          <div
            style={{
              textAlign: "center",
            }}
            className='profile-position'>
            Backend developer
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Developers;
