import Topo from "./Topo";
import axios from "axios";
import { useState, useEffect } from "react";

function Items({id, films, url}){

    return(
        <div className="Items">
            <img src={url} />
            <div className="text">{films}</div>
            <div>{id}</div>
        </div>
    );
}

export default function Filme(){

    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data);
		}); 
	}, []);


    return(
        <div className="Filme Corpo">
            <Topo />
            <div className="generic">Selecione o filme</div>
            <div className="title">
                <ul>    
                {items.map((item) => (
                    <Items key={item.id} url={item.url} films={item.films}/>
                ))}          
                </ul>
            </div>
        </div>

    );
}