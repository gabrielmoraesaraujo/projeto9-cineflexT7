import Topo from "./Topo";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

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
                    <Filme>
                        <Items key={item.id} url={item.url} films={item.films}/>
                        <Link to={`item/${item.id}`}>/  
                        <img src={item.posterURL} alt={item.title}/>
                        </Link>
                    </Film>    
                ))}          
                </ul>
            </div>
        </div>

    );
}