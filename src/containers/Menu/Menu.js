import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import Swal from "sweetalert2";
import "./Menu.css";

const Menu = (props) => {
  const handleAddCart = (id) => {
    props.anidarOrden(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Añadidido!",
      showConfirmButton: false,
      timer: 900,
    });
  };

  return (
    <div className='container'>
      <h1
        style={{
          margin: "18px 0",
          fontSize: "3em",
        }}>
        Menú
      </h1>
      <div className='gallery'>
        <figure className='gallery__item gallery__item--1'>
          {props.isLog ? (
            <div onClick={() => handleAddCart(1)} className='add'>
              <AddShoppingCart fontSize='small' />
            </div>
          ) : null}
          <img
            src='https://renatagb19.files.wordpress.com/2013/03/platillos2.jpeg'
            alt='Roast beef y pudding Yorkshire'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Roast beef y pudding Yorkshire</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--2'>
          {props.isLog ? (
            <div onClick={() => handleAddCart(2)} className='add'>
              <AddShoppingCart fontSize='small' />
            </div>
          ) : null}
          <img
            src='http://paulabolanosrivas.weebly.com/uploads/3/1/0/5/31057765/8267117_orig.jpg'
            alt='Pad Tha'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Pad Tha</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--3'>
          {props.isLog ? (
            <div onClick={() => handleAddCart(3)} className='add'>
              <AddShoppingCart fontSize='small' />
            </div>
          ) : null}
          <img
            src='https://i.pinimg.com/736x/5a/69/61/5a696104065868ba21da715fbe919341--youtube-plato.jpg'
            alt='Biryani'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Biryani</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--4'>
          {props.isLog ? (
            <div onClick={() => handleAddCart(4)} className='add'>
              <AddShoppingCart fontSize='small' />
            </div>
          ) : null}
          <img
            src='https://www.hotelmousai.com.mx/blog/wp-content/uploads/2016/08/jicama-wrap.jpg'
            alt='Haggis, neeps y tatties'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Haggis, neeps y tatties</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--5'>
          {props.isLog ? (
            <div onClick={() => handleAddCart(5)} className='add'>
              <AddShoppingCart fontSize='small' />
            </div>
          ) : null}
          <img
            src='https://cdn.kiwilimon.com/clasificacion/3344/3344.jpg'
            alt='Dim sum'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Dim sum</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--6'>
          {props.isLog ? (
            <div onClick={() => handleAddCart(6)} className='add'>
              <AddShoppingCart fontSize='small' />
            </div>
          ) : null}
          <img
            src='http://nattivos.com/wp-content/uploads/2017/10/comida-gourmet.jpg'
            alt='CRISPY WRAP'
            className='gallery__img'
          />
          <div className='info'>
            <h3>CRISPY WRAP</h3>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Menu;
