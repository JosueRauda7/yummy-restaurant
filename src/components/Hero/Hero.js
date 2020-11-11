import React from "react";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <div className='img-header'>
      <div className='welcome'>
        <h1>YUMMY</h1>
        <hr />
        <p>Somos tu restaurante</p>
        <div
          className='hero-btns'
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          {/* <button id='abajo'>Ver abajo</button> */}
          {props.isLog ? (
            <Link to='/menu' id='login-btn'>
              Ordenar
            </Link>
          ) : (
            <Link to='/login' id='login-btn'>
              Ingresar
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
