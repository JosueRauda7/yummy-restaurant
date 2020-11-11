import React from "react";
import { ShoppingCart } from "@material-ui/icons";
import "./Carrito.css";
import { Link } from "react-router-dom";

const Carrito = (props) => {
  return (
    <Link to='/ordenar' className='Carrito'>
      <ShoppingCart
        style={{
          fontSize: "35px",
        }}
      />
    </Link>
  );
};

export default Carrito;
