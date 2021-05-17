import React from "react";

import "./stylehub.css";


import consultoria from "../../assets/imagens/consultoria.png";
import marketing from "../../assets/imagens/marketing-digital.png";
import empreendedorismo from "../../assets/imagens/empreendedorismo.png";
import Menu from "../../componentes/Menu";
import { Link } from "react-router-dom";
import Apoiadores from "../../componentes/patrocinadores";

const Hub = () => {
  const [dados, setDados] = React.useState([])
  React.useEffect(async () => {
    const url = "http://projetos/ProjetoRecode/Back-End/selectPrestadorByLogin.php";
    const form = new FormData();
    form.append('email', localStorage.getItem('login'))
    form.append('senha', localStorage.getItem('senha'))
    const envio = fetch(url, {
      method: "POST",
      body: form
    })
    const response = await envio;
    const res = await response.json();
    setDados(res)
    console.log(res)

  }, [])

  if (dados[0] != null) {
    return (
      <div className="hub">
        <div className="container-fluid">
          <div className="section-1">
            <div className="bloco-1">
              <Menu />
            </div>
          </div>
          <div className="section-principal">
            <div className="section-user">
              <aside className="inf-user">
                <div className="foto-user">
                  <img src={dados[0].imagem} className="rounded-circle" alt="foto usuario" />
                </div>
                <div className="name-user text-center">
                  <p>{dados[0].nome_fantasia}</p>
                </div>
                <div className="pontos">
                  <p>50</p>
                  <p>pontos</p>
                </div>
                <div className="atividades">
                  <p>1/3</p>
                  <p>atividades</p>
                </div>
                <div className="anuncios">
                  <p>10</p>
                  <p>anúncios</p>
                </div>
                <div className="btns">
                  <Link className="btn" to={`/portifolio?&id=${dados[0].idcadastrolojaprestador}`}>Meu perfil</Link>
                  <Link className="btn" to="/cadportifolio">Adicionar Portfólio</Link>
                  <Link className="btn" to="/servico">Criar Anúncio</Link>
                  <Link className="btn" to="/updateloja">Atualizar perfil</Link>
                </div>
              </aside>
            </div>
            <div className="conteudo">
              <div className="cursos">
               <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={consultoria} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Consultoria</h5>
                      <p>Um curso completo com dicas para melhor administrar seu
                          negócio.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={marketing} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Marketing Digital</h5>
                      <p>Descubra como seu negócio pode evoluir com nosso curso
                          de Marketing.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={empreendedorismo} className="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Empreendedorismo</h5>
                      <p>Otimas dicas e sugestões para seu negócio evoluir!</p>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div> 

              </div>

              <div  style={{margin: 50}}>
                {/* <h1>
                  Sua Empresa aqui! Sendo vista por mais de 400 Mil Pessoas.
              </h1> */}
                <p>Apio: </p>
                <Apoiadores  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (<h1>Buscando dados</h1>)
  };
};

export default Hub;
