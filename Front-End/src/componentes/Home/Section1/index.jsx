import React from 'react';
import { Link } from 'react-router-dom';
import './sec1Style.css';

import Costura from '../../../assets/imagens/costura.jpg';
import empreendedorismo from '../../../assets/imagens/empreendedorismo2.png';
import marketing from '../../../assets/imagens/mktdigital.png';
import financas from '../../../assets/imagens/financas.png';

const Section1 = () => {
    const [pesquisa, setPesquisa] = React.useState("")
    const [dados, setDados] = React.useState([{ qntdPrestadores: 0, qntdComentarios: 0 }])
    function onChangeHandler(event) {
        setPesquisa(event.target.value)
    }

    React.useEffect(()=>{
        async function getDados(){
            const url = "http://projetos/ProjetoRecode/Back-End/selectDadosPublicos.php";
            const req = fetch(url);
            const res = await req;
            const dados = await res.json();
            setDados(dados);
        }
        getDados();
    },[])

    return (
        <main>
            <Menu />
            <section1 className='secao1'>
                <h1>o que você procura?</h1>
                <input type='text' placeholder='Ex. Informática' name='buscar' value={pesquisa} onChange={onChangeHandler} />
                <Link type='button' to={{
                    pathname: "serviços",
                    search: "?&pesquisar=" + pesquisa
                }}>Buscar</Link>
            </section1>
            <section2>

                <div className='img-sec2'>
                    <img />
                </div>

                <div>
                    <div>
                        <h1>{dados[0].qntdComentarios}</h1>
                        <p>clientes compartilharam suas experiências aqui</p>
                    </div>
                    <div>
                        <h1>{dados[0].qntdPrestadores}</h1>
                        <p>profissionais registrados</p>
                    </div>
                    <div>
                        <p>dezenas</p>
                        <p>de possibilidades</p>
                    </div>
                </div>
            </section2>
            <section3>
                <div>
                    <p>+ negócios</p>
                    <p>traga seu anúncio para cá e comece a conquistar clientes também pela internet</p>
                    <input type="button" value="ANÚNCIAR"/>
                </div>               

                <div>
                    <img src={Costura} alt=""/>
                </div>
            </section3>
            <section4>
                <p>favela tem é uma plataforma de publicidades de serviçocs dos moradores de paraisópolis.</p>
            </section4>
            <section5>
                <div>
                    <img src={financas} alt="Curso de finanças"/>
                    <img src={marketing}alt="Curso de marketing digital" />
                    <img src={empreendedorismo} alt="Curso empreendedorismo"/>
                </div>
                <p>Ao fazer o cadastro você passará por uma trilha rápida de aprendizado que te ensinará não só a usar a plataforma, mas como também a fazer o melhor anúncio!</p>
            </section5>
            <section6>
                <p>tudo isso, totalmente gratuito!!</p>
                <div>
                    <Link class="button" to="/registro" type="button">Cadastrar-se agora</Link>
                </div>
                <div>
                    <img src={logo} alt="logotipo"/>
                </div>
                <p> o Favela Tem foi desenvolvido por um grupo de jovens, 
                    com o propósito de divulgar os serviços de moradores de paraisópolis
                    que não possuem ponto comercial, para que aumentem suas carteiras de clientes através da internet.
                    Além de empoderar esses trabalhadores com um conteúdo educacional em forma de gamificação.
                </p>

                <div>
                    <p id="fraseD">Contato</p>
                    
                    <p id="fraseC">Av. Hebe Camargo n°128b - Paraisópolis</p>
                </div>
            </section6>

        </main>

    )
}

export default Section1;