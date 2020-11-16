import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Button, FormControl, InputLabel } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import Input from "@material-ui/core/Input";
import NumTarMask from "../../../components/Inputs/NumCardInput";
import VenceMask from "../../../components/Inputs/VencimientoInput";
import * as validate from "../../../utils/validate";
import axios from "axios";
import "./FormReservar.css";

const FormReservar = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [form, setForm] = useState({
    nombre: {
      value: "",
      isValid: false,
    },
    mesa: {
      value: "",
      options: [
        [
          {
            letra: "A",
            precio: 7,
          },
          "Mesa A",
        ],
        [
          {
            letra: "B",
            precio: 7,
          },
          "Mesa B",
        ],
        [
          {
            letra: "C",
            precio: 7,
          },
          "Mesa C",
        ],
        [
          {
            letra: "D",
            precio: 10,
          },
          "Mesa D",
        ],
        [
          {
            letra: "E",
            precio: 10,
          },
          "Mesa E",
        ],
      ],
      isValid: false,
    },
    fecha: {
      value:
        new Date().getDay().toString() +
        "-" +
        new Date().getMonth().toString() +
        "-" +
        new Date().getFullYear().toString(),
    },
    hora: {
      value: "",
      options: [
        ["08:00:00", "8:00 AM"],
        ["10:00:00", "12:00 PM"],
        ["14:00:00", "02:00 PM"],
        ["16:00:00", "04:00 PM"],
        ["18:00:00", "06:00 PM"],
        ["20:00:00", "08:00 PM"],
      ],
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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.nombre.isValid &&
      form.detallePago.nombreTarjeta.isValid &&
      form.detallePago.numeroTarjeta.isValid &&
      form.detallePago.fechaVencimiento.isValid &&
      form.detallePago.secureCode.isValid &&
      form.detallePago.zipCode.isValid
    ) {
      axios
        .post("https://lic-restaurante.firebaseio.com/reservaciones.json", form)
        .then((res) => {
          Swal.fire(
            "Reservación realizada con éxito!",
            "Te estaremos esperando, solo tienes que dar tu nombre!",
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

  let redireccion = null;
  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Reservar");
    redireccion = <Redirect to='/' />;
  }
  useEffect(() => {
    setForm(JSON.parse(localStorage.getItem("reservacion", form)));
  }, []);

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
      <form
        className='form-reservacion'
        onSubmit={handleSubmit}
        autoComplete='off'>
        <h1>Datos de Reservación</h1>
        <div className='campo'>
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor='filled-basic'>Nombre Completo</InputLabel>
            <Input
              error={!isValid && !form.nombre.isValid}
              helperText={
                !isValid && !form.nombre.isValid ? "El nombre es requerido" : ""
              }
              name='textmask'
              id='filled-basic'
              onChange={(e) => handleName(e)}
              value={form.nombre.value}
            />
          </FormControl>
        </div>
        <div className='box-pay'>
          <div className='campo'>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor='filled-basic'>Nombre en tarjeta</InputLabel>
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
              <InputLabel htmlFor='filled-basic'>Número de Tarjeta</InputLabel>
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
            <Link to='/' className='cancelar' onClick={props.reset}>
              Cancelar Reservacion
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormReservar;
