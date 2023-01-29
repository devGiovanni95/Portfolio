import React from 'react';
import Botao from './Botao';
import './DescricaoCard.css'

export default props => 
    <div className='foto'>

      <p>
        {props.descricao}
        <br />
        {props.continuacao}

      </p>
   
      <img src={props.foto} alt=""/>

      <div className=''>
      
      </div>

    </div>

  
