import React from 'react';
import './stylecadport.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import { useHistory } from 'react-router-dom';

const CadPortifolio = () => {
    const history = useHistory();

    async function cadastrar(event) {
        event.preventDefault();

        const url = "http://localhost/projetos/ProjetoRecode/Back-End/insertPortfolio.php";
        const form = new FormData(event.target);
        form.append('email', localStorage.getItem('login'));
        form.append('senha', localStorage.getItem('senha'));

        const envio = fetch(url, {
            method: "POST",
            body: form
        });
        const response = await envio;
        const res = await response.json();
        if (res.status == 1) {
            alert("Portfólio inserido com sucesso.");
            history.push("/hub");
        } else {
            alert("Algo deu errado")
        }
    }

    return (

        <div className="cadport">
            <div class="jumbotron jumbotron-fluid h-25 pt-4">
                <button class="image">
                    <img src={Voltar} alt="voltar" onClick={() => { history.goBack() }} />
                </button>
            </div>

            <div class="row container-fluid flex-column d-flex h-75 align-items-center justify-content-top paraisopolis">
                <div className='col-md-8'>
                    <div class="form bg-white w-100 px-3 pt-3">
                        <h3>Aqui vamos cadastrar seu portifólio!</h3>

                        <form className="form-cadport" id="cadastrar" onSubmit={cadastrar}>

                            <div class="form-group custom-control">
                                <label for="descricao">Capriche, ele será sua vitrine =D</label>
                                <input type="text" class="form-control" id="descricao" placeholder="Descreva aqui o que foi feito no serviço"
                                    name="descricao" required />
                            </div>


                            <div class="form-group mt-2 custom-control ">
                                <label for="url">Insira um link para a foto do serviço feito:</label>
                                <input type="url" class="form-control" id="url" name="imagem" placeholder="https://host.com.br/imagem" />
                            </div>


                        </form>

                    </div>
                    <footer className="footer d-flex e justify-content-end">

                        <button class="btn btn-auto" type="submit" form="cadastrar">Enviar</button>


                    </footer>
                </div>
            </div>
        </div>

    )

}

export default CadPortifolio;