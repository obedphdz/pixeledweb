/* eslint-disable no-unused-vars */
import styles from './Find.module.css';
import estilos from '../../../../style'
import Card from './Card';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

/* Imported services img */
import anuncio from '../../../assets/img/servicios/anuncio2.jpg'
import neon from '../../../assets/img/servicios/neon3.jpg'
import letras from '../../../assets/img/servicios/letras3d.png'
import rotulacion from '../../../assets/img/servicios/rotulacion3.jpg'
import señaletica from '../../../assets/img/servicios/señaletica.png'
import largeFormat from '../../../assets/img/servicios/granformato2.jpg'
import altaDefinicion from '../../../assets/img/servicios/granformato1.jpg'


const Find = () => {
  return (
    <div id="servicios" className={styles.find}>
      <div>
        <h1 className={estilos.heading2}>Nuestros Servicios</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Descubre Nuestros Logros Visuales</span>
          </p>
        </div>
      </div>
      <div className={styles.slider_container}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          breakpoints={{
            // when window width is >= 340px
            340: {
              width: 200,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 5,
            },
          }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <Card
              image= {anuncio}
              make='Anuncios'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={neon}
              make='Pantallas LED'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={rotulacion}
              make='Rotulación Vehicular'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={señaletica}
              make='Señalética'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={letras}
              make='Letras 3D'
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              image={largeFormat}
              make='Impresión Gran Formato'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={altaDefinicion}
              make='Impresión alta definción'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Find;
