import React from 'react';
// import Menu from '../../../componentes/Menu';



const Emprendedorismo = () => {
    return(
        <div>
            {/* <Menu/> */}
            <div className="container-fluid my-3">
                <div>
                    <iframe width="420" height="315"src="https://www.youtube.com/embed/8Jx033mbv6M"/> 
                </div>              
                
                <form action="POST">
                    <label>1 - Margem de lucro é basicamente o que você recebe pela venda do produto retirando mão de obra,
                         produção, embalagem e tudo o que você precisou investir para produzir o produto para o seu cliente?
                    </label>

                    <label htmlFor="Per1-res-a">Verdadeiro</label>
                    <input type="radio" name="Per1-res-a" id=""  checked/>
                    
                    <label htmlFor="Per1-res-b">Falso</label>
                    <input type="radio" name="Per1-res-b" id=""  value="Falso"/>

                    <label>2 - Conta de água, luz e telefone, são custos fixos ou variáveis?</label>
                    
                    <label htmlFor="Per2-res-a">Resposta a</label>
                    <input type="radio" name="Per2-res-a" id=""  checked/>
                    
                    <label htmlFor="Per2-res-b">resposta b</label>
                    <input type="radio" name="Per2-res-b" id=""/>

                    <label>3 - Não é importante analisar o mercado e seus 
                        concorrentes na hora de precificar. Essa afirmação é Falsa ou verdadeira?
                    </label>
                    
                    <label htmlFor="Per3-res-a">Resposta a</label>
                    <input type="radio" name="Per3-res-a" id=""  checked />
                    
                    <label htmlFor="Per3-res-b">resposta b</label>
                    <input type="radio" name="Per3-res-b" id="" />

                </form>

                
            </div>
        </div>
    )
}
export default Emprendedorismo;

const Marketing = () => {
    return(
        <div>
            <div className="container-fluid" style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                    <iframe width="420" height="315"src="https://www.youtube.com/embed/qXRYQl60lgw"/>
                </div>               

                <form action="POST" className="form-control">
                    <p>Pergunta
                    </p>
                    
                    <label htmlFor="a">Resposta a</label><input type="radio" name="" id=""/>
                    
                    <label htmlFor="a">resposta b</label><input type="radio" name="" id=""/>

                    <p>Pergunta
                    </p>
                    
                    <label htmlFor="a">Resposta a</label><input type="radio" name="" id=""/>
                    
                    <label htmlFor="a">resposta b</label><input type="radio" name="" id=""/>

                    <p>Pergunta
                    </p>
                    
                    <label htmlFor="a">Resposta a</label><input type="radio" name="" id=""/>
                    
                    <label htmlFor="a">resposta b</label><input type="radio" name="" id=""/>
                    
                </form>
            </div>
        </div>
    )
}

// export default Marketing;

const Consultoria = () => {
    return(
        <div>
             <div className="container-fluid">
                <div style={{alignItems:"center"}}>
                    <iframe width="420" height="315"src="https://www.youtube.com/embed/rTxPwy4mKKw"/>
                </div>
                
                <form action="POST" className="form-control">
                    <p>Pergunta
                    </p>
                    
                    <label htmlFor="a">Resposta a</label><input type="radio" name="" id="" checked/>
                    
                    <label htmlFor="a">resposta b</label><input type="radio" name="" id=""/>

                    <p>Pergunta
                    </p>
                    
                    <label htmlFor="a">Resposta a</label><input type="radio" name="" id=""/>
                    
                    <label htmlFor="a">resposta b</label><input type="radio" name="" id=""/>

                    <p>Pergunta
                    </p>
                    
                    <label htmlFor="a">Resposta a</label><input type="radio" name="" id=""/>
                    
                    <label htmlFor="a">resposta b</label><input type="radio" name="" id=""/>
                    
                </form>
            </div>
        </div>
    )
}   
// export default Consultoria;   