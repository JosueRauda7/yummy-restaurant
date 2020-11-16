import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./containers/LandingPage";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Menu from "./containers/Menu/Menu";
import FormOrdenes from "./containers/Ordenar/FormOrdenar/FormOrdenar";
import Ordenar from "./containers/Ordenar/Ordenar";
import FormReservar from "./containers/Reservacion/FormReservar/FormReservar";
import Reservacion from "./containers/Reservacion/Reservacion";

function App() {
  const initialCarrito = [
    {
      id: 1,
      titulo: "Roast beef y pudding Yorkshire",
      url: "https://renatagb19.files.wordpress.com/2013/03/platillos2.jpeg",
      precio: 7,
      cantidad: 0,
    },
    {
      id: 2,
      titulo: "Pad Tha",
      url:
        "http://paulabolanosrivas.weebly.com/uploads/3/1/0/5/31057765/8267117_orig.jpg",
      precio: 8,
      cantidad: 0,
    },
    {
      id: 3,
      titulo: "Biryani",
      url:
        "https://i.pinimg.com/736x/5a/69/61/5a696104065868ba21da715fbe919341--youtube-plato.jpg",
      precio: 6,
      cantidad: 0,
    },
    {
      id: 4,
      titulo: "Haggis, neeps y tatties",
      url:
        "https://www.hotelmousai.com.mx/blog/wp-content/uploads/2016/08/jicama-wrap.jpg",
      precio: 6,
      cantidad: 0,
    },
    {
      id: 5,
      titulo: "Dim sum",
      url: "https://cdn.kiwilimon.com/clasificacion/3344/3344.jpg",
      precio: 10,
      cantidad: 0,
    },
    {
      id: 6,
      titulo: "CRISPY WRAP",
      url: "http://nattivos.com/wp-content/uploads/2017/10/comida-gourmet.jpg",
      precio: 9,
      cantidad: 0,
    },
  ];
  const [isLogged, setIsLogged] = useState(false);
  const [carrito, setCarrito] = useState([]);
  let listaOrdenes = [];

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
      if (localStorage.getItem("listaCompras")) {
        listaOrdenes = [...JSON.parse(localStorage.getItem("listaCompras"))];
        listaOrdenes.map((orden) => {
          let listaCompras = carrito;
          listaCompras.push(orden);
          setCarrito([...listaCompras]);
        });
      }
    }
  }, []);

  const resetearReservacion = () => {
    localStorage.removeItem("reservacion");
  };

  const resetearCarrito = () => {
    localStorage.removeItem("listaCompras");
    setCarrito([]);
  };

  const agregarCarrito = (id) => {
    setCarrito((prevCarrito) => {
      localStorage.setItem(
        "listaCompras",
        JSON.stringify([...prevCarrito, initialCarrito[id - 1]])
      );
      return [
        ...prevCarrito,
        {
          ...initialCarrito[id - 1],
        },
      ];
    });
  };

  const removerDeCarrito = (id) => {
    let carritoActual = [...carrito];
    let newCarrito = [];
    newCarrito = carritoActual.filter(
      (orden) => orden !== carritoActual.find((o) => o.id === id)
    );
    setCarrito(newCarrito);
    localStorage.setItem("listaCompras", JSON.stringify(newCarrito));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Layout isLog={isLogged}>
          <Route
            exact
            path='/logout'
            render={() => (
              <Logout
                initialCarrito={initialCarrito}
                changeCarrito={setCarrito}
                changeLogged={setIsLogged}
              />
            )}
          />
          <Route
            exact
            path='/login'
            render={() => <Login isLog={isLogged} changeLogged={setIsLogged} />}
          />
          <Route
            exact
            path='/menu'
            render={() => (
              <Menu
                isLog={isLogged}
                ordenes={carrito}
                anidarOrden={agregarCarrito}
              />
            )}
          />
          <Route
            exact
            path='/ordenar'
            render={() => (
              <Ordenar
                reset={resetearCarrito}
                ordenes={carrito}
                actualizarOrdenes={setCarrito}
                removeCarrito={removerDeCarrito}
                plantilla={initialCarrito}
                anidarOrden={agregarCarrito}
                isLog={isLogged}
              />
            )}
          />
          <Route
            exact
            path='/form-ordenar'
            render={(props) => (
              <FormOrdenes
                reset={resetearCarrito}
                ordenes={carrito}
                actualizarOrdenes={setCarrito}
                plantilla={initialCarrito}
                isLog={isLogged}
                {...props}
              />
            )}
          />
          <Route
            exact
            path='/reservacion'
            render={(props) => (
              <Reservacion
                {...props}
                reset={resetearReservacion}
                isLog={isLogged}
              />
            )}
          />
          <Route
            exact
            path='/form-reservar'
            render={(props) => (
              <FormReservar
                {...props}
                reset={resetearReservacion}
                isLog={isLogged}
              />
            )}
          />
          <Route
            exact
            path='/'
            render={() => <LandingPage isLog={isLogged} />}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
