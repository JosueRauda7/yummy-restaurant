import React from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

const Reservacion = (props) => {
  let redireccion = null;
  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Reservar");
    redireccion = <Redirect to='/' />;
  }
  return (
    <div className='container'>
      {redireccion}
      <h1>Reservación</h1>
    </div>
  );
};

export default Reservacion;
