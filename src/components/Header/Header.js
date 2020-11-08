import React from "react";
import Menu from "../Menu/Menu";

const Header = (props) => {
  return (
    <div id='Header'>
      {/* Ir arriba */}
      <div className='go-top'>
        <span className='fas fa-angle-up'></span>
      </div>
      {/* Menú */}
      <Menu />
    </div>
  );
};

export default Header;
