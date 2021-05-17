import React from "react";


const Marketing = () => {
    return(
        <div>
            <div className="container-fluid">
                <div style={{alignItems:"center"}}>
                    <iframe width="420" height="315"src="https://www.youtube.com/embed/rTxPwy4mKKw"/>
                </div>
                
                <form action="POST">
                    <h4 className=''>1 - Os quatro P do Marketing são: </h4>

                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-a" className='mr-3'>Produto, Preço, Praça e Promoção</label>
                    {/* resposta correta */}


                    <input type="radio" name="Per1-res" id="" className="mr-1" />
                    <label htmlFor="Per1-res-b" className='mr-3'>Pensar, Planejar, Pesquisar e Produzir</label>


                    <h4>2 - Preço é:</h4>

                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Quanto o produto vai custar para o cliente</label>
                    {/* resposta correta */}


                    <input type="radio" name="Per2-res" id="" className="mr-1" />
                    <label htmlFor="Per2-res" className='mr-3'>Quanto você gastou para produzir o produto</label>


                    <h4>3 - O quarto P do marketing significa promoção ou seja:</h4>

                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Descontos que você dá para o seu cliente.</label>


                    <input type="radio" name="Per3-res" id="" className="mr-1" />
                    <label htmlFor="Per3-res" className='mr-3'>Como você promove ou divulga sua marca.</label>
                    {/* resposta correta */}

                    <br />

                    <input type="submit" value="Responder" className="btn btn-success m-2" />

                    <input type="reset" value="Cancelar" className="btn btn-danger m-2" />

                </form>
            </div>
        </div>
    )
}

export default Marketing;