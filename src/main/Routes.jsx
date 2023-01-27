import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './HomePage'
import Descricao from './Descricao';

export default props => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projetos' element={<Descricao />} />
            <Route path='*' element={<Home />} />
        </Routes>
  </BrowserRouter>
 )

