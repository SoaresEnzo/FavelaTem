import React from "react";
import { Link, useHistory } from "react-router-dom";

import Menu from "../../componentes/Menu";

import "./style.css";

import $ from 'jquery';

import ImagemPlaceholder from '../../assets/imagens/perfil-placeholder.png';

import CardMyServicos from '../../componentes/card-myservicos';

const MyServicos = () => {
    const [render,setRender] = React.useState(false);
    const [dados, setDados] = React.useState({ prestador: [] });
    const [servicos, setServicos] = React.useState([]);
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
        console.log(res)
    }, [render])

    React.useEffect(async () => {
        const url = "http://localhost/projetos/ProjetoRecode/Back-End/selectMyServicos.php";
        const form = new FormData();
        form.append('email', localStorage.getItem('login'))
        form.append('senha', localStorage.getItem('senha'))

        const busca = fetch(url,{
            method: "POST",
            body: form
        });
        const resposta = await busca;
        const dados = await resposta.json();
        setServicos(dados);
    }, [render])


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
                                    <img src={dados.prestador[0].imagem} onError={(e) => { e.target.onerror = null; e.target.src = ImagemPlaceholder }} className="rounded-circle" alt="foto usuario" />
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

                        <div className="conteudo col-lg-10 col-md-9 px-0 mx-0 d-flex justify-content-start">
                            <h2>Meus Anúncios</h2>
                            <div className="group-servicos flex-wrap d-flex justify-content-center">
                                {servicos.map((servico) => {
                                    return (
                                        <CardMyServicos cartao={servico.pagamento_cartao} dinheiro={servico.pagamento_dinheiro} atenddomicilio={servico.atendimento_domicilio} atendlocal={servico.atendimento_local} imgModal={servico.imagem_servico} local={servico.logradouro + ", " + servico.numero} nome={servico.nome_fantasia} imgpessoa={servico.imagem} imgcard={servico.imagem_servico} descricao={servico.descricao_servico} id={servico.idcadastrolojaprestador} idservico={servico.idservicos} setState={setRender} state={render} categ={servico.idcategorias_servico} subcateg={servico.idsubcategorias} start={servico.inicio_atendimento} end={servico.fim_atendimento} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<h1>Buscando dados</h1>)
    };
};

export default MyServicos;
