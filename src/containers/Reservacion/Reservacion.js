import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import MomentUtils from "@date-io/moment";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import RestaurantSVG from "../../assets/RestaurantSVG";
import "./Reservacion.css";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const Reservacion = (props) => {
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
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  let redireccion = null;

  if (!props.isLog) {
    Swal.fire("Tienes que iniciar sesión para Reservar");
    redireccion = <Redirect to='/' />;
  }

  const handleSubmit = () => {
    localStorage.setItem("reservacion", JSON.stringify(form));
    props.history.replace("/form-reservar");
  };

  const handleMesa = (e) => {
    setForm({
      ...form,
      mesa: {
        ...form.mesa,
        value: e.target.value,
      },
    });
  };
  const handleFecha = (e) => {
    setForm({
      ...form,
      fecha: selectedDate,
    });
  };
  const handleHora = (e) => {
    setForm({
      ...form,
      hora: {
        ...form.hora,
        value: e.target.value,
      },
    });
  };

  return (
    <div className='container'>
      {redireccion}
      <h1>Reservación</h1>
      <div className='RestaurantePicture'>
        <RestaurantSVG />
        <div className='legend'>
          <div className='blue'></div>
          <h2>$10</h2>
        </div>
        <div className='legend'>
          <div className='red'></div>
          <h2>$7</h2>
        </div>
      </div>
      <div className='formReserv1'>
        <h1>Datos de reservación</h1>
        <div className='form-control'>
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor='filled-basic'>Mesa</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              onChange={(e) => handleMesa(e)}
              value={form.mesa.value}>
              {form.mesa.options.map((mesa) => (
                <MenuItem value={mesa[0]}>{mesa[1]}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className='form-control'>
          <MuiPickersUtilsProvider
            style={{ width: "100%" }}
            utils={MomentUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant='inline'
              format='MM/dd/yyyy'
              margin='normal'
              id='date-picker-inline'
              label='Fecha de Reservación'
              value={selectedDate}
              onChange={handleFecha}
              minDate={new Date()}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className='form-control'>
          <FormControl style={{ width: "100%" }}>
            <InputLabel htmlFor='filled-basic'>Hora de Reservación</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              onChange={(e) => handleHora(e)}
              value={form.hora.value}>
              {form.hora.options.map((hora) => (
                <MenuItem value={hora[0]}>{hora[1]}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <h2 style={{ textAlign: "right", margin: "10px 0" }}>
          Total: ${(form.mesa.value.precio || 0).toFixed(2)}
        </h2>
        <Button
          style={{
            backgroundColor: "#ff1053",
            color: "white",
            width: "100%",
            padding: "10px 0",
            margin: "14px 0",
          }}
          onClick={handleSubmit}
          disabled={!(form.fecha && form.hora.value && form.mesa.value)}
          type='submit'>
          Ir a Reservar
        </Button>
        <Link to='/' className='cancelar' onClick={props.reset}>
          Cancelar Reservacion
        </Link>
      </div>
    </div>
  );
};

export default Reservacion;
