import React, { useState } from "react";
import axios from "axios";
import "./FormOrdenar.css";
import { Button, FormControl, InputLabel } from "@material-ui/core";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import TableOrdenes from "../../../components/TableOrdenes/TableOrdenes";
import Input from "@material-ui/core/Input";
import NumTarMask from "../../../components/Inputs/NumCardInput";
import VenceMask from "../../../components/Inputs/VencimientoInput";
import TelMask from "../../../components/Inputs/TelInput";
import * as validate from "../../../utils/validate";

const FormOrdenes = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [total, setTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(true);
  let listaOrdenes = props.plantilla;

  const [form, setForm] = useState({
    nombre: {
      value: "",
      isValid: false,
    },
    telefono: {
      value: "",
      isValid: false,
    },
    direccion: {
      value: "",
      isValid: false,
    },
    detallePago: {
      nombreTarjeta: {
        value: "",
        isValid: false,
      },
      numeroTarjeta: {
        value: "",
        isValid: false,
      },
      fechaVencimiento: {
        value: "",
        isValid: false,
      },
      secureCode: {
        value: "",
        isValid: false,
      },
      zipCode: {
        value: "",
        isValid: false,
      },
    },
    pedido: props.carrito,
  });

  let redireccion = null;
  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Ordenar");
    redireccion = <Redirect to='/' />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.nombre.isValid &&
      form.direccion.isValid &&
      form.telefono.isValid &&
      form.detallePago.nombreTarjeta.isValid &&
      form.detallePago.numeroTarjeta.isValid &&
      form.detallePago.fechaVencimiento.isValid &&
      form.detallePago.secureCode.isValid &&
      form.detallePago.zipCode.isValid
    ) {
      axios
        .post("https://lic-restaurante.firebaseio.com/ordenes.json", form)
        .then((res) => {
          Swal.fire(
            "Orden realizada con éxito!",
            "Tú orden llegará en 30 minutos máximo!",
            "success"
          );
          props.reset();
          props.history.replace("/");
        })
        .catch((err) => console.log(err));
    } else {
      setIsValid(false);
    }
  };

  const handleName = (e) => {
    setForm({
      ...form,
      nombre: {
        ...form.nombre,
        value: e.target.value,
        isValid: validate.esStringRequerido(e.target.value),
      },
    });
  };
  const handleDirection = (e) => {
    setForm({
      ...form,
      direccion: {
        ...form.direccion,
        value: e.target.value,
        isValid: validate.esStringRequerido(e.target.value),
      },
    });
  };
  const handleTelefono = (e) => {
    setForm({
      ...form,
      telefono: {
        ...form.telefono,
        value: e.target.value,
        isValid: validate.esTelefono(e.target.value),
      },
    });
  };
  const handleNameCard = (e) => {
    setForm({
      ...form,
      detallePago: {
        ...form.detallePago,
        nombreTarjeta: {
          ...form.detallePago.nombreTarjeta,
          value: e.target.value,
          isValid: validate.esStringRequerido(e.target.value),
        },
      },
    });
  };
  const handleNumCard = (e) => {
    if (
      e.target.value.trim().length <= 19 &&
      e.target.value.trim().length >= 0
    ) {
      setForm({
        ...form,
        detallePago: {
          ...form.detallePago,
          numeroTarjeta: {
            ...form.detallePago.numeroTarjeta,
            value: e.target.value,
            isValid: validate.esNumeroTarjeta(e.target.value),
          },
        },
      });
    }
  };
  const handleVence = (e) => {
    if (e.target.value.length <= 5 && e.target.value.length >= 0) {
      setForm({
        ...form,
        detallePago: {
          ...form.detallePago,
          fechaVencimiento: {
            ...form.detallePago.fechaVencimiento,
            value: e.target.value,
            isValid: validate.esFechaVencimiento(e.target.value),
          },
        },
      });
    }
  };
  const handleSecureCode = (e) => {
    if (e.target.value.length <= 3 && e.target.value.length >= 0) {
      setForm({
        ...form,
        detallePago: {
          ...form.detallePago,
          secureCode: {
            ...form.detallePago.secureCode,
            value: e.target.value,
            isValid: validate.esSecureCode(e.target.value),
          },
        },
      });
    }
  };
  const handleZip = (e) => {
    if (e.target.value.length <= 4 && e.target.value.length >= 0) {
      setForm({
        ...form,
        detallePago: {
          ...form.detallePago,
          zipCode: {
            ...form.detallePago.zipCode,
            value: e.target.value,
            isValid: validate.esNumero(e.target.value),
          },
        },
      });
    }
  };

  return (
    <div className='container'>
      {redireccion}
      <div className='orden'>
        <form
          className='form-ordenes'
          onSubmit={handleSubmit}
          autoComplete='off'>
          <h1>Datos de Orden</h1>
          <div className='campo'>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor='filled-basic'>Nombre Completo</InputLabel>
              <Input
                error={!isValid && !form.nombre.isValid}
                helperText={
                  !isValid && !form.nombre.isValid
                    ? "El nombre es requerido"
                    : ""
                }
                name='textmask'
                id='filled-basic'
                onChange={(e) => handleName(e)}
                value={form.nombre.value}
              />
            </FormControl>
          </div>
          <div className='campo'>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor='filled-basic'>Dirección</InputLabel>
              <Input
                name='textmask'
                id='filled-basic'
                error={!isValid && !form.direccion.isValid}
                helperText={
                  !isValid && !form.direccion.isValid
                    ? "La dirección es requerida"
                    : ""
                }
                onChange={(e) => handleDirection(e)}
                value={form.direccion.value}
              />
            </FormControl>
          </div>
          <div className='campo'>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor='filled-basic'>Teléfono</InputLabel>
              <Input
                name='textmask'
                id='filled-basic'
                error={!isValid && !form.telefono.isValid}
                helperText={
                  !isValid && !form.telefono.isValid ? "Teléfono inválido" : ""
                }
                inputComponent={TelMask}
                onChange={(e) => handleTelefono(e)}
                value={form.telefono.value}
              />
            </FormControl>
          </div>
          <div className='box-pay'>
            <div className='campo'>
              <FormControl style={{ width: "100%" }}>
                <InputLabel htmlFor='filled-basic'>
                  Nombre en tarjeta
                </InputLabel>
                <Input
                  name='textmask'
                  id='filled-basic'
                  error={!isValid && !form.detallePago.nombreTarjeta.isValid}
                  helperText={
                    !isValid && !form.detallePago.nombreTarjeta.isValid
                      ? "Nombre de tarjeta requerido"
                      : ""
                  }
                  onChange={(e) => handleNameCard(e)}
                  value={form.detallePago.nombreTarjeta.value}
                />
              </FormControl>
            </div>
            <div className='campo'>
              <FormControl style={{ width: "100%" }}>
                <InputLabel htmlFor='filled-basic'>
                  Número de Tarjeta
                </InputLabel>
                <Input
                  name='textmask'
                  id='filled-basic'
                  error={!isValid && !form.detallePago.numeroTarjeta.isValid}
                  helperText={
                    !isValid && !form.detallePago.numeroTarjeta.isValid
                      ? "Número de tarjeta inválido"
                      : ""
                  }
                  inputComponent={NumTarMask}
                  onChange={(e) => handleNumCard(e)}
                  value={form.detallePago.numeroTarjeta.value}
                />
              </FormControl>
            </div>
            <div className='campo'>
              <div className='doble-input'>
                <div className='compartimentado'>
                  <FormControl style={{ width: "100%", marginRight: "30px" }}>
                    <InputLabel htmlFor='filled-basic'>MM/YY</InputLabel>
                    <Input
                      name='textmask'
                      id='filled-basic'
                      error={
                        !isValid && !form.detallePago.fechaVencimiento.isValid
                      }
                      helperText={
                        !isValid && !form.detallePago.fechaVencimiento.isValid
                          ? "Fecha de vencimiento inválido"
                          : ""
                      }
                      inputComponent={VenceMask}
                      onChange={(e) => handleVence(e)}
                      value={form.detallePago.fechaVencimiento.value}
                    />
                  </FormControl>
                </div>
                <div className='compartimentado'>
                  <FormControl style={{ width: "100%" }}>
                    <InputLabel htmlFor='filled-basic'>
                      Código de seguridad
                    </InputLabel>
                    <Input
                      name='textmask'
                      id='filled-basic'
                      error={!isValid && !form.detallePago.secureCode.isValid}
                      helperText={
                        !isValid && !form.detallePago.secureCode.isValid
                          ? "Código de seguridad inválido"
                          : ""
                      }
                      onChange={(e) => handleSecureCode(e)}
                      value={form.detallePago.secureCode.value}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className='campo'>
              <div className='zip-code'>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel htmlFor='filled-basic'>
                    Zip/Código Postal
                  </InputLabel>
                  <Input
                    name='textmask'
                    id='filled-basic'
                    error={!isValid && !form.detallePago.zipCode.isValid}
                    helperText={
                      !isValid && !form.detallePago.zipCode.isValid
                        ? "Zip/Código Postal inválido"
                        : ""
                    }
                    onChange={(e) => handleZip(e)}
                    value={form.detallePago.zipCode.value}
                  />
                </FormControl>
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
