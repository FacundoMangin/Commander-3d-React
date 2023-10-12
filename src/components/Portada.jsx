import React, {useContext} from 'react';

import "./css/header.css";

import {IntlProvider, FormattedMessage} from 'react-intl';
import MensajesIngles from '../lang/en-US.json';
import MensajesEspanol from '../lang/es-ES.json';
import { langContext } from "../context/langContext";

const Portada = () => {
    const idioma = useContext(langContext);

    return (
        <IntlProvider locale="en-US" messages={MensajesEspanol}>
            <header className='dark:bg-neutral-900'>   
                <section className="textos-header">
                    <h1 id="header-titulo">Commander 3D</h1>
                    <h2 className="header-subtitulo" >
                        <FormattedMessage id="subtitulo-portada" defaultMessage="Resin and Filament Prints" /> 
                    </h2>
                </section>
                <section className="titulo-logo-celular">
                    <h1>3D</h1>
                    <h2>Commander</h2>
                    <h3 className="header-subtitulo">"Impresiones en Resina y Filamento"</h3>
                </section> 
            </header>
        </IntlProvider>
    );
};

export default Portada;