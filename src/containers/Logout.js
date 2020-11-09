import React from "react";
import { Redirect } from "react-router-dom";

const Logout = (props) => {
  localStorage.removeItem("token");
  props.changeLogged(false);
  return <Redirect to='/' />;
};

export default Logout;
