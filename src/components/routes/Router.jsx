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
                <Route path='/' element={<Portada></Portada>} ></Route>
                <Route path='/ResinaFilamento' element={<ResinaFilamento></ResinaFilamento>} ></Route>
                <Route path='/Productos' element={<Productos></Productos>} ></Route>
                <Route path='/Informacion' element={<Informacion></Informacion>} ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;