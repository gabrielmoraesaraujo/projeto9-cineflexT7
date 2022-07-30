import Topo from "./Topo";

export default function Sucesso(){

    return(
        <div className="Sucesso Corpo">
            <Topo />
            <div className="generic">  Pedido feito <br></br> com sucesso!</div>
            <div className="Informacoes FALTA">
                <h1>Aqui serão mostradas as informações dos arrays de objetos que foram
                    enviados para API
                </h1>
            </div>
            <div className="buttom">Voltar pra Home</div>
            

        </div>

        
    );
}