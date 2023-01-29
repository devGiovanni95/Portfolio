import React from "react";
import { Link } from "react-router-dom";
import './BotaoProjeto.css'


export default props =>

    <div className="">
       
        <a className="btnProjeto btn btn-dark mt-4"
        href={`${props.link}`}>
            <img src={props.rede} alt="" /> {props.nome}
        </a>
         </div>
    
