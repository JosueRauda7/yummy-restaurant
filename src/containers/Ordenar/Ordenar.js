import React from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

const Ordenar = (props) => {
  let redireccion = null;
  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Ordenar");
    redireccion = <Redirect to='/' />;
  }
  return (
    <div className='container'>
      {redireccion}
      <h1>Ordenar</h1>
    </div>
  );
};

export default Ordenar;
