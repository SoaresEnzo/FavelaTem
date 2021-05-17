import React from "react";
import { Link } from 'react-router-dom';

import mocabrx from '../../assets/imagens/mocaboloroxom.jpg';
import costura from '../../assets/imagens/costura.jpg';
import logo from "../../assets/imagens/logofavelatem.png";
import financas from "../../assets/imagens/financas.png";
import marketing from "../../assets/imagens/mktdigital.png";
import empreendedorismo from "../../assets/imagens/empreendedorismo2.png";

import './style.css';

import Menu from "../../componentes/Menu";



const Home = () => {
    const [pesquisa, setPesquisa] = React.useState("")
    const [dados, setDados] = React.useState([{ qntdPrestadores: 0, qntdComentarios: 0 }])
    function onChangeHandler(event) {
        setPesquisa(event.target.value)
    }

    React.useEffect(() => {
        async function getDados() {
            const url = "http://projetos/ProjetoRecode/Back-End/selectDadosPublicos.php";
            const req = fetch(url);
            const res = await req;
            const dados = await res.json();
            setDados(dados);
        }
        getDados();
    }, [])

    return (
        <main className="home">
            <Menu />
            <section className="container-fluid col p-0 secao1" >
                <div className="w-75">
                    <h1>o que você procura?</h1>
                    <div className="col-lg-6 pesquisar form-group">
                        <input className="pesquisa form-control" type='text' placeholder='Ex. Informática' name='buscar' value={pesquisa} onChange={onChangeHandler} />
                        <Link className='btn-buscar' type='button' to={{
                            pathname: "servicos",
                            search: "?&pesquisa=" + pesquisa
                        }}>Buscar
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container-fluid row secao2 mx-0 my-2">

                <div className='img-sec2 col-lg-6'>
                    <img src={mocabrx} alt="mulher com bolo" className="img-fluid" />
                </div>

                <div className='col-lg-6 dados-sec2'>
                    <div className='w-75 d-inline-block my-2'>
                        <h1 className="d-inline">{dados[0].qntdComentarios}</h1>
                        <p className="d-inline">clientes compartilharam suas experiências aqui</p>
                    </div>
                    <div className='w-75 d-inline-block my-2'>
                        <h1 className="d-inline">{dados[0].qntdPrestadores}</h1>
                        <p className="d-inline">profissionais registrados</p>
                    </div>
                    <div className='text-center'>
                        <h1>DEZENAS DE POSSIBILIDADES</h1>
                    </div>
                </div>

            </section>

            <section className='container-fluid row secao3'>

                <div className='col-lg-4 sec3-cont1 d-flex alignt-items-end justify-content-center'>
                    <h1>+ Negócios</h1>
                    <p>traga seu anúncio e comece a conquistar clientes também pela internet</p>
                    <Link to="/login"><input type="button" value="ANUNCIAR" /></Link>
                </div>

                <div className='img-sec3 '>
                    <img class="img-fluid" src={costura} alt="Oficina de costura" />
                </div>

            </section>

            <section className='container-fluid secao4'>
                <p>favela tem é uma plataforma de publicidade de serviços dos moradores de paraisópolis.</p>
            </section>

            <section className="container-fluid secao5">

                <div className="row img-sec5 ">
                    <img style={{ margin: 10 }} className='img-fluid cursos' src={financas} alt="Curso de finanças" />
                    <img style={{ margin: 10 }} className='img-fluid cursos' src={marketing} alt="Curso de marketing digital" />
                    <img style={{ margin: 10 }} className='img-fluid cursos' src={empreendedorismo} alt="Curso empreendedorismo" />
                </div>

                <div className='text-sec5'>
                    <p>Ao fazer o cadastro você passará por uma trilha
                    rápida de aprendizado que te ensinará não só a
                    usar a plataforma, mas também como fazer o
                    melhor anúncio!</p>
                </div>

            </section>

            <section className="container-fluid secao6 text-center">

                <p className='text1-sec6'>tudo isso, totalmente gratuito!!</p>

            </section>

            <section className='container-fluid  bg-btn-sec7'>

                <div className='btn-registro'>
                    <Link class="button" to="/registro" type="button">Cadastrar-se agora</Link>
                </div>

            </section>

            <section className="container-fluid row secao7 ">
                <div>
                    <img calssName="img-fluid" src={logo} alt="logotipo" />
                </div>

                <div ClassName="container-fluid text-sec7 text-center">
                    <p> O Favela Tem foi desenvolvido por um grupo de jovens,
                    com o propósito de divulgar os serviços de moradores de paraisópolis
                    que não possuem ponto comercial, para que aumentem suas carteiras de clientes através da internet.
                    Além de empoderar esses trabalhadores com um conteúdo educacional em forma de gamificação.
                    </p>
                </div>


                <div className="contato">
                    <p >Contato</p>

                    <p>Av. Hebe Camargo n°128b - Paraisópolis</p>
                </div>
            </section>

        </main>
    )
}

export default Home;

/*
<div className="home">
            <Menu />
            <main>
                <h1>o que você procura?</h1>
                <div>
                    <input type="text" placeholder="Digite aqui" name="buscar" value={pesquisa} onChange={onChangeHandler}></input>
                    <Link type="button" to={{
                        pathname: "/servicos",
                        search: "?&pesquisa="+pesquisa
                    }}>Buscar</Link>
                </div>
            </main>

            <section class="containerflex">
                <div class="item1">
                    <img />
                </div>
                <div class="item2">
                    <div id="frase">
                        <h1>{dados[0].qntdComentarios}</h1>
                        <h2>Clientes compartilharam suas exeperiências aqui</h2>
                    </div>
                    <div id="frase">
                        <h1>{dados[0].qntdPrestadores}</h1>
                        <h2 id="fraseA">profissionais registrados</h2>
                    </div>
                    <div id="fraseB">
                        <h1>Dezenas</h1>
                        <h2>de possibilidades</h2>
                    </div>
                </div>
            </section>
            <section class="containerflex2">
                <div class="item3">
                    <div id="frase2B">
                        <h1>+ Negócios</h1>
                    </div>
                    <div id="frase2">
                        <h2 id="frase2A">Traga seu anúncio <br /> para cá e comece a conquistar <br /> clientes também pela internet
                    </h2>
                    </div>
                    <div id="frase2B">
                        <input class="button" type="button" value="ANUNCIAR"></input>
                    </div>
                </div>
                <div>
                    <div class="item4">
                        <img />
                </div>
                </div>
            </section>
            <section>
            <div id="comofunciona">
                    <h2  id="item5">Favela tem é uma plataforma de publicidade de serviços dos moradores de paraisópolis. <a href name="qs"></a> </h2>
                </div>
            </section>
            <section class="containerflex3">
                <div class="cursos">
                    <img class="icone" src={empreendedorismo} alt=""/>
                    <img class="icone" src={financas} alt=""/>
                    <img class="icone" src={marketing} alt=""/>

                </div>
                <div>
                    <h2 id="item6">Ao fazer o cadastro você passará por um trilha rápida de aprendizado que te ensinará não só a
                    usar a plataforma, mas também a fazer o melhor anúncio do universo!</h2>
                </div>
                </section>
                <div id="item7">
                    <h1>Tudo isso, totalmente gratuito!!</h1>
                </div>
                <div id="botaocadastrar">
                    <Link class="button" to="/registro" type="button">Cadastrar-se agora</Link>
                </div>
                <section class="contanerflex4">
                    <div id="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <p id="fraseC">
                    o Favela Tem foi desenvolvido por um grupo de jovens, com o propósito de divulgar os serviços de moradores de paraisópolis que não possuem ponto comercial, para que aumentem suas carteiras de clientes através da internet. Além de empoderar esses trabalhadores com um conteúdo educacional em forma de gamificação.
                    </p>
                    <div>
                        <img src="" alt=""/>
                        <p id="fraseD">Contato</p>
                        <img src="" alt=""/>
                        <p id="fraseC">Av. Hebe Camargo n°128b - Paraisópolis</p>
                    </div>
                </section>
            </div>
    )
}

*/