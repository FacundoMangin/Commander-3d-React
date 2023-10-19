import React, {} from 'react';

import "./css/header.css";


const Portada = () => {

    return (
            <header className='dark:bg-neutral-900'>   
                <section className="textos-header">
                    <h1 id="header-titulo">Commander 3D</h1>
                    <h2 className="header-subtitulo" >
                    <h2 class="titulo-diferencia">Diferencia entre "Resina" y "Filamento"</h2>
                    </h2>
                </section>
                <section className="titulo-logo-celular">
                    <h1>3D</h1>
                    <h2>Commander</h2>
                    <h3 className="header-subtitulo">"Impresiones en Resina y Filamento"</h3>
                </section> 
            </header>
    );
};

export default Portada;