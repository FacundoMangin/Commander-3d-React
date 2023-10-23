import React from 'react';
import './css/diferencia-resina-filamento.css'
import ImpresoraFilamento from '../assets/3Dprinter.png';
import Resina from '../assets/resina.png';

const ResinaFilamento = () => {
    return (
        <section className='diferencia'>
            <div className="contenedor sobre-nosotros" id="diferencia-resina-filamento">
        
                <h1 className="titulo-diferencia">Diferencia entre "Resina" y "Filamento"</h1>      

                <div className="contenedor-sobre-nosotros">     
                    <img src={ImpresoraFilamento} alt="" className="imagen-about-us"/>
                    <div className="contenidos-textos">
                        <img src={Resina} alt="" className="imagen-resina"/>
                        <h3><span className="circulo-violeta">1</span>Resina</h3>
                        <ul>
                            <li>➤ Proporciona una resolución mayor que otras impresoras.</li>
                            <li>➤ Es ideal para piezas más pequeñas con detalles.</li>
                            <li>➤ También es muy buena para objetos sólidos y rellenos, de carácter macizo.</li>
                        </ul>
                        <img src={ImpresoraFilamento} alt="" className="imagen-impresora-filamento"/>
                        <h3 ><span className="circulo-violeta">2</span>Filamento</h3>
                        <ul >
                            <li >➤ Las impresoras 3D de filamento trabajan dividiendo los objetos en capas que después son apiladas una encima de otra hasta reconstruir el modelo digital.</li>
                            <li>➤ Estas impresiones pierdan calidad a diferencia de la resina.</li>
                            <li>➤ Se recomiendan para impresiones de un tamaño mayor.</li>
                        </ul>
                    </div>
                </div>         
            </div>  
        </section>
    );
};

export default ResinaFilamento;