import React from "react"
import './HomePage.css'
import Perfil from '../components/Perfil';
import Redes from '../components/Redes';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConjuntoCarousel from '../components/ConjuntoCarousel';


export default props =>

<div className="main">
    <div className="cardPefil">
        <Perfil />
        <Redes />
    </div>
    <div className="cardProjetos">
        <ConjuntoCarousel/>
    </div>
</div>