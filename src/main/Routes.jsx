import React from "react";
import {Route, Routes } from "react-router-dom";

import Home from '../components/home/HomePage.jsx'
import Descricao from '../components/project/Descricao';

export default props => (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Descricao />} />
            <Route path='*' element={<Home />} />
        </Routes>
 )

