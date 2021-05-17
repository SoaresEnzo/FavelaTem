import React from 'react';

const Consultoria = () => {
    return(
        <div>
            <div className="container-fluid my-3">
                <div style={{ alignItems: "center" }}>
                    <iframe width="420" height="315" src="https://www.youtube.com/embed/8Jx033mbv6M" />
                </div>

                <form action="POST">
                    <h4 className=''>1 - Margem de lucro é basicamente o que você recebe pela venda do produto retirando mão de obra,
                    produção, embalagem e tudo o que você precisou investir para produzir o produto para o seu cliente?
                    </h4>

                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-a" className='mr-3'>Verdadeiro</label>
                    {/* resposta correta */}

                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-b" className='mr-3'>Falso</label>


                    <h4>2 - Conta de água, luz e telefone, são custos fixos ou variáveis?</h4>

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Fixos</label>
                    {/* resposta correta */}

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Variáveis</label>


                    <h4>3 - Não é importante analisar o mercado e seus
                    concorrentes na hora de precificar. Essa afirmação é Falsa ou verdadeira?
                    </h4>

                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Verdadeira</label>


                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Falsa</label>
                    {/* resposta correta */}

                    <br />

                    <input type="submit" value="Responder" className="btn btn-success m-2" />

                    <input type="reset" value="Cancelar" className="btn btn-danger m-2" />

                </form>

            </div>
             
        </div>
    )
}   
export default Consultoria;