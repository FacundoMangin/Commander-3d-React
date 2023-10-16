import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Images
import Goku from '../assets/galeria/Dragon-Ball/goku/goku-cults.png';
import VegetaNoGokui from '../assets/galeria/Dragon-Ball/vegeta/VegetaNoGokui.jpg';
import Freezer from '../assets/galeria/Dragon-Ball/Freezer/freezer.jpg';
import Cell from '../assets/galeria/Dragon-Ball/cell/cell-1.jpg';
import Diorama from '../assets/galeria/Dragon-Ball/goku/diorama.jpg';
import Vegeta from '../assets/galeria/Dragon-Ball/vegeta/vegeta-capsula.jpg';
import FreezerDiorama from '../assets/galeria/Dragon-Ball/Freezer/diorama.jpg';

import './css/carrusel.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const Productos = () => {
    return (

        <section id="carrusel" className='bg-fuchsia-200  dark:bg-slate-950'>
            <div className="contenedor">
            <div className="container">
                <h3 className="centrar_texto section-subtitulo">- Productos Populares -</h3>
                <h1 className="centrar_texto section-titulo">Impresiones 3D</h1>
            </div>
            <div className="container">
                <div className="swiper tranding-slider">
                <div className="swiper-wrapper">

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={Goku} alt="Tranding"/>
                            </div>
                            <div className="tranding-slide-content">
                                <h1 className="precio-tarjeta">$100</h1>
                                <div className="tranding-slide-content-bottom">
                                <h2 className="nombre-imagen">
                                    Goku
                                </h2>
                                <h3 className="numero-estrellas">
                                    <span>4.5</span>
                                    <div className="icono-estrellas">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={VegetaNoGokui} alt="Tranding"/>
                            </div>
                            <div className="tranding-slide-content">
                                <h1 className="precio-tarjeta">$100</h1>
                                <div className="tranding-slide-content-bottom">
                                <h2 className="nombre-imagen">
                                    Vegeta no Gokui
                                </h2>
                                <h3 className="numero-estrellas">
                                    <span>4.5</span>
                                    <div className="icono-estrellas">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={Freezer} alt="Tranding"/>
                            </div>
                            <div className="tranding-slide-content">
                                <h1 className="precio-tarjeta">$100</h1>
                                <div className="tranding-slide-content-bottom">
                                <h2 className="nombre-imagen">
                                    Freezer
                                </h2>
                                <h3 className="numero-estrellas">
                                    <span>4.5</span>
                                    <div className="icono-estrellas">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={Cell} alt="Tranding"/>
                            </div>
                            <div className="tranding-slide-content">
                                <h1 className="precio-tarjeta">$100</h1>
                                <div className="tranding-slide-content-bottom">
                                <h2 className="nombre-imagen">
                                    Cell
                                </h2>
                                <h3 className="numero-estrellas">
                                    <span>4.5</span>
                                    <div className="icono-estrellas">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={Diorama} alt="Tranding"/>
                            </div>
                        <div className="tranding-slide-content">
                            <h1 className="precio-tarjeta">$100</h1>
                            <div className="tranding-slide-content-bottom">
                            <h2 className="nombre-imagen">
                                Goku vs Cooler
                            </h2>
                            <h3 className="numero-estrellas">
                                <span>4.5</span>
                                <div className="icono-estrellas">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                </div>
                            </h3>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={Vegeta} alt="Tranding"/>
                            </div>
                            <div className="tranding-slide-content">
                                <h1 className="precio-tarjeta">$100</h1>
                                <div className="tranding-slide-content-bottom">
                                <h2 className="nombre-imagen">
                                    Nave de Vegeta
                                </h2>
                                <h3 className="numero-estrellas">
                                    <span>4.5</span>
                                    <div className="icono-estrellas">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-slide tranding-slide">
                            <div className="tranding-slide-img">
                                <img src={FreezerDiorama} alt="Tranding"/>
                            </div>
                            <div className="tranding-slide-content">
                                <h1 className="precio-tarjeta">$100</h1>
                                <div className="tranding-slide-content-bottom">
                                <h2 className="nombre-imagen">
                                    Freezer Diorama
                                </h2>
                                <h3 className="numero-estrellas">
                                    <span>4.5</span>
                                    <div className="icono-estrellas">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    </div>
                                </h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>

                <div className="tranding-slider-control">
                    <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                </div>
                
            </div>
            
            <div className="boton">
                <a href="/#"> Mas Productos</a>
            </div>
            
            </div>
  </section>
    );
};

export default Productos;
