import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
import  {useState} from 'react'
import { useNavigate } from "react-router-dom";


export default function  FiltroVeiculo({  }) {
const [veiculo, setVeiculo] = useState("");
const [local, setLocal] = useState("");
const [ilha, setIlha] = useState("");
const [precoMin, setPrecoMin] = useState("");
const [precoMax, setPrecoMax] = useState("");
const navigate = useNavigate();


async function Requesicao(e) {
   e.preventDefault(); // evita reload da página
  try {
      const res = await fetch(`http://localhost:5002/filtragem?veiculo=${veiculo}&locais=${local}&ilha=${ilha}&percoMin=${precoMin}&precoMax=${precoMax}`);
      const json = await res.json(); // pega os dados
      navigate("/pesquisa", { state: json }); // passa diretamente o json para a rota

    } catch (error) {
    console.error("Erro grande:", error);
  }   
}

  return (
<form onSubmit={Requesicao}>
    <section>
        <input
            className="filtro-pesq"
            placeholder="Veículos"
            type="text"
            name="veiculo"
            value={veiculo}
            onChange={e => setVeiculo(e.target.value)}
        />

        <input
            className="filtro-locais"
            placeholder="Locais"
            type="text"
            name="local"
            value={local}
            onChange={e => setLocal(e.target.value)}
        />

        <button  className='butao' type='submit'>Pesquisar</button>
        <select
            className="categ-ilha"
            name="ilha"
            value={ilha}
            onChange={e => setIlha(e.target.value)}
        >
            <option value="" disabled>Escolha uma ilha</option>
            <option value="São Antão">São Antão</option>
            <option value="São Vicente">São Vicente</option>
            <option value="São Nicolau">São Nicolau</option>
            <option value="Sal">Sal</option>
            <option value="Boavista">Boavista</option>
            <option value="Maio">Maio</option>
            <option value="Santiago">Santiago</option>
            <option value="Fogo">Fogo</option>
            <option value="Brava">Brava</option>
        </select>

        <select
            id="precoMin"
            className="categ-precoMin"
            name="precoMin"
            value={precoMin}
            onChange={e => setPrecoMin(e.target.value)}
        >
            <option value="" disabled>De</option>
            <option value="10">10€</option>
            <option value="100">100€</option>
            <option value="1000">1000€</option>
            <option value="10000">10000€</option>
        </select>

        <select
            id="precoMax"
            className="categ-precoMax"
            name="precoMax"
            value={precoMax}
            onChange={e => setPrecoMax(e.target.value)}
        >
            <option value="" disabled>Até</option>
            <option value="10">10€</option>
            <option value="100">100€</option>
            <option value="1000">1000€</option>
            <option value="10000">10000€</option>
        </select>

    </section>
   </form>
   )
}
