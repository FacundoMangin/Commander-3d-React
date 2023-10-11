import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import '../components/css/navegador.css';
import espana from '../assets/espana.png';
import estadosUnidos from '../assets/estados-unidos.png';

import {FormattedMessage} from 'react-intl';

import { langContext } from "./../context/langContext";

const Nav = () => {
    const idioma = useContext(langContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="titulo-logo">
                    <a id="nav-titulo" className="text-white text-commander">Commander 3D</a>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
                        <li className="nav-item">
                            <NavLink to='/' className='texto-nav'>
                                Inicio
                                {/* <FormattedMessage
                                    id='menu-inicio'
                                    defaultMessage='Inicio'
                                /> */}
                            </NavLink>
                            
                        </li>           
                        <li className="nav-item">
                            <NavLink to='/ResinaFilamento'>
                                Servicios
                            {/* <FormattedMessage
                                    id='menu-Servicio'
                                    defaultMessage='Servicio'
                                /> */}
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Productos'>
                                Productos
                                {/* <FormattedMessage
                                    id='menu-Productos'
                                    defaultMessage='Productos'
                                />     */}
                            </NavLink>
                            
                        </li>
                        <li className="nav-item">
                            <NavLink to='/Informacion'>
                                Informacion
                                {/* <FormattedMessage
                                    id='menu-Informacion'
                                    defaultMessage='Información'
                                /> */}
                            </NavLink>
                           
                        </li>
                        <li className="nav-item dropdown">
                            
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Lenguaje
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink onClick={() => idioma.establecerLenguaje('es-ES')} className="dropdown-item" to="/opcion1"><img src={espana} alt="" />español</NavLink></li>
                                <li><NavLink onClick={() => idioma.establecerLenguaje('en-US')}  className="dropdown-item" to="/opcion2"><img src={estadosUnidos} alt="" />Ingles</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                
                    <button className="switch" id="switch">
                        <span><i className="fa-solid fa-sun"></i></span>
                        <span><i className="fa-solid fa-moon"></i></span>
                    </button>    
                </div>
            </div>
        </nav>

    );
};


export default Nav;

