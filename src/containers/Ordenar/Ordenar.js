import React, { useEffect, useState, useMemo } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import TableOrdenes from "../../components/TableOrdenes/TableOrdenes";
import "./Ordenas.css";

const Ordenar = (props) => {
  const [total, setTotal] = useState(0);
  let redireccion = null;
  let listaOrdenes = props.plantilla;
  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Ordenar");
    redireccion = <Redirect to='/' />;
  }

  useEffect(() => {
    props.actualizarOrdenes(
      localStorage.getItem("listaCompras")
        ? JSON.parse(localStorage.getItem("listaCompras"))
        : []
    );
  }, []);

  useMemo(() => {
    if (localStorage.getItem("listaCompras")) {
      props.ordenes.map((o) => {
        for (let index = 0; index < 6; index++) {
          if (o.id === listaOrdenes[index].id) {
            listaOrdenes[index] = {
              ...listaOrdenes[index],
              cantidad: listaOrdenes[index].cantidad + 1,
            };
          }
        }
      });
    }
  }, [props.ordenes]);

  const anidar = (id) => {
    props.anidarOrden(id);
  };

  const remover = (id) => {
    props.removeCarrito(id);
  };

  return (
    <div className='container'>
      {redireccion}
      <h1>Ordenar</h1>
      {localStorage.getItem("listaCompras") === null ? (
        <p
          style={{
            marginTop: "30px",
          }}>
          No hay productos añadidos al carrito
        </p>
      ) : (
        <div>
          <TableOrdenes
            changeTotal={setTotal}
            anidarOrden={anidar}
            removerOrden={remover}
            ordenes={listaOrdenes}
          />
          <h2 className='total-price'>Total: ${(total / 2).toFixed(2)}</h2>
          <div className='buttons'>
            <Link to='/form-ordenar' className='btn-layer primary'>
              Pagar
            </Link>
            <Link to='/' className='btn-layer continue'>
              Continuar Comprando
            </Link>
          </div>
          <Link to='/' className='cancelar' onClick={props.reset}>
            Cancelar Compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default Ordenar;
