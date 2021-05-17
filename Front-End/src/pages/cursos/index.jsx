import React from "react";

import "./style.css";

import Menu from "../../componentes/Menu";
import { Link } from "react-router-dom";
import Apoio from "../../componentes/Apoio";

import Cursos from "../../componentes/Cursos";

import ImagemPlaceholder from '../../assets/imagens/perfil-placeholder.png'

const Hub = () => {
    const [dados, setDados] = React.useState({ prestador: [] })
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

    function getInfo() {
        const queryString = window.location.href;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        return id;
    }

    if (dados.prestador[0] != null) {
        return (
            <div className="curso">
                <div className="container-fluid px-0">
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
                            <div className="cursos">
                                <div className="container-fluid d-flex align-items-center">

                                    <Cursos id={getInfo()} />

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
