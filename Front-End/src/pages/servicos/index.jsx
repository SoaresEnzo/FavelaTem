import React from "react";

import "./style.css";
import CardServicos from "../../componentes/card-servicos";
// import  'bootstrap / dist / css / bootstrap.min.css' ;

import logo from "../../assets/imagens/logofavelatem.png";
import reformas from "../../assets/imagens/parede-de-tijolos.png";
import assistencia from "../../assets/imagens/lasca.png";
import beleza from "../../assets/imagens/maquiagem.png";
import costura from "../../assets/imagens/maquina-de-costura.png";
import auto from "../../assets/imagens/servico-automotivo.png";
import camera from "../../assets/imagens/camera-cb.png";
import consultoria from "../../assets/imagens/servicos-de-consultoria.png";
import alimentacao from "../../assets/imagens/prato-cb.png";
import caixa from "../../assets/imagens/caixa-de-ferramentas.png";
import saude from "../../assets/imagens/batimento-cardiaco.png";
import lupa from "../../assets/imagens/analise.png";
import Menu from "../../componentes/Menu"

import Home from "../home";

const Servicos = () => {
  const [categorias, setCategorias] = React.useState([]);
  const [subcategorias, setSubcategorias] = React.useState([]);
  const [servicos, setServicos] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState([""]);
  const [filtro, setFiltro] = React.useState({ subcateg: "Todos", categ: "Todos" });

  //Retorna o valor passado na url vindo de home
  function getInfo() {
    const queryString = window.location.href;
    const urlParams = new URLSearchParams(queryString);
    const pesquisa = urlParams.get('pesquisa');
    return pesquisa;
  }

  //Pega o valor de pesquisa(atualizado pelo input) e atualiza a página com os dados
  async function search() {
    const param = pesquisa;
    const url = `http://localhost/projetos/ProjetoRecode/Back-End/selectServicosBySearch.php?busca=${param}`;
    const busca = fetch(url);
    const resposta = await busca;
    const dados = await resposta.json();
    setServicos(dados)
  }

  //Coloca o valor de pesquisa igual o que for digitado no input
  function changeStatePesquisa(event) {
    setPesquisa(event.target.value)
  }

  function limparFiltro() {
    setFiltro({ subcateg: "Todos", categ: "Todos" });
  }

  function filtrar(event) {
    setFiltro(event.target.value)
    setFiltro({ subcateg: event.target.value })
  }


  //Busca categorias
  React.useEffect(async () => {
    const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectCategorias.php";
    const busca = fetch(url);
    const resposta = await busca;
    const dados = await resposta.json();

    setCategorias(dados);
  }, [])

  //Busca serviços
  React.useEffect(async () => {
    const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectServicos.php";
    const busca = fetch(url);
    const resposta = await busca;
    const dados = await resposta.json();
    setServicos(dados);
  }, [])

  //Caso tenha sido passado o valor de pesquisa em home, atualiza o input de pesquisa com o que foi digitado
  React.useEffect(() => {
    if (getInfo != null) {
      setPesquisa(getInfo());
    }
  }, [])

  function updateCategoria(val){
    let oldState = filtro;
    let newState = {...oldState}
    newState.categ = val;
    newState.subcateg = "Todos";
    setFiltro(newState);
  }

  //Pega o valor da categ selecionada e passa como parâmetro para retornar as subcategorias relacionadas
  async function updateSubcategorias(event) {
    const id = event.target.value;
    let idForm = new FormData();
    idForm.append("id", id);

    let oldState = filtro;
    let newState = {...oldState}
    newState.categ = id;
    newState.subcateg = "Todos";
    setFiltro(newState);

    const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectSubcategorias.php";
    const busca = fetch(url, {
      method: "POST",
      body: idForm
    });
    const resposta = await busca;
    const dados = await resposta.json();
    setSubcategorias(dados)
  }

  return (
    <div className="page-servicos">
      <div className="container-fluid p-0">
        <Menu />
        <div className="section-2 pb-3">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <button
              class="navbar-toggler btn btn-info"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0 w-100 justify-content-between">

                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("4")}}>
                    <img src={camera} alt="" />
                    <p>Arte</p>
                  </button>
                </li>

                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("5")}}>
                    <img src={assistencia} alt="" />
                    <p>Assistência Técnica</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("6")}}>
                    <img src={beleza} alt="" />
                    <p>Beleza</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("7")}}>
                    <img src={caixa} alt="" />
                    <p>Serviços Gerais</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("8")}}>
                    <img src={alimentacao} alt="" />
                    <p>Alimentação</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("9")}}>
                    <img src={costura} alt="" />
                    <p>Moda</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("10")}}>
                    <img src={saude} alt="" />
                    <p>Saúde e bem-estar</p>
                  </button>
                </li>
                <li class="nav-item">
                  <button onClick={()=>{updateCategoria("11")}}>
                    <img src={consultoria} alt="" />
                    <p>Outros</p>
                  </button>
                </li>

              </ul>
            </div>
          </nav>
        </div>
        <div className="section-3 row">
          <div className="filtro col-lg-2 col-md-3 col-sm-4">
            <aside className="itens">
              <ul className="mx-2">

                <p>Filtrar</p>
                <select className="form-select-sm w-100" onChange={updateSubcategorias}>
                  <option selected>Categoria</option>
                  {categorias.map((item) => {
                    return (
                      <option value={item.idcategorias_servico}>{item.categoria}</option>
                    )
                  })};


                </select>

                <select className="form-select-sm mt-2 w-100" onChange={filtrar}>
                  <option selected>Subcategoria</option>
                  {subcategorias.map((subcat) => {
                    return (
                      <option value={subcat.idsubcategorias}>{subcat.nome_subcategoria}</option>
                    )
                  })}
                </select>
                <div className="btn btn-block mt-2 cleanFilter" onClick={limparFiltro}>Limpar filtro</div>
              </ul>
            </aside>
          </div>
          <div className="servicos col-md-9 col-lg-10 col-sm-8 p-0">
            <div className="pesquisa">
              <div class="input-group mb-3 d-flex align-items-center justify-content-center">
                <input
                  type="text"
                  class="form-control-sm w-75"
                  placeholder="O que você esta procurando?"
                  value={pesquisa}
                  onChange={changeStatePesquisa}
                ></input>
                <button className="btn btn-light" onClick={search}>
                  <img src={lupa} />
                </button>
              </div>
            </div>

            <div className="group-servicos flex-wrap justify-content-center">
              {servicos.filter(servico => servico.fk_subcategoria == filtro.subcateg ||servico.fk_categoria === filtro.categ && filtro.subcateg === "Todos" || filtro.categ === "Todos" && filtro.subcateg === "Todos").map((servico) => {
                return (
                  <CardServicos cartao={servico.pagamento_cartao} dinheiro={servico.pagamento_dinheiro} atenddomicilio={servico.atendimento_domicilio} atendlocal={servico.atendimento_local} imgModal={servico.imagem_servico} local={servico.logradouro + ", " + servico.numero} nome={servico.nome_fantasia} imgpessoa={servico.imagem} imgcard={servico.imagem_servico} descricao={servico.descricao_servico} id={servico.idcadastrolojaprestador} idservico={servico.idservicos} start={servico.inicio_atendimento} end={servico.fim_atendimento} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicos;
