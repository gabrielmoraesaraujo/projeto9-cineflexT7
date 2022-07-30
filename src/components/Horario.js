import Topo from "./Topo";
import Footer from "./Footer";

export default function Horario(){

    return(
        <div className="Horario Corpo">
            <Topo />
            <div className="generic">Selecione o horário</div>
            <div className="horarios FALTA">
                <h1>Criar caixas a partir das informações com a API 
                    pegando dia da semana e data e horarios disponiveis</h1>

            </div>
            <Footer />  

        </div>

        
    );
}