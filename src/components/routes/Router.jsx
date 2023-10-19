import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Portada from '../Portada';
import ResinaFilamento from '../ResinaFilamento';
import Productos from '../Productos';
import Informacion from '../Informacion';
import Nav from '../Nav';

const Router = () => {
    return (
        <BrowserRouter>
            <Nav>
                
            </Nav>
            <Routes>
                <Route path='/' Component={Portada} ></Route>
                <Route path='/resinaFilamento' Component={ResinaFilamento} ></Route>
                <Route path='/productos' Component={Productos} ></Route>
                <Route path='/informacion' Component={Informacion} ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;