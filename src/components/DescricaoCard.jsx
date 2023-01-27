

export default props => 
    <div className="imagem">

    {/* <!-- Descrição do Projeto --> */}
    <p className="sobre">
      Projeto Clone do Netflix é uma simulação da página principal do
      Netflix. <br/>
      Este projeto conta também com uma integração de API para fazer uma
      busca de filmes.
    </p>

    {/* <!-- Imagem do Projeto --> */}
    <img src={props.foto} alt="" className="img-fluid"/>

    {/* <!-- Botões de navegação --> */}
    <div className="d-flex justify-content-start align-content-center mt-4 ">
      <a className="btn btn-outline-dark btn-sm text-bg-dark "
        href="https://github.com/devGiovanni95/Project-Netflix-Clone">
        <p>
          <img src={props.foto} className="goToProject"/> Ver Projeto no
          GitHub
        </p>
      </a>
      <a class="btn btn-outline-dark btn-sm text-bg-dark ms-4"
        href="https://github.com/devGiovanni95/Project-Netflix-Clone">
        <p>
          <img src="img/rede.png" className="goToProject"/> Abrir Projeto
        </p>
      </a>
    </div>
  </div>
  
