import React, {useContext, useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import espana from '../assets/espana.png';
import estadosUnidos from '../assets/estados-unidos.png';

import { langContext } from "./../context/langContext";
import styled from 'styled-components'
import BurguerButton from './BurguerButton'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }


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
    <>
      <NavContainer>
        <h2>Commander <span>3D</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
            <NavLink to='/' className='texto-nav'>
                Inicio
                {/* <FormattedMessage
                    id='menu-inicio'
                    defaultMessage='Inicio'
                /> */}
            </NavLink>

            <NavLink to='/ResinaFilamento'>
                Servicios
            {/* <FormattedMessage
                    id='menu-Servicio'
                    defaultMessage='Servicio'
                /> */}
            </NavLink>
            
            <NavLink to='/Productos'>
                Productos
                {/* <FormattedMessage
                    id='menu-Productos'
                    defaultMessage='Productos'
                />     */}
            </NavLink>

            <NavLink to='/Informacion'>
                Informacion
                {/* <FormattedMessage
                    id='menu-Informacion'
                    defaultMessage='Información'
                /> */}
            </NavLink>
            

            <button
                className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                onClick={()=>{handleChangeTheme()}}
            >
                Dark
            </button>
        
          


        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-size: 2rem;
    font-weight: bold;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #5c005ffd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    font-size:1.5rem;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #5c005ffd;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`