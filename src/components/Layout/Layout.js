import React from "react";
import Carrito from "../Carrito/Carrito";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div>
      <Header isLog={props.isLog} />
      {props.isLog ? <Carrito /> : null}
      {props.children}
      <Footer showContact={props.location.pathname !== "/login"} />
    </div>
  );
};

export default Layout;
