import { AddCircle, RemoveCircle } from "@material-ui/icons";
import React from "react";
import "./TableOrdenes.css";

const TableOrdenes = (props) => {
  let totalPrice = 0;

  const updateTotal = (cant, price) => {
    totalPrice += cant * price;
    props.changeTotal(totalPrice);
  };

  props.ordenes.map((orden) => {
    updateTotal(orden.cantidad, orden.precio);
  });

  return (
    <table className='TableOrdenes'>
      <thead>
        <tr>
          <th>Título</th>
          <th>Precio</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {props.ordenes.map((orden) => {
          if (orden.cantidad > 0) {
            return (
              <tr key={orden.id}>
                <td>{orden.titulo}</td>
                <td>${orden.precio.toFixed(2)}</td>
                <td className='cantidad'>
                  <span>x{orden.cantidad / 2}</span>
                  <div>
                    <AddCircle
                      onClick={() => props.anidarOrden(orden.id)}
                      style={{
                        color: "#E94F37",
                        cursor: "pointer",
                        fontSize: 40,
                      }}
                    />
                    <RemoveCircle
                      onClick={() => props.removerOrden(orden.id)}
                      style={{
                        color: "#28AFB0",
                        cursor: "pointer",
                        fontSize: 40,
                      }}
                    />
                  </div>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default React.memo(TableOrdenes);
