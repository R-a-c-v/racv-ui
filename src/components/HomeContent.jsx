import React , {useState} from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import { Link} from 'react-router-dom'

import logo from '/racv.png'
import uta from '/uta.png'
export function HomeContent() {
  const [locais, setLocais] = useState("");
  const [veiculo, setVeiculo] = useState("");

  function RequestServidor(e) {
    e.preventDefault(); // evita reload da página
    console.log("Veículo:", veiculo);
    console.log("Locais:", locais);
    // Aqui você chamaria a função que faz a requisição ao servidor
    // ex: fetchCars({ veiculo, locais })
      useEffect(() => {
      async function fetchCarros() {
        try {
          const res = await fetch("http://127.0.0.1:5000/api/carros");
          const data = await res.json();
          setCarros(data);
        } catch (error) {
          console.error("Erro:", error);
        }
      }
      fetchCarros();
    }, []);
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
      <Link to="/">About</Link>
    </div>
  );
}