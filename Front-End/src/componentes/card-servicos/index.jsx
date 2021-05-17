import React from "react";
import "./style.css";
import { Link, useHistory } from 'react-router-dom'
import ImagemPlaceholder from '../../assets/imagens/perfil-placeholder.png'

const CardServicos = (props) => {
  const history = useHistory();
  function changePage(id) {
    history.push(`/portifolio?&id=${id}`)
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
              <img src={props.imgModal} alt="Serviço sem imagem" className="img-fluid" />
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

      <div className="cardServicos card">
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
        <div className="card-footer p-1">
          <p>{props.descricao}</p>

          <button type="button" class="btn btn-block" data-toggle="modal" data-target={"#_" + props.idservico}>
            Estender anúncio
          </button>
        </div>
      </div>
    </>
  );
};

export default CardServicos;
