import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';

const Adminlogin = () => {
    const history=useHistory();
    async function logar (event) {
        event.preventDefault()
        console.log (event);

        const url = "http://localhost/projetos/ProjetoRecode/Back-End/loginAdmin.php"
        const form = new FormData (event.target)
        const envio = fetch (url, {method:"POST", body:form})
        const response = await envio
        const res = await response.json()
        console.log (res); 
        if (res.status==1) {
            localStorage.setItem("login", res.body[0].email)
            localStorage.setItem("senha", res.body[0].senha)
            localStorage.setItem("idprestador", res.body[ 0 ].idcadastrolojaprestador)
            localStorage.setItem("idadmin", res.body[0].idcadastroadmin)
            localStorage.setItem("nome", res.body[0].nome)
            localStorage.setItem("imagem", res.body[0].imagem)
            history.push("/admin")
        }else {
            alert("Não foi possível logar")
        }
    }

    return (

        <div className="login">
            <div class="jumbotron jumbotron-fluid h-25 pt-4">
                <button class="image">
                    <img src={Voltar} alt="voltar" onClick={()=>{history.goBack()}}/>
                </button>
            </div>

            <div class="row container-fluid flex-column d-flex h-75 align-items-center justify-content-top paraisopolis">
                <div className='col-sm-8'>
                    <div class="form bg-white w-100 px-3 pt-3">
                        <h3>Entre como administrador</h3>
                        <div class="link">
                                Ainda não tem uma conta? Converse com o DBA e crie uma.
                        </div>
                        <hr />
                        <form className="form-log" onSubmit={logar} id="logar">
                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="email" class="form-control" id="email" placeholder="Digite aqui seu e-mail" name="email" />
                            </div>
                            <div class="form-group">
                                <label for="password">Senha:</label>
                                <input type="password" class="form-control" id="password" placeholder="Digite sua senha" name="senha" />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="senha" />
                                <label class="form-check-label" for="senha">Lembrar sua senha</label>
                            </div>
                        </form>
                        <div class="link">
                            <a href="#">Esqueceu sua senha?</a>
                        </div>
                    </div>
                    <footer className="footer d-flex e justify-content-end">

                        <button class="btn btn-auto" type="submit" form="logar">Entrar</button>


                    </footer>
                </div>
            </div>
        </div>

    )
}

export default Adminlogin;