import { BrowserRouter,Routes, Route } from "react-router-dom";
import Filme from "./components/Filme";
import Horario from "./components/Horario";
import Sessao from "./components/Sessao";
import Sucesso from "./components/Sucesso";



export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sessao/>}/>
        </Routes>
        
    </BrowserRouter>
  );
}


