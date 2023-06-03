import React from "react"
import './HomePage.css'
import Perfil from '../Perfil';
import Redes from '../Redes';
import 'bootstrap/dist/css/bootstrap.min.css';
import ConjuntoCarousel from '../ConjuntoCarousel';


const HomePage = (props) =>(

<div className="main">
    <div className="cardPefil">
        <Perfil />
        <Redes />
    </div>
    <div className="cardProjetos">
        <ConjuntoCarousel/>
    </div>
</div>
)
export default HomePage;