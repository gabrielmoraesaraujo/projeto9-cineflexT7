import Topo from "./Topo";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"


export default function Filme({setarFilme}){

    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
            console.log("requisicaodeucerto");
		}); 
	}, []);


    return(
        <div className="Filme Corpo">
            <Topo />
            <div className="generic">Selecione o filme</div>
            <div className="title">
                   
                {items.map(item => 
                    < div className="caixa" onClick={() => setarFilme(item)}>
                        <Link to={`item/${item.id}`}>/  
                        <img src={item.posterURL} alt={item.title}/>
                        </Link>
                    </div>
                )}          
                
            </div>
        </div>

    );
}