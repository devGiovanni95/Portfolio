import React, { useState } from 'react';
import './Carousel.css'
import { Link } from 'react-router-dom';

export default props =>
  <div className='card'>
      <div className="cardImage mt-5 mr-1">
      <Link to="/projetos">
        <img src={props.nome} alt=""/>
        </Link>
      </div>
  </div>