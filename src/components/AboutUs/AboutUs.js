import React from "react";

const AboutUs = (props) => {
  return (
    <section className='acerca-de'>
      <div className='info-container'>
        <h1>Acerca de Nosotros</h1>
        <p>
          Entendemos que detrás de cada restaurante hay sueños, esfuerzo,
          sacrificio, ahorros y mucha pasión por los productos que se cocinan,
          sin embargo, sabemos que hay un reto para todos los restaurantes en el
          momento que abren sus puertas: dar a conocer sus productos a la mayor
          cantidad de personas que valoran su tipo de cocina.
        </p>
        <p>
          Pertenecemos a una empresa colombiana líder en tecnología,
          posicionamiento orgánico en motores de búsqueda y generación de
          tráfico por contenido de calidad, somos especialistas y uno de los
          mejores en lo que hacemos.
        </p>
        <div className='about-gallery'>
          {/* <img
            src='https://image.freepik.com/free-vector/group-professional-chefs-man-woman-chefs_36082-488.jpg'
            alt=''
          /> */}
          <img
            src='https://www.guatemala.com/fotos/201710/Giuseppe-Verdi-Restaurante-885x500.jpg'
            alt=''
          />
          <img
            src='https://loff.it/wp-content/uploads/2017/04/loffit-el-restaurante-solomillo-abre-su-patio-y-terraza-al-calor-de-la-primavera-06.jpg'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
