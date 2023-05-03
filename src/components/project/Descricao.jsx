import DescricaoCard from "../DescricaoCard.jsx";
import Site from '../../img/icon/rede.png';
import GitHub from '../../img/icon/github.png';
import React from 'react';
import Netflix from '../../img/image/Netflix.png';
import Finans from '../../img/image/Finans.png';
import Pokemon from '../../img/image/ApiPokemon.png';
import Tecblog from '../../img/image/Tecblog.png';
import TelaLogin from '../../img/image/TelaLogin.png';
import ListaTarefa from '../../img/image/ListaTarefa.png';
import ListaEnderecos from '../../img/image/ListaEndereco.png';
import ListaExercicios from '../../img/image/ListaExercicios.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Descricao.css';
import Voltar from '../../img/icon/sair3.png';
import HomePage from '../home/HomePage';
import BotaoVoltar from "../BotaoVoltar.jsx";
import BotaoProjeto from "../BotaoProjeto.jsx";


export default props =>
    <div>
        {/* <div className=" d-flex align-items-start ml-3 mt-3">
            <link rel="stylesheet" href={HomePage} />
            <img src={Voltar} alt=""  />
                
        </div> */}
        <div className=" d-flex align-items-start ml-3 mt-3">
            <BotaoVoltar  
                    rede={Voltar}
                    link={HomePage} 
            />
        </div>


        <div className="principal">
        
            <div className="d-flex">
            
                <h1>Portfólio</h1>
            </div>

            <div className="projetos">

                {/* Netflix */}
                <div>
                    <DescricaoCard className="imagem"
                    foto={Netflix}
                        descricao=" 
                        Projeto Clone do Netflix é uma simulação da página principal do
                        Netflix."
                        continuacao="Este projeto conta também com uma integração de API para fazer uma
                        busca de filmes."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/Project-Netflix-Clone"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/Project-Netflix-Clone/public/"
                        />    
                    </div>
                </div>
                 
                 {/* Finans */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={Finans}
                        descricao="Projeto é uma simulação de uma página sobre Finanças."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/Project-Finans"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/Project-Finans/"
                        />    
                    </div>
                </div>



                 {/* Lista Pokemon */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={Pokemon}
                        descricao="Este Projeto conta com uma busca de Pokemon listando ele de acordo
                                  com o código pesquisado."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/ApiPokemon"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/ApiPokemon"
                        />    
                    </div>
                </div>

                 {/* TecBlog */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={Tecblog}
                        descricao=" 
                        Este Projeto simula um Blog que aborda temas relacionados com a Tecnologia."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/DesenvolvimentoWeb/tree/main/ProjetoTecBlogImplementado"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://portifoliogiovanni.netlify.app/"
                        />    
                    </div>
                </div>

                 {/* Lista de Endereço */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={ListaEnderecos}
                        descricao="  O projeto faz uma basca de acordo com CEP digitado"
                        continuacao="Retornando o CEP digitado a Cidade e o Estado."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/ListaDeEndereco"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/ListaDeEndereco"
                        />    
                    </div>
                </div>

                 {/* Lista de Exercicios */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={ListaExercicios}
                        descricao=" O projeto conta com lista de exercicios com algumas operações básicas "
                        continuacao="  sendo resolvidas com JavaScript."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/ListaDeExerciciosLogicos"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/ListaDeExerciciosLogicos"
                        />    
                    </div>
                </div>

                 {/* Lista de Tarefas */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={ListaTarefa}
                        descricao=" O projeto conta com lista de tarefas onde se pode "
                        continuacao="adicionar mais tarefas e o tempo necessario para calcular tempo total."
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/ListaDeTarefas"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/ListaDeTarefas"
                        />    
                    </div>
                </div>

                 {/* Tela Login */}
                 <div className="mt-5">
                    <DescricaoCard className="imagem"
                    foto={TelaLogin}
                        descricao="O Projeto simula uma tela de Login."
                    />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/Tela-Login"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link="https://devgiovanni95.github.io/Tela-Login/"
                        />    
                    </div>
                </div>



                {/*                 
                <div>
                    <DescricaoCard className="imagem"
                    foto={}
                        descricao=" 
                        Projeto Clone do Netflix é uma simulação da página principal do
                        Netflix."
                        continuacao="Este projeto conta também com uma integração de API para fazer uma
                        busca de filmes"
                        />
                    <div className="btnRedes d-flex justify-content-around">

                        <BotaoProjeto rede={GitHub} 
                        nome="Ver Projeto no GitHub"
                        link="https://github.com/devGiovanni95/"
                        />    
                        <BotaoProjeto rede={Site}
                        nome="Abrir Projeto no Navegador"
                        link=" "
                        />    
                    </div>
                </div> */}




                
                  
            </div>
    
        </div>
    </div>

