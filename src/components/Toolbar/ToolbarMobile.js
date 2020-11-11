import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";

const BackShadow = (props) => {
  const handleTouch = () => {
    props.close();
  };
  return <div onClick={handleTouch} className='BackShadow'></div>;
};

const ToolbarMobile = (props) => {
  let classes = ["toolbar-mobile"];

  if (props.isOpened) {
    classes = ["toolbar-mobile", "Opened"];
  } else {
    classes = ["toolbar-mobile", "Closed"];
  }

  return (
    <Fragment>
      {props.isOpened ? <BackShadow close={props.close} /> : null}
      <ul className={classes.join(" ")}>
        <Link onClick={() => props.close()} to='/'>
          Inicio
        </Link>
        <Link onClick={() => props.close()} to='/menu'>
          Menú
        </Link>
        <Link onClick={() => props.close()} to='/reservacion'>
          Reservar
        </Link>
        <Link onClick={() => props.close()} to='/ordenar'>
          Ordenar
        </Link>
        {props.isLog ? (
          <Link onClick={() => props.close()} to='/logout'>
            Cerrar Sesión
          </Link>
        ) : (
          <Link onClick={() => props.close()} to='/login'>
            Iniciar Sesión
          </Link>
        )}
      </ul>
    </Fragment>
  );
};

export default ToolbarMobile;
