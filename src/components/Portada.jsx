import React, {useContext} from 'react';
import h from "/src/components/css/header.css?inline";
import {IntlProvider, FormattedMessage} from 'react-intl';
import MensajesIngles from '../lang/en-US.json';
import MensajesEspanol from '../lang/es-ES.json';
import { langContext } from "../context/langContext";

const Portada = () => {
    const idioma = useContext(langContext);

    return (
            <header>   
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
    );
};

export default Portada;