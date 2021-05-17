import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/imagens/logofavelatem.png';
import { HashLink } from 'react-router-hash-link';


const Menu = () => {
    let history = useHistory();
    function sair() {
        localStorage.removeItem("login");
        localStorage.removeItem("senha");
        localStorage.removeItem("idprestador");
        localStorage.removeItem("nome");
        localStorage.removeItem("idadmin");
        localStorage.removeItem("imagem");
        history.push("/")
    }

    async function apagarUser() {
        const url = "http://projetos/ProjetoRecode/Back-End/deleteUser.php";
        let form = new FormData();
        form.append("email", localStorage.getItem('login'));
        form.append("senha", localStorage.getItem('senha'));

        const envio = fetch(url, {
            method: "POST",
            body: form
        })
        const resposta = await envio;
        const dados = await resposta.json();
        if (dados.status == 1) {
            alert("Conta deletada com sucesso");
            sair();
        } else {
            alert("Houve algum erro, por favor tente mais tarde");
        }

    }

    if (localStorage.getItem('login') !== "null" && localStorage.getItem('idprestador') != "null" && localStorage.getItem('idadmin') === "undefined") {
        //Prestador de servicos logado
        return (
            <>
                <div class="modal fade" id="apagarUserprestador" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Apagar conta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Tem certeza que quer apagar sua conta? Esta ação é definitiva e irreversível.
      </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => { apagarUser() }}>Apagar conta</button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="FavelaTem" /> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                               {/* <Link className="nav-link" to="/">Como funciona?</Link> */}
                               <HashLink className="nav-link" to="/#comofunciona">Como funciona?</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato">Alguma dúvida ou sugestão?</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Olá, {localStorage.getItem("nome")}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item text-white bg-info" to="/servicos">Encontrar um serviço</Link>
                                    <Link className="dropdown-item text-white bg-info" to="/hub">Seu Hub</Link>
                                    <Link className="dropdown-item text-white bg-danger" data-toggle="modal" data-target="#apagarUserprestador" href="#">Apagar sua conta</Link>
                                    <Link className="dropdown-item" href="#" onClick={sair}>Sair</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )

    } else if (localStorage.getItem('login') !== "null" && localStorage.getItem('idprestador') === "null" && localStorage.getItem('idadmin') === "undefined") {
        //User básico logado
        return (
            <>
                <div class="modal fade" id="apagarUserprestador" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Apagar conta</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Tem certeza que quer apagar sua conta? Esta ação é definitiva e irreversível.
      </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => { apagarUser() }}>Apagar conta</button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="FavelaTem" /> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                  {/* <Link className="nav-link" to="/">Como funciona?</Link> */}
                                  <HashLink className="nav-link" to="/#comofunciona">Como funciona?</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato">Alguma dúvida ou sugestão?</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Olá, {localStorage.getItem("nome")}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item text-white bg-info" to="/servicos">Encontrar um serviço</Link>
                                    <Link className="dropdown-item text-white bg-info" to="/loja">Publique seu trabalho</Link>
                                    <Link className="dropdown-item text-white bg-danger" data-toggle="modal" data-target="#apagarUserprestador" href="#" onClick={apagarUser}>Apagar sua conta</Link>
                                    <Link className="dropdown-item" href="#" onClick={sair}>Sair</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    } else if (localStorage.getItem('login') !== "null" && localStorage.getItem('idprestador') === "undefined" && localStorage.getItem('idadmin') !== "undefined") {
        // Admin logado
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link className="navbar-brand" to="/"><img src={Logo} alt="FavelaTem" /> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                            <HashLink className="nav-link" to="/#comofunciona">Como funciona?</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contato">Alguma dúvida ou sugestão?</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Olá, {localStorage.getItem("nome")}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item text-white bg-info" to="/">FavelaTem</Link>
                                    <Link className="dropdown-item text-white bg-info" to="/servicos">Serviços</Link>
                                    <Link className="dropdown-item text-white bg-info" to="/admin">Seu Hub</Link>
                                    <Link className="dropdown-item" href="#" onClick={sair}>Sair</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    } else {
        //Não está logado
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="navbar-brand" to="/"><img src={Logo} alt="FavelaTem" /> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <Link className="nav-link" to="/">Como funciona?</Link> */}
                        <HashLink className="nav-link" to="/#comofunciona">Como funciona?</HashLink>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Alguma dúvida ou sugestão?</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Do que você precisa?
                    </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/servicos">Encontrar um serviço</Link>
                            <Link className="dropdown-item" to="/login">Fazer Login</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>);
    }
}
export default Menu;