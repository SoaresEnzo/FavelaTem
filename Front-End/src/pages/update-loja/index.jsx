import React from 'react';
import './style.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';
import { useHistory } from 'react-router-dom';

const Loja = () => {
    const history = useHistory();
    const [dados, setDados] = React.useState({prestador: []})
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
        console.log(dados)

    }, [])

    async function updateLoja(event) {
        event.preventDefault()
        console.log(event);

        const url = "http://projetos/ProjetoRecode/Back-End/updatePrestador.php";
        const form = new FormData(event.target);
        form.append('email', localStorage.getItem('login'))
        form.append('senha', localStorage.getItem('senha'))
        const envio = fetch(url, {
            method: "POST",
            body: form
        })
        const response = await envio;
        const res = await response.json();
        console.log(res);
        if (res.status == 1) {
            alert("Seus dados foram atualizados, você será enviado ao seu hub.");
            history.push("/hub")

        } else {
            alert("Algo deu errado, cheque se os dados foram inseridos corretamente")
        }
    }
    if (dados.prestador[0] != null) {
        return (

            <div className="updateloja">
                <div class="jumbotron jumbotron-fluid py-5">
                    <div class="image">
                        <img src={Voltar} alt="voltar" onClick={() => { history.goBack() }} />
                    </div>
                    <h3 class="title">Mantenha seus dados atualizados:</h3>
                </div>

                <div class="row d-flex justify-content-center">

                    <div class="h3 col-md-8 col-lg-6 form bg-white form-inteiro">

                        <div class="box.int p-3">
                            <h3>Seus dados:</h3>
                            <hr />

                            <form onSubmit={updateLoja} id="updtloja">
                                <label for="nome">Seu nome ou nome fantasia:</label>
                                <input type="text" class="form-control" id="nome" name="nomefantasia" placeholder="João das Couves" defaultValue={dados.prestador[0].nome_fantasia} />

                                <div class="form-group">
                                    <label for="telefone">Telefone:</label>
                                    <input type="text" class="form-control" name="telefone" placeholder="11944445555" defaultValue={dados.prestador[0].telefone} />
                                </div>

                                <div className="form-row">
                                    <div class="form-group col-md-9">
                                        <label for="address">Endereço:</label>
                                        <input type="text" name="rua" class="form-control" id="address" placeholder="Rua do Meio" defaultValue={dados.prestador[0].logradouro} />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="address">Número:</label>
                                        <input type="text" name="numero" class="form-control" id="address" placeholder="1000" defaultValue={dados.prestador[0].numero} />
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputEstado" >Estado</label>
                                        <select id="inputEstado" name="estado" class="form-control" defaultValue={dados.prestador[0].estado}>
                                            <option value="SP" >São Paulo</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="inputCity">Cidade</label>
                                        <select name="cidade" class="form-control" id="inputCity" defaultValue={dados.prestador[0].cidade}>
                                            <option value="SP" >São Paulo</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="bairro">Bairro</label>
                                        <select name="bairro" class="form-control" id="bairro" defaultValue={dados.prestador[0].bairro} >
                                            <option value="Paraisópolis" >Paraisópolis</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputCEP">CEP</label>
                                        <input type="text" name="cep" class="form-control" id="inputCEP" placeholder="00000000" defaultValue={dados.prestador[0].cep} />
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="inputIMG">Imagem</label>
                                        <input type="url" name="imagem" class="form-control" id="inputIMG" placeholder="Link da sua foto" defaultValue={dados.prestador[0].imagem} />
                                    </div>

                                </div>


                                <div class="form-group">
                                    <label for="textarea">Descreva seu trabalho em geral,públicos que atende, etc:</label>
                                    <textarea class="form-control" id="textarea" rows="3" name="descricao" defaultValue={dados.prestador[0].descricao_loja} ></textarea>
                                </div>
                            </form>
                        </div>

                        <div class="footer">
                            <footer>
                                <div class="alert">
                                    <img src={Alerta} alt="alert" />
                                    <p className="pl-2 m-0">Importante!<br />Preencha todos os dados.</p>
                                </div>

                                <div>
                                    <button type="submit" class="btn" form="updtloja">Atualizar</button>
                                </div>
                            </footer>

                        </div>
                    </div>
                </div>

            </div>

        )
    } else {
        return (
            <h1>Buscando dados</h1>
        )
    }
}

export default Loja;
