import React, {useContext, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import '../components/css/navegador.css';
import espana from '../assets/espana.png';
import estadosUnidos from '../assets/estados-unidos.png';

import {FormattedMessage} from 'react-intl';

import { langContext } from "./../context/langContext";

function Nav() {
    const idioma = useContext(langContext);
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        }
    
        return "light";
      });
    
      useEffect(() => {
        if (theme === "dark") {
          document.querySelector("html").classList.add("dark");
        } else {
          document.querySelector("html").classList.remove("dark");
        }
      }, [theme]);
    
      const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };

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
                <div className="navbar-collapse" id="navbarSupportedContent">
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
                        <li className="nav-item ">
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

                        <li className="nav-item">
                            <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
                            <button
                                className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                                onClick={()=>{handleChangeTheme()}}
                            >
                                Dark
                            </button>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};


export default Nav;

