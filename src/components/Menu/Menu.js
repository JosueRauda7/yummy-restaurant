import React, { Fragment } from "react";

const Menu = (props) => {
  return (
    <nav className='menu'>
      <div className='logo-box'>
        <a href='/#'>
          <img
            className='imglogo'
            src='https://images.vexels.com/media/users/3/131080/isolated/preview/0f0866eb37895d74501edc38d1ff4f4d-logo-de-comida-caliente-by-vexels.png'
          />
        </a>
        <span className='btn-menu'>
          <i className='fas fa-bars'></i>
        </span>
      </div>

      {true ? (
        <div className='list-container'>
          <nav>
            <a href='/#'>Inicio</a>
            <a href='/#'>Acerca de</a>
            <a href='/#'>Restautante</a>
            <a href='/#'>Desarrolladores</a>
            <a href='/#'>Contáctanos</a>
            <div className='animation start-home'></div>
          </nav>
        </div>
      ) : (
        <div className='list-container'>
          <nav>
            <a href='/#'>Inicio</a>
            <a href='/#'>Acerca de</a>
            <a href='/#' className='reservar'>
              Reservar
            </a>
            <a href='/#'>Restautante</a>
            <a href='/#'>Desarrolladores</a>
            <a href='/#'>Contáctanos</a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Menu;
