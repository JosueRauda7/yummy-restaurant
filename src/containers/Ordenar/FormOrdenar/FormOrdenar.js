import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import "./FormOrdenar.css";
import { Button } from "@material-ui/core";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import TableOrdenes from "../../../components/TableOrdenes/TableOrdenes";

const FormOrdenes = (props) => {
  const [total, setTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(true);
  let listaOrdenes = props.plantilla;

  const [form, setForm] = useState({
    nombre: "",
    direccion: "",
    detallePago: {
      nombreTarjeta: "",
      numeroTarjeta: 0,
      fechaVencimiento: "",
    },
  });

  let redireccion = null;
  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Ordenar");
    redireccion = <Redirect to='/' />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire(
      "Orden realizada con éxito!",
      "Tú orden llegará en 30 minutos máximo!",
      "success"
    );
    props.history.replace("/");
  };

  return (
    <div className='container'>
      {redireccion}
      <div className='orden'>
        <form className='form-ordenes' onSubmit={handleSubmit}>
          <h1>Datos de Orden</h1>
          <div className='campo'>
            <TextField
              id='filled-basic'
              style={{ width: "100%" }}
              label='Nombre Completo'
              variant='filled'
            />
          </div>
          <div className='campo'>
            <TextField
              id='filled-basic'
              style={{ width: "100%" }}
              label='Dirección'
              variant='filled'
            />
          </div>
          <div className='box-pay'>
            <div className='campo'>
              <TextField
                id='filled-basic'
                style={{ width: "100%" }}
                label='Nombre en tarjeta'
                variant='filled'
              />
            </div>
            <div className='campo'>
              <TextField
                id='filled-basic'
                style={{ width: "100%" }}
                label='Número de tarjeta'
                variant='filled'
              />
            </div>
            <div className='campo'>
              <div className='doble-input'>
                <div className='compartimentado'>
                  <TextField
                    id='filled-basic'
                    style={{ width: "100%", marginRight: "30px" }}
                    label='MM/YY'
                    variant='filled'
                  />
                </div>
                <div className='compartimentado'>
                  <TextField
                    id='filled-basic'
                    style={{ width: "100%" }}
                    label='Código de seguridad'
                    variant='filled'
                  />
                </div>
              </div>
            </div>
            <div className='campo'>
              <div className='zip-code'>
                <TextField
                  id='filled-basic'
                  label='Zip/Código Postal'
                  variant='filled'
                />
              </div>
            </div>
          </div>
          <div className='campo controles'>
            <div className='boton-1'>
              <Button
                style={{
                  backgroundColor: "#ff1053",
                  color: "white",
                  width: "100%",
                  padding: "10px 0",
                  margin: "14px 0",
                }}
                type='submit'>
                Completar Trámite
              </Button>
            </div>
            <div className='showSummary'>
              <Button
                style={{
                  color: "#3F88C5",
                  width: "100%",
                  padding: "10px 0",
                  margin: "14px 0",
                  textDecoration: "underline",
                }}
                onClick={() => setShowSummary(!showSummary)}>
                {!showSummary ? "Mostrar" : "Ocultar"} Resumen de Orden
              </Button>
            </div>
          </div>
        </form>
        {showSummary ? (
          <div className='resumen'>
            <h1>Resumen de Orden</h1>
            <TableOrdenes
              changeTotal={setTotal}
              canModify={false}
              ordenes={listaOrdenes}
            />
            <h2 style={{ fontWeight: "bold", textAlign: "right" }}>
              Total: ${(total / 2).toFixed(2)}
            </h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FormOrdenes;
