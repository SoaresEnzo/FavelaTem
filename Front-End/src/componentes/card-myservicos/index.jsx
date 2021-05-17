import React from "react";
import "./style.css";
import { Link, useHistory } from 'react-router-dom'
import ImagemPlaceholder from '../../assets/imagens/perfil-placeholder.png'
import Atualizar from '../../assets/imagens/refresh-line.svg'
import Deletar from '../../assets/imagens/delete-bin-line.svg'

const CardServicos = (props) => {
  const history = useHistory();

  function changePage(id) {
    history.push(`/portifolio?&id=${id}`)
  }

  async function deletarServico() {
    const url = "http://projetos/ProjetoRecode/Back-End/deleteServico.php";
    let form = new FormData();
    form.append("id", props.idservico);
    form.append("email", localStorage.getItem("login"));
    form.append("senha", localStorage.getItem("senha"));
    const req = fetch(url, {
      method: "POST",
      body: form
    })
    const res = await req;
    const retorno = await res.json();
    alert(retorno.mensagem);

    props.setState(!props.state);
  }

  const [categorias, setCategorias] = React.useState([]);
  const [subcategorias, setSubcategorias] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectCategorias.php";
    const busca = fetch(url);
    const resposta = await busca;
    const dados = await resposta.json();

    setCategorias(dados);
  }, [])

  async function updateSubcategorias(event) {
    const id = event.target.value;
    let idForm = new FormData();
    idForm.append("id", id);

    const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectSubcategorias.php";
    const busca = fetch(url, {
      method: "POST",
      body: idForm
    });
    const resposta = await busca;
    const dados = await resposta.json();
    setSubcategorias(dados)
  }

  React.useEffect(() => {
    async function iniciarSubcategs() {
      const selectValue = document.getElementById("categ" + props.idservico).value;
      if (!isNaN(selectValue)) {
        const id = selectValue;
        let idForm = new FormData();
        idForm.append("id", id);

        const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectSubcategorias.php";
        const busca = fetch(url, {
          method: "POST",
          body: idForm
        });
        const resposta = await busca;
        const dados = await resposta.json();
        setSubcategorias(dados)
      }
    }
    iniciarSubcategs()
  }, [categorias])

  async function atualizarServico(event) {
    event.preventDefault();
    const url = "http://localhost/projetos/ProjetoRecode/Back-End/updateServicos.php"
    const form = new FormData(event.target);

    form.append('email', localStorage.getItem('login'));
    form.append('senha', localStorage.getItem('senha'));

    const envio = fetch(url, {
      method: "POST",
      body: form
    });
    const response = await envio;
    const res = await response.json();
    alert(res.mensagem);
    props.setState(!props.state);
  }

  function mostrarForm(){
    const toShow = document.getElementById("toShow"+props.idservico);
    toShow.hidden = false;

    const toHide = document.getElementById("toHide"+props.idservico);
    toHide.hidden = true;
  }

  function esconderForm(){
    const toShow = document.getElementById("toShow"+props.idservico);
    toShow.hidden = true;

    const toHide = document.getElementById("toHide"+props.idservico);
    toHide.hidden = false;
  }

  return (
    <>
      <div class="modal fade" id={"_" + props.idservico} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{props.nome}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body d-flex flex-column justify-content-center align-items-center">
              <img src={props.imgModal} alt="Serviço sem imagem" className="img-fluid align-self-center" />
              <div className="container d-flex align-items-center justify-content-center">
                <ul>
                  {props.cartao == 1 ? <li>Aceita cartão</li> : <li>Não aceita cartão</li>}
                  {props.dinheiro == 1 ? <li>Aceita dinheiro</li> : <li>Não aceita dinheiro</li>}
                  <li>Abre as {props.start}</li>
                </ul>
                <ul>
                  {props.atendlocal == 1 ? <li>Atende no local</li> : <li>Não atende no local</li>}
                  {props.atenddomicilio == 1 ? <li>Atende em domicílio</li> : <li>Não atende em domicílio</li>}
                  <li>Fecha as {props.end}</li>
                </ul>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
              <button className="btn btn-primary" data-dismiss="modal" onClick={() => { changePage(props.id) }}>Ver perfil completo</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id={"_del" + props.idservico} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Deletar serviço</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Tem certeza que quer deletar esse serviço?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button className="btn btn-danger" data-dismiss="modal" onClick={deletarServico}>Continuar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="cardMyServicos card">
        <div className="card-header d-flex">
          <img src={props.imgpessoa} alt="imngteste" onError={(e) => { e.target.onerror = null; e.target.src = ImagemPlaceholder }} className="rounded-circle" />
          <div className="ml-2">
            <p className="nome">{props.nome}</p>
            <p className="local">{props.local}</p>
          </div>
        </div>

        <div className="card-body p-0">
          <img src={props.imgcard} alt="Serviço sem imagem" />
        </div>
        <div className="card-footer p-1" id={"toHide"+props.idservico} >
          <p>{props.descricao}</p>

          <button type="button" class="btn btn-danger btn-padrao" data-toggle="modal" data-target={"#_del" + props.idservico}>
            <img src={Deletar} alt="Delete" />
          </button>

          <button type="button" class="btn btn-laranja btn-padrao" onClick={mostrarForm} >
            <img src={Atualizar} alt="Update" />
          </button>

          <button type="button" class="btn btn-laranja btn-padrao" data-toggle="modal" data-target={"#_" + props.idservico}>
            +
          </button>
        </div>

        <div className="card-footer p-1" id={"toShow"+props.idservico} hidden>
          <form onSubmit={atualizarServico}>
            <div class="form-group">
              <label for="nome">Categorias:</label>
              <select className="form-select-sm mt-2 w-100" id={"categ" + props.idservico} onChange={updateSubcategorias}>
                <option selected>Categoria </option>
                {
                  categorias.map((item) => {
                    if (item.idcategorias_servico === props.categ) {
                      return (
                        <option value={item.idcategorias_servico} selected>{item.categoria}</option>
                      )
                    } else {
                      return (
                        <option value={item.idcategorias_servico}>{item.categoria}</option>
                      )
                    }

                  })
                };
              </select>
            </div>
              
            <div class="form-group">
              <label for="nome">Subcategoria:</label>
              <select className="form-select-sm mt-2 w-100 sub-cat" name="idsubcategoria">
                {subcategorias.map((subcat) => {
                  if (subcat.idsubcategorias === props.subcateg) {
                    return (
                      <option value={subcat.idsubcategorias} selected>{subcat.nome_subcategoria}</option>
                    )
                  } else {
                    return (
                      <option value={subcat.idsubcategorias}>{subcat.nome_subcategoria}</option>
                    )
                  }

                })}
              </select>
            </div>

            <div class="form-group">
              <label for={"descricao" + props.idservico}>Descrição</label>
              <input type="text" class="form-control" id={"descricao" + props.idservico} name="descricaoservico" defaultValue={props.descricao} />
            </div>

            <div class="form-group">
              <label for={"img" + props.idservico}>Imagem</label>
              <input type="text" class="form-control" id={"img" + props.idservico} name="imagemservico" defaultValue={props.imgcard} />
            </div>

            {
              props.cartao === "1" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="pagamentocartao" id={"cartao" + props.idservico} defaultChecked />
                <label class="form-check-label" for={"cartao" + props.idservico}>
                  Aceita cartão
              </label>
              </div>
            }

            {
              props.cartao === "0" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="pagamentocartao" id={"cartao" + props.idservico} />
                <label class="form-check-label" for={"cartao" + props.idservico}>
                  Aceita cartão
              </label>
              </div>
            }

            {
              props.dinheiro === "1" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="pagamentodinheiro" id={"dinheiro" + props.idservico} defaultChecked />
                <label class="form-check-label" for={"dinheiro" + props.idservico} >
                  Aceita dinheiro
              </label>
              </div>
            }

            {
              props.dinheiro === "0" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="pagamentodinheiro" id="dinheiro" />
                <label class="form-check-label" for="dinheiro">
                  Aceita dinheiro
              </label>
              </div>
            }

            {
              props.atendlocal === "1" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="atendimentolocal" id={"local" + props.idservico} defaultChecked />
                <label class="form-check-label" for={"local" + props.idservico}>
                  Atende no local
              </label>
              </div>
            }

            {
              props.atendlocal === "0" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="atendimentolocal" id={"local" + props.idservico} />
                <label class="form-check-label" for={"local" + props.idservico}>
                  Atende no local
              </label>
              </div>
            }

            {
              props.atenddomicilio === "1" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="atendimentodomicilio" id={"domicilio" + props.idservico} defaultChecked />
                <label class="form-check-label" for={"domicilio" + props.idservico}>
                  Atende em domicílio
              </label>
              </div>
            }

            {
              props.atenddomicilio === "0" &&
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="atendimentodomicilio" id={"domicilio" + props.idservico} />
                <label class="form-check-label" for={"domicilio" + props.idservico}>
                  Atende em domicílio
              </label>
              </div>
            }

            <div class="form-group">
              <label htmlFor={"inicio" + props.idservico}>Abre as:</label>
              <input type="time" class="custom-control" name="inicioatendimento" id={"inicio" + props.idservico} defaultValue={props.start.slice(0, props.start.length - 3)} />

              <label htmlFor={"fim" + props.idservico}>Fecha as:</label>
              <input type="time" class="custom-control" name='fimatendimento' id={"fim" + props.idservico} defaultValue={props.end.slice(0, props.end.length - 3)} />
            </div>

            <input type="text" name="idservico" value={props.idservico} hidden/>

            <div class="form-group row">
              <div class="col-sm-6">
                <button type="reset" class="btn btn-danger" onClick={esconderForm} >Cancelar</button>
              </div>

              <div class="col-sm-6">
                <button type="submit" class="btn btn-primary">Atualizar</button>
              </div>
            </div>


          </form>
        </div>
      </div>
    </>
  );
};

export default CardServicos;
