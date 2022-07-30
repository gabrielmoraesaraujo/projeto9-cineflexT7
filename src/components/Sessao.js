import Topo from "./Topo"
import Footer from "./Footer";

export default function Sessao(){

    return(
        <div className="Sessao">
            <Topo />
            <div className="generic">Selecione o(s) assento(s)</div>
            <div className="Assentos FALTA">
                <h1>Aqui vão as info dos assentos tirados da API</h1>
            </div>
            <form>

            </form>
            <Footer />

        </div>
    );
}