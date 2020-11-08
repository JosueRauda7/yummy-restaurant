import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer showContact={props.location.pathname !== "/login"} />
    </div>
  );
};

export default Layout;
