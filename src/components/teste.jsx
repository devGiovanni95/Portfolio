import React from "react";
import Finans from '../img/image/Finans.png'
import Poke from '../img/image/ApiPokemon.png'
import ListaCliente from '../img/image/ListaCliente.png'
import ListaExercicios from '../img/image/ListaExercicios.png'
import ListaTarefa from '../img/image/ListaTarefa.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default props =>

<div class="8col- text-center p-5 d-flex justify-content-md-center
flex-column">
<div id="carouselExampleFade" class="carousel slide carousel-fade"
  data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src={Finans} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Poke} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/tecblog.png" class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/ApiPokemon.PNG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/ListaCliente.PNG" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/ListaEndereço.PNG" class="d-block w-100"
        alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/ListaExercicios.PNG" class="d-block w-100"
        alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/ListaTarefa.PNG" class="d-block w-100" alt="..."/>
    </div>

    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/TecladoVirtual.PNG" class="d-block w-100"
        alt="..."/>
    </div>

    <div class="carousel-item" data-bs-interval="2000">
      <img src="../img/image/TelaLogin.PNG" class="d-block w-100" alt="..."/>
    </div>


  </div>
  <button class="carousel-control-prev" type="button"
    data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
    data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

