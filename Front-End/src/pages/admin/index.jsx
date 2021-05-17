import React, { useEffect } from "react";
import Chart from 'chart.js';

import "./styleadmin.css";

import Menu from "../../componentes/Menu";
import { Link } from "react-router-dom";

import ImagemPlaceholder from '../../assets/imagens/perfil-placeholder.png';

import { useHistory } from 'react-router-dom';

const Admin = () => {
    const [autorizacao, setAutorizacao] = React.useState(false);
    const [dados, setDados] = React.useState({
        churn: [""], proporcao: [""],
        cursosFeitos: { qntsAcertos: 0, qntdPerguntas: 0 },
        mediaAnuncios: [{ qntdServicos: 0, qntdPrestadores: 0 }],
        recomendacoes: [{ recomendacoesPositivas: 0, total: 0 }],
        aumentoRenda: [{ total: 0, aumentaram: 0 }]
    });
    const history = useHistory();

    useEffect(() => {
        async function getDadosMonitoramento() {
            const url = "http://projetos/ProjetoRecode/Back-End/selectDadosMonitoramento.php";
            const busca = fetch(url);
            const retorno = await busca;
            const dados = await retorno.json();
            setDados(dados);
        }
        getDadosMonitoramento();
    }, [])

    useEffect(() => {
        if (autorizacao === true) {
            var ctx = document.getElementById('proporcao').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Usuários Básicos', 'Prestadores de serviços'],
                    datasets: [{
                        label: '',
                        data: [dados.proporcao[0].todosCadastros - dados.proporcao[0].prestadores, dados.proporcao[0].prestadores],
                        backgroundColor: [
                            'rgba(255, 77, 0, 0.3)',
                            'rgba(28, 168, 201, 0.3)'

                        ],
                        borderColor: [
                            'rgba(255, 77, 0, 1)',
                            'rgba(28, 168, 201, 1)'

                        ],
                        borderWidth: 1
                    }]
                }
            });
        }
    }, [dados, autorizacao])

    useEffect(() => {
        if (autorizacao === true) {
            var ctx = document.getElementById('churn').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Prestadores que continuaram', 'Prestadores que saíram'],
                    datasets: [{
                        label: '',
                        data: [(dados.churn[0].clientelaInicial - dados.churn[0].saidaClientes), dados.churn[0].saidaClientes],
                        backgroundColor: [
                            'rgba(28, 168, 201, 0.3)',
                            'rgba(255, 77, 0, 0.3)'
                        ],
                        borderColor: [
                            'rgba(28, 168, 201, 1)',
                            'rgba(255, 77, 0, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });
        }
    }, [dados, autorizacao])

    useEffect(() => {
        async function validaLogin() {
            const url = "http://localhost/projetos/ProjetoRecode/Back-End/loginAdmin.php";
            const form = new FormData();
            form.append("email", localStorage.getItem("login"))
            form.append("senha", localStorage.getItem("senha"))

            const envio = fetch(url, {
                method: "POST",
                body: form
            })
            const response = await envio;
            const res = await response.json();
            console.log(res);
            if (res.status === 0) {
                alert("Faça login para acessar os dados");
                history.push("adminlogin")
            } else {
                setAutorizacao(true);
            }
        };
        validaLogin();
    }, []);

    if (autorizacao === true) {
        return (
            <div className="admin">
                <div className="container-fluid">
                    <div className="section-1">
                        <div className="bloco-1">
                            <Menu />
                        </div>
                    </div>
                    <div className="section-principal row">
                        <div className="section-user col-lg-2 col-md-3 w-100">
                            <aside className="inf-user">
                                <div className="foto-user">
                                    <img src={localStorage.getItem("imagem")} onError={(e) => { e.target.onerror = null; e.target.src = ImagemPlaceholder }} className="rounded-circle" alt="foto usuario" />
                                </div>
                                <div className="name-user text-center">
                                    <p>{localStorage.getItem("nome")}</p>
                                </div>

                                <div className="btns">
                                    <Link className="btn">Profissionais Cadastrados</Link>
                                    <Link className="btn">Usuários Cadastrados</Link>
                                    <Link className="btn">Índice de exclusões</Link>
                                </div>


                            </aside>
                        </div>
                        <div className="col-lg-8 col-md-6 p-0 d-flex flex-wrap">
                            <div className="parentCanvas">
                                <canvas id="proporcao" width="100" height="100"></canvas>
                            </div>
                            <div className="parentCanvas">
                                <canvas id="churn" width="100" height="100"></canvas>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="dadoNumero">
                                <h1>{dados.proporcao[0].todosCadastros}</h1>
                                <small>Usuários Totais</small>
                            </div>

                            <div className="dadoNumero">
                                <h1>{(dados.mediaAnuncios[0].qntdServicos / dados.mediaAnuncios[0].qntdPrestadores).toFixed(2)}</h1>
                                <small>Anúncios/Prestador</small>
                            </div>

                            <div className="dadoNumero">
                                <h1>{(dados.cursosFeitos.qntsAcertos / dados.proporcao[0].prestadores * 100).toFixed(2)}%</h1>
                                <small>Terminaram todo o curso</small>
                            </div>

                            <div className="dadoNumero">
                                <h1>{(dados.churn[0].saidaClientes / dados.churn[0].clientelaInicial * 100).toFixed(2)}%</h1>
                                <small>Rotatividade de prestadores</small>
                            </div>

                            <div className="dadoNumero">
                                <h1>{(dados.recomendacoes[0].recomendacoesPositivas / dados.recomendacoes[0].total * 100).toFixed(2)}%</h1>
                                <small>Recomendam a plataforma</small>
                            </div>
                            <div className="dadoNumero">
                                <h1>{(dados.aumentoRenda[0].aumentaram / dados.aumentoRenda[0].total * 100).toFixed(2)}%</h1>
                                <small>Viram aumento na renda</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    } else {
        return (
            <h1>Autenticando... </h1>
        )
    }

}
export default Admin;