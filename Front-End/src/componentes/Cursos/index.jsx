import React from 'react';

const Cursos = (props) => {

    const [curso, setCurso] = React.useState({ perguntas: [], respostas: [] })
    React.useEffect(async () => {
        const url = `http://projetos/ProjetoRecode/Back-End/selectCursos.php?id=${props.id}`;
        const envio = fetch(url);
        const response = await envio;
        const res = await response.json();
        setCurso(res)
        console.log(res);
    }, [])

    async function inserirResposta(event) {
        event.preventDefault();
        const url = "http://projetos/ProjetoRecode/Back-End/insertRespostas.php";

        const form = new FormData(event.target);
        form.append('email', localStorage.getItem('login'));
        form.append('senha', localStorage.getItem('senha'));

        const envio = fetch(url, {
            method: "POST",
            body: form
        });
        const response = await envio;
        const res = await response.json();
        console.log(res);
        if (res.status == 0) {
            alert(res.erro)
        }
        if (res.constructor === Array) {
            if (res.every((e) => e === false)) {
                return alert("Você já respondeu estas perguntas, faça outro curso.")
            }
            let arrAcertos = [];
            for (let i = 0; i < res.length; i++) {
                if (res[i].veracidade === "1") {
                    arrAcertos.push(res[i].veracidade)
                }
            }

            alert(`Você acertou ${arrAcertos.length} perguntas de um total de ${res.length} perguntas.`)
        }
    }

    return (
        <div>
            <div className="container-fluid w-75 d-flex justify-content-start flex-column">
                <form onSubmit={inserirResposta}>
                    {curso['perguntas'].map((perguntas) => {
                        if (perguntas.conteudo !== "") {
                            return (
                                <>
                                    <div className="d-flex align-items-center justify-content-center w-100">
                                        <iframe width="420" height="315" src={perguntas.conteudo} />
                                    </div>
                                    <div>
                                        <h4>{perguntas.pegunta}   </h4>
                                        {curso['respostas'].map((resposta) => {
                                            if (resposta.fk_pergunta === perguntas.idperguntas) {
                                                return (
                                                    <div className="form-check">
                                                        <input type="radio" name={`resposta[${perguntas.idperguntas}][0]`} className="form-check-input" id={`radio${resposta.idrespostas_padrao}`} value={resposta.idrespostas_padrao} />
                                                        <label htmlFor={`radio${resposta.idrespostas_padrao}`} className="form-check-label">{resposta.resposta}</label>
                                                    </div>
                                                )
                                            }

                                        })}
                                        <input type="text" value={perguntas.idperguntas} name={`resposta[${perguntas.idperguntas}][1]`} hidden />
                                    </div>
                                </>
                            )
                        } else {
                            return (
                                <div>
                                    <h4>{perguntas.pegunta}   </h4>
                                    {curso['respostas'].map((resposta) => {
                                        if (resposta.fk_pergunta === perguntas.idperguntas) {
                                            return (
                                                <div className="form-check">
                                                    <input type="radio" name={`resposta[${perguntas.idperguntas}][0]`} className="form-check-input" id={`radio${resposta.idrespostas_padrao}`} value={resposta.idrespostas_padrao} />
                                                    <label htmlFor={`radio${resposta.idrespostas_padrao}`} className="form-check-label">{resposta.resposta}</label>
                                                </div>
                                            )
                                        }

                                    })}
                                    <input type="text" value={perguntas.idperguntas} name={`resposta[${perguntas.idperguntas}][1]`} hidden />
                                </div>
                            )

                        }
                    })}
                    <button type="submit" className="btn btn-primary">Enviar Respostas</button>
                </form>
                {/*
                <div>
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" />
                </div>
                 <form action="POST">

                    <h4 className=''>1 - Empreendedorismo é o esforço de  criar, idealizar,
                    coordenar e realizar projetos. Seja uma idéia, tecnologia, produto ou serviço.
                    </h4>

                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-a" className='mr-3'>Verdadeiro</label>

                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-b" className='mr-3'>Falso</label>

                    <input type="submit" value="Responder" className="btn btn-success m-2" />
                    <input type="reset" value="Limpar" className="btn btn-danger m-2" />

                </form> */}



                {/* <form >
                    <h4>2 - Para empreender é preciso ficar atento aos seguintes pontos:</h4>

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Responsabilidade, compensação, Risco de falha.</label>
                    resposta correta
                    <br />

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Acordar cedo, trabalhar aos finais de semana e gastar pouco.</label>

                    <input type="submit" value="Responder" className="btn btn-success m-2" />
                    <input type="reset" value="Limpar" className="btn btn-danger m-2" />

                </form> */}


                {/* <form action="">

                    <h4>3 - Algumas características ajudam a pessoa empreendedora. São elas:</h4>

                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Força de vontade, persistência e acreditar na sua própria idéia.</label>
                    resposta correta
                    <br />

                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Cautela,  atenção e intuição.</label>

                    <br />

                    <input type="submit" value="Responder" className="btn btn-success m-2" />
                    <input type="reset" value="Limpar" className="btn btn-danger m-2" />

                </form> */}
            </div>

        </div >
    )
}
export default Cursos;