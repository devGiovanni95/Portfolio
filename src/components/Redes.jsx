import React from "react"
import './Redes.css'
import Linkedin from '../img/icon/linkedin.png'
import GitHub from '../img/icon/github.png'
import Projetos from '../img/icon/projects.png'
import Botao from "./Botao"



const Redes = (props) => (

    <div className="redes">
        <p>Conheça Minhas Redes</p>    
  
        <Botao rede={Linkedin} 
                nome="Linkedin"
                link="https://www.linkedin.com/in/giovanni-santos-1326341a9"
                />
             
        <Botao rede={GitHub} 
                nome="GitHub"
                link="https://github.com/devGiovanni95"
                />

        <Botao nome="Ver Projetos"
                rede={Projetos} 
                link='/projetos'
                 />    
    
    </div>
)

export default Redes;

