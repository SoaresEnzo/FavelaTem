import React from "react";
import { Link, useHistory } from "react-router-dom";

import Menu from "../../componentes/Menu";
import Apoio from "../../componentes/Apoio";

import "./stylehub.css";

import $ from 'jquery';

import ImagemPlaceholder from '../../assets/imagens/perfil-placeholder.png'

const Hub = () => {
  const [dados, setDados] = React.useState({prestador: []});
  const [pesquisa, setPesquisa] = React.useState(false);
  const history = useHistory();

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
  }, [])

  React.useEffect(() => {
    async function checkAvaliacao() {
      const url = "http://projetos/ProjetoRecode/Back-End/checkPesquisa.php";
      const form = new FormData();
      form.append('email', localStorage.getItem('login'))
      form.append('senha', localStorage.getItem('senha'))
      const envio = fetch(url, {
        method: "POST",
        body: form
      })
      const response = await envio;
      const res = await response.json();
      setPesquisa(res);
    };
    checkAvaliacao();
  }, [])

  React.useEffect(() => {
    if (pesquisa.pesquisa === true) {
      window.$('#exampleModal').modal('show');
    }
  }, [pesquisa])

  const [cursos, setCursos] = React.useState([])
  React.useEffect(async () => {
    const url = 'http://projetos/ProjetoRecode/Back-End/selectAllCursos.php';
    const envio = fetch(url)
    const response = await envio;
    const res = await response.json()
    setCursos(res);

  }, []);

  async function responderPesquisa(event) {
    event.preventDefault();
    const url = "http://projetos/ProjetoRecode/Back-End/responderAvaliacao.php"
    const form = new FormData(event.target);
    form.append('email', localStorage.getItem('login'));
    form.append('senha', localStorage.getItem('senha'));

    const envio = fetch(url, {
      method: "POST",
      body: form
    });
    const response = await envio;
    const res = await response.json();

    const resultado = res.every((e) => e === 1);

    if (resultado) {
      alert("Obrigado por contribuir com a melhoria do FavelaTem.");
      window.$('#exampleModal').modal('hide');
    } else {
      alert("Algo deu errado ao enviar a pesquisa, sentimos muito.");
    }
  }

  if (dados.prestador[0] != null) {
    return (
      <div className="hub">
        <div className="container-fluid">
          <div className="section-1">
            <div className="bloco-1">
              <Menu />
            </div>
          </div>
          <div className="section-principal row">
            <div className="section-user col-lg-2 col-md-3 mx-0 px-0 w-100">
              <aside className="inf-user">
                <div className="foto-user">
                  <img src={dados.prestador[0].imagem} onError={(e)=>{e.target.onerror = null; e.target.src=ImagemPlaceholder}} className="rounded-circle" alt="foto usuario" />
                </div>
                <div className="name-user text-center">
                  <p>{dados.prestador[0].nome_fantasia}</p>
                </div>
                <div className="pontos">
                  <p>{dados.pontuacao[0].pontuacao === null ? 0 : dados.pontuacao[0].pontuacao}</p>
                  <p>pontos</p>
                </div>
                <div className="atividades">
                  <p>{dados.perguntas[0].respostasUser}/{dados.perguntas[0].perguntasTotal}</p>
                  <p>atividades</p>
                </div>
                <div className="anuncios">
                  <p>{dados.anuncios[0].qntdAnuncios}</p>
                  <p>anúncios</p>
                </div>
                <div className="btns">
                  <Link className="btn" to={`/portifolio?&id=${dados.prestador[0].idcadastrolojaprestador}`}>Meu perfil</Link>
                  <Link className="btn" to="/cadportifolio">Adicionar Portfólio</Link>
                  <Link className="btn" to="/servico">Criar Anúncio</Link>
                  <Link className="btn" to="/meus-servicos">Meus Anúncios</Link>
                  <Link className="btn" to="/updateloja">Atualizar perfil</Link>
                </div>
              </aside>
            </div>

            <div className="conteudo col-lg-10 col-md-9 px-0 mx-0">
              <div class="modal" tabindex="-1" role="dialog" id="exampleModal">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Pesquisa de satisfação</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form id="form-pesquisa" onSubmit={responderPesquisa}>
                        <div class="form-group">
                          <label for="pergunta1">O FavelaTem ajudou a melhorar seu negócio?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[0][]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[0][]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="resposta[0][1]" value="1" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Após a divulgação no FavelaTem sua clientela aumentou?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[1][]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[1][]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="resposta[1][1]" value="2" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Após a divulgação do seu serviço no FavelaTem seu rendimento mensal aumentou?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[2][]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[2][]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="resposta[2][1]" value="3" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Se aumentou, quanto foi aproximadamente?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[3][]" value="10-" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Menos de 10%
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[3][]" value="10+" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Mais de 10%
                              </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[3][]" value="30+" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Mais de 30%
                              </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[3][]" value="50+" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Mais de 50%
                              </label>
                          </div>
                          <input type="text" name="resposta[3][1]" value="4" hidden />
                        </div>

                        <div class="form-group">
                          <label for="pergunta1">Você indicaria o FavelaTem?</label>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[4][]" value="1" id="simAjudou" />
                            <label class="form-check-label" for="defaultCheck1">
                              Sim
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="resposta[4][]" value="0" id="naoAjudou" />
                            <label class="form-check-label" for="defaultCheck2">
                              Não
                              </label>
                          </div>
                          <input type="text" name="resposta[4][1]" value="5" hidden />
                        </div>

                        <div class="form-group">
                          <label for="comentario">Faça um comentário:</label>
                          <textarea name="resposta[5][]" className="form-control" id="comentario" rows="3"></textarea>
                          <input type="text" name="resposta[5][1]" value="6" hidden />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary" form="form-pesquisa">Enviar</button>
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cursos">
                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    {cursos.map((itemCurso) => {
                      if (itemCurso === cursos[0]) {
                        return (
                          <div class="carousel-item active">
                            <img src={require('../../assets/imagens/'+itemCurso.imagem_curso).default} className="d-block w-100" alt="..." onClick={()=>{history.push(`/cursos?&id=${itemCurso.idcursos}`)}} />
                            <div class="carousel-caption">
                              <Link to={`/cursos?&id=${itemCurso.idcursos}`}>
                                <h5>{itemCurso.nome_curso}</h5>
                              </Link>
                              <p>{itemCurso.descricao}</p>
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div class="carousel-item ">
                            <img src={require('../../assets/imagens/'+itemCurso.imagem_curso).default} className="d-block w-100" alt="..." onClick={()=>{history.push(`/cursos?&id=${itemCurso.idcursos}`)}} />
                            <div class="carousel-caption">
                              <Link to={`/cursos?&id=${itemCurso.idcursos}`}>
                                <h5>{itemCurso.nome_curso}</h5>
                              </Link>
                              <p>{itemCurso.descricao}</p>
                            </div>
                          </div>
                        )
                      }
                    })
                    }

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

             
             
                <Apoio />
           
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
