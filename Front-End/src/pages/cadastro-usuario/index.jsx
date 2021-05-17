import React from 'react';
import './style.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';
import { useHistory } from 'react-router-dom';

const Registro = () => {

    const history = useHistory();
    async function cadUser(event) {
        event.preventDefault()

        if (event.target[4].value === event.target[3].value) {
            const url = "http://localhost/projetos/ProjetoRecode/Back-End/registerUser.php";
            const form = new FormData(event.target);
            const envio = fetch(url, {
                method: "POST",
                body: form
            })
            const response = await envio;
            const res = await response.json();
            if (res.status == 1) {
                alert("Registro bem sucedido, você será redirecionado ao login.");
                history.push("/login")
            } else {
                alert("Algo deu errado, digite um senha com pelo menos 6 caracteres e cheque se as informações estão certas.")
            }
        } else {
            alert("A senha e a confirmação devem ser iguais")
        }
    }

    return (

        <div className='cadastro'>
            <header className='jumbotron jumbotron-fluid pt-4 h-25 section-1'>
                <button><img src={Voltar} alt="botão para voltar" onClick={() => { history.goBack() }} /></button>
                <p>Cadastre-se no Favela Tem e encontre um profissional para sua necessidade.</p>

            </header>
            <main className='row d-flex justify-content-center principal m-0'>
                <div className="col-lg-6">
                    <div className="h3 form bg-white borda-formulario" >
                        <form id='cadUser' onSubmit={cadUser}>
                            <div className='formulario'>
                                <h3>Insira seu dados abaixo</h3>
                                <hr />

                                <div className="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="nome">Nome:</label>
                                        <input type="text" className="form-control" id="nome" placeholder="Digite seu nome"
                                            name="nome" required />
                                    </div>
                                    <div class="form-group col-md-6">

                                        <label for="nome">Sobrenome:</label>
                                        <input type="text" className="form-control" id="nome" placeholder="Digite seu sobrenome"
                                            name="sobrenome" required />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email">Email:</label>
                                    <input type="email" className="form-control" name="email" id="email"
                                        placeholder="Digite seu email" />
                                </div>

                                <div class="form-group">
                                    <label for="password">Senha:</label>
                                    <input type="password" className="form-control" name='senha' id='senha'
                                        placeholder="Crie sua senha" />
                                </div>

                                <div class="form-group">
                                    <label for='confpassword'>Confirme sua senha:</label>
                                    <input type="password" className='form-control' name="confsenha" id="confsenha" placeholder="Confirme sua senha" />
                                </div>


                                <div class="form-group">
                                    <input type="checkbox" className="checkbox" name="checkbox" id="checkbox" required />
                                    <label for="checkbox" className="form-check-label">Li e concordo com os termos de uso e a Política de Privacidade!</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <footer className="footer jumbotron jumbotron-fluid d-flex align-items-center">
                        <div className='alerta d-flex align-items-center justify-content-start'>
                            <img src={Alerta} alt='atenção' />
                            <p className="pl-2 m-0" >Atenção <br /> Preencha todos os dados!</p>
                        </div>
                        <div className="cadastrar btn m-0">
                            <input type="submit" form="cadUser" value="Cadastrar" />
                        </div>
                    </footer>
                </div>
            </main>
        </div>

    )

}
export default Registro;