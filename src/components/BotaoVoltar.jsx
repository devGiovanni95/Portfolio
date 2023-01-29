import React from "react";
import { Link } from "react-router-dom";
import './BotaoVoltar.css'


export default props =>

    <div className="">
       
        <a className="btnVoltar btn btn-dark mt-2"
        href={`${props.link}`}>
            <img src={props.rede} alt="" /> {props.nome}
        </a>
         </div>
    
