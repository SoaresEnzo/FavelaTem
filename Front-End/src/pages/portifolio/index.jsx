import React from "react";
import "./style.css";
import carrosselVazio from '../../assets/imagens/portfolio-vazio.jpg';
import Menu from '../../componentes/Menu';
import ImagemPlaceholder from '../../assets/imagens/image-placeholder.png';
import PerfilPlaceholder from '../../assets/imagens/perfil-placeholder.png';


const Portifolio = () => {
    const [dados, setDados] = React.useState([])
    const [portfolio, setPortfolio] = React.useState([]);
    const [categs, setCategs] = React.useState([]);
    const [comments, setComments] = React.useState([]);

    function showForm() {
        var comentario = document.getElementById('toShow');
        comentario.hidden = !comentario.hidden;

    }

    function getInfo() {
        const queryString = window.location.href;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        return id;
    }

    React.useEffect(async () => {
        const id = getInfo();
        const url = `http://localhost/projetos/ProjetoRecode/Back-End/selectPrestador.php?id=${id}`;
        const envio = fetch(url);
        const resposta = await envio;
        const res = await resposta.json()
        setDados(res)
    }, [])

    React.useEffect(async () => {
        const id = getInfo();
        const url = `http://projetos/ProjetoRecode/Back-End/selectPortfoliosById.php?id=${id}`;
        const envio = fetch(url);
        const resposta = await envio;
        const res = await resposta.json()
        setPortfolio(res)
    }, [])

    React.useEffect(async () => {
        const id = getInfo();
        const url = `http://projetos/ProjetoRecode/Back-End/selectCategoriasPrestador.php?id=${id}`;
        const envio = fetch(url);
        const resposta = await envio;
        const res = await resposta.json()
        setCategs(res)
    }, [])

    React.useEffect(async () => {
        const id = getInfo();
        const url = `http://projetos/ProjetoRecode/Back-End/selectComments.php?id=${id}`;
        const envio = fetch(url);
        const resposta = await envio;
        const res = await resposta.json()
        setComments(res)
    }, [])

    async function comentar(event) {
        event.preventDefault();
        const id = getInfo();
        const url = "http://projetos/ProjetoRecode/Back-End/insertComment.php";
        const form = new FormData(event.target);
        form.append('email', localStorage.getItem('login'));
        form.append('senha', localStorage.getItem('senha'));
        form.append('idloja', id);

        const envio = fetch(url, {
            method: "POST",
            body: form
        });
        const response = await envio;
        const res = await response.json();
        if (res.status == 1) {
            alert("Comentário inserido com sucesso.");
            // history.push("/hub");
        } else {
            alert("Algo deu errado");
        }
    }


    if (dados[0] != null) {

        return (

            <div className="portfolio">
                <header className="header">
                    <Menu />
                </header>
                <section class="section1 container-fluid">

                    <div class="tesoura">
                        <img src={dados[0].imagem} className="img-fluid rounded-circle" alt="logo" onError={(e) => { e.target.onerror = null; e.target.src = PerfilPlaceholder }} />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div class="primeiro col-md-8 col-sm-12">
                                <h4 class="topo"> {dados[0].nome_fantasia}</h4>
                                <div className="corpo descricao"> <p>{dados[0].descricao_loja}</p></div>
                            </div>
                        </div>
                        <div class="segundo row my-2 d-flex justify-content-center align-items-stretch">
                            <div class="one col-md-4 col-sm-6 p-0">
                                <h4 class="topo"> Nosso endereço </h4>
                                <div className="corpo">
                                    <p>{dados[0].logradouro + ", " + dados[0].numero}</p>
                                    <p>{dados[0].cidade + ", " + dados[0].bairro}</p>
                                </div>

                            </div>
                            <div class="one col-md-4 col-sm-6 p-0">
                                <h4 class="topo"> Contato </h4>
                                <div className="corpo">
                                    <p>{dados[0].email}</p>
                                    <button className="btn btn-dark">{dados[0].telefone}</button>
                                </div>
                            </div>
                        </div>
                        <div class="terceiro container d-flex justify-content-center">

                            {categs.map((categ) => {
                                return (
                                    <div class="two my-2 mx-1">
                                        <p class="p-servico">{categ.nome_subcategoria}</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
                <div class="quarto container d-flex align-items-center flex-column">
                    <div class="um1">
                        <h3>Portfólio</h3>
                    </div>

                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">

                        <div class="carousel-inner">

                            {portfolio.length > 0 ? portfolio.map((port) => {
                                if (port === portfolio[0]) {
                                    return (
                                        <div class="carousel-item active">
                                            <img src={port.imagem} onError={(e)=>{e.target.onerror = null; e.target.src=ImagemPlaceholder}} class="d-block w-100 img-fluid" alt="..." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <p>{port.descricao}</p>
                                            </div>
                                        </div>)
                                } else {
                                    return (<div class="carousel-item">
                                        <img src={port.imagem} onError={(e)=>{e.target.onerror = null; e.target.src=ImagemPlaceholder}} class="d-block w-100 img-fluid" alt="..." />
                                        <div class="carousel-caption d-none d-md-block">
                                            <p>{port.descricao}</p>
                                        </div>
                                    </div>)
                                }
                            }) : <div class="carousel-item active">
                                    <img src={carrosselVazio} class="d-block w-100 img-fluid" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <p>Ainda não há serviços aqui</p>
                                    </div>
                                </div>
                            }
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <section class="section3 container py-2">
                    <div id="comenttitulo">
                        <h2>Comentários</h2>
                        {comments.length > 0 ? comments.map((coment) => {
                            return (

                                <div class="coment">
                                    <p>{coment.nome}</p>
                                    <p>{coment.criacao_comment}</p>
                                    <p>{coment.comentario}</p>
                                </div>

                            )
                        }
                        ) : console.log("algo")
                        }
                    </div>

                    <div class="test2">
                        <button type="button" onClick={showForm}>+Comentarios</button>
                    </div>


                    <div id="toShow" hidden>
                        <p>Comentarios:</p>
                        <div class="coment">
                            <p>Escreva seu comentário abaixo: </p>
                            <form onSubmit={comentar} id="comentario">
                                <textarea type="text" id="" name='comentario' placeholder="Digite aqui seu comentário!" rows="4" cols="50" className="w-100" />

                                <div class="test2">
                                    <button type="submit" form="comentario">Enviar comentario</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    } else {
        return (<h1>Buscando dados, ou o ID do prestador não foi inserido</h1>)
    }
}
export default Portifolio;