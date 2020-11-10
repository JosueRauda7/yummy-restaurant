import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ToolbarMobile from "../Toolbar/ToolbarMobile";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <div className='mobile-menu'>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <IconButton
              edge='start'
              // className={classes.menuButton}
              color='inherit'
              onClick={() => setIsOpen(!isOpen)}
              aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit'>
              Yummy Restaurant
            </Typography>
          </Toolbar>
        </AppBar>
        <ToolbarMobile
          isLog={props.isLog}
          close={setIsOpen}
          isOpened={isOpen}
        />
      </div>
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

        <div className='list-container'>
          <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/menu'>Menú</Link>
            <Link to='/ordenar'>Ordenar</Link>
            <Link to='/reservacion'>Reservar</Link>
            {props.isLog ? (
              <Link to='/logout'>Cerrar Sesión</Link>
            ) : (
              <Link to='/login'>Iniciar Sesión</Link>
            )}
            <div className='animation start-home'></div>
          </nav>
        </div>
      </nav>
    </Fragment>
  );
};

export default Menu;
