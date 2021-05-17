import React from 'react';
import './stylecontato.css';

import Voltar from '../../assets/imagens/icons8-voltar-26.png';
import Alerta from '../../assets/imagens/alert.png';
import { useHistory } from 'react-router-dom';

const Contato = () => {
    const history= useHistory();
    async function regCont(event) {
        event.preventDefault()
        // console.log(event);
 
        const url = "http://localhost/projetos/ProjetoRecode/Back-End/registerContato.php";
        const form = new FormData(event.target);
        const envio = fetch(url, {
            method: "POST",
            body: form
        })
        const response = await envio;
        const res = await response.json();

        //Verificar resposta e voltar para página anterior
        if (res.status === 1){
            history.goBack()
        }else {
            alert("Por favor, preencha todos campos para enviar sua mensagem")
        }
    }

    return (

        <div className="contato">

              <div class="jumbotron jumbotron-fluid">
                <div class="image">
                    <img src={Voltar} alt="voltar" onClick={()=>{history.goBack()}}/>
                </div>
                <h3 class="title">Alguma dúvida, comentário ou sugestão?<br /> Conte para gente =D</h3>
            </div>
            <div class="row d-flex justify-content-center">

                <div class="h3 col-6 form bg-transparent">

                    <div class="box.int">

                        <form  id="regCont" onSubmit={regCont}>  
                            <div class="form-group">
                                <label for="nome">Seu nome:</label>
                                <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" name="nome" />
                            </div>
                            <div class="form-group">
                                <label for="email">Seu e-mail:</label>
                                <input type="text" class="form-control" id="email" placeholder="Digite seu e-mail " name="email_contato"/>
                            </div>

                            <div class="form-group">
                                <label for="textarea">Sua mensagem:</label>
                                <textarea class="form-control" id="textarea" rows="3"placeholder="Deixe sua mensagem" name="msg"></textarea>
                            </div>
                        </form>
                            <div class="footer">
                                <footer>
                                    <div>
                                        <button  class="btn" type="submit" form="regCont">Entrar</button>
                                    </div>
                                </footer>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contato;