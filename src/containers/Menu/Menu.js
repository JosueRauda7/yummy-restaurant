import React from "react";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div className='container'>
      <div className='gallery'>
        <figure className='gallery__item gallery__item--1'>
          <img
            src='https://renatagb19.files.wordpress.com/2013/03/platillos2.jpeg'
            alt='Gallery image 1'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Roast beef y pudding Yorkshire</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--2'>
          <img
            src='http://paulabolanosrivas.weebly.com/uploads/3/1/0/5/31057765/8267117_orig.jpg'
            alt='Gallery image 2'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Pad Tha</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--3'>
          <img
            src='https://i.pinimg.com/736x/5a/69/61/5a696104065868ba21da715fbe919341--youtube-plato.jpg'
            alt='Gallery image 3'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Biryani</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--4'>
          <img
            src='https://www.hotelmousai.com.mx/blog/wp-content/uploads/2016/08/jicama-wrap.jpg'
            alt='Gallery image 4'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Haggis, neeps y tatties</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--5'>
          <img
            src='https://cdn.kiwilimon.com/clasificacion/3344/3344.jpg'
            alt='Gallery image 5'
            className='gallery__img'
          />
          <div className='info'>
            <h3>Dim sum</h3>
          </div>
        </figure>
        <figure className='gallery__item gallery__item--6'>
          <img
            src='http://nattivos.com/wp-content/uploads/2017/10/comida-gourmet.jpg'
            alt='Gallery image 6'
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
