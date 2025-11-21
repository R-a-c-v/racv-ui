import React , {useState} from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { useEffect } from 'react'



export function HomeContent() {

  const navigate = useNavigate();
  const [locais, setLocais] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [dados, setDados] = useState([]);
  const [pesquisa, setPesquisa] = useState([]);
  const lista = []
  async function RequestServidor(e) {
   e.preventDefault(); // evita reload da página
  try {
      const res = await fetch(`http://localhost:5002/pesquisa_principal_inicio?veiculo=${veiculo}&locais=${locais}`);
      const json = await res.json(); // pega os dados
      navigate("/pesquisa", { state: json }); // passa diretamente o json para a rota

    } catch (error) {
    console.error("Erro grande:", error);
  }   
}
return (
    <div className='body-main'>
      <form onSubmit={RequestServidor}>
        <input
          className="filtro-geral"
          placeholder='Veículos'
          value={veiculo}
          type='text'
          name='veiculo'
          onChange={(e) => setVeiculo(e.target.value)}
        />
        <input
          className="fitro-locais-geral"
          placeholder="Locais"
          value={locais}
          type='text'
          name='locais'
          onChange={(e) => setLocais(e.target.value)}
        />
        
      <button className='butao' type='submit'>Pesquisar</button>
   
      </form>      
    </div>
  );
}