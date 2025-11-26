import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
import  {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



export default function  FiltroVeiculo({  }) {
const { state } = useLocation() || {};
const { v } = useLocation() || {};
const [veiculo, setVeiculo] = useState("");
const [local, setLocal] = useState("");
const [ilha, setIlha] = useState("");
const [transmissaoManual, setTransmissaoManual] = useState("");
const [transmissaoAutomatico, setTransmissaoAutomatico] = useState("");
const [numeroPassageiro, setNumeroPassageiro] = useState("");
const [gps, setGps] = useState("");
const [precoMin, setPrecoMin] = useState("");
const [precoMax, setPrecoMax] = useState("");
const navigate = useNavigate();

useEffect(()=>{
   if (transmissaoManual!=""){
     console.log("Manual")
     console.log(v)
   }
},[transmissaoManual])


useEffect(()=>{
   if (transmissaoAutomatico!=""){
     console.log("automatico")
   }
},[transmissaoAutomatico])

useEffect(()=>{
   if (gps!=""){
     console.log("gps")
   }
},[gps])


async function RequestServidor(e) {
   e.preventDefault(); // evita reload da página
  try {
      const res = await fetch(`http://localhost:5002/pesquisa_principal_inicio?veiculo=${veiculo}&locais=${local}`);
      const json = await res.json(); // pega os dados
      console.log(json)
      navigate("/pesquisa", { state: json }); // passa diretamente o json para a rota

    } catch (error) {
    console.error("Erro grande:", error);
  }   
}


  return (
<div className='quadro-filtro'>    
<form onSubmit={RequestServidor} className='quadro-filtro'>
    <section>
        <input
            className="filtro-pesq"
            placeholder="Veículos"
            type="text"
            name="veiculo"
            value={veiculo}
            onChange={e => setVeiculo(e.target.value)}
        />

        <select
            className="filtro-ilha"
            placeholder="Locais"
            type="text"
            name="local"
            value={local}
            onChange={e => setLocal(e.target.value)}
        >
        <option value="" disabled>Escolha uma ilha</option>
        <option value="Santo Antão">São Antão</option>
        <option value="São Vicente">São Vicente</option>
        <option value="São Nicolau">São Nicolau</option>
        <option value="Sal">Sal</option>
        <option value="Boavista">Boavista</option>
        <option value="Maio">Maio</option>
        <option value="Santiago">Santiago</option>
        <option value="Fogo">Fogo</option>
        <option value="Brava">Brava</option>
        </select>   
        <button  className='butao' type='submit'>Pesquisar</button>
        <br/>
    </section>
   </form>
   <hr></hr>

   <p className='filt'>Filtros</p>
   <hr></hr>
   <div className='filtro-card'>
     <div className='f'>
        <label >Preco</label>
        <br/>
        <input type='checkbox'></input>Euros
        <input 
        type='checkbox'className='f'></input>Dolares
        <input type='checkbox'className='f'></input>Escudos
     </div>
     
     <div className='f'>
        <label className='f'>Transmissao</label>
        <br/>
        <input 
            type='checkbox' 
            className='f'
            checked={transmissaoManual}
            onChange={(e)=>{setTransmissaoManual(e.target.checked)}}    
            >
            </input>
            Manual
        <input 
            type='checkbox' 
            className='f'
            checked={transmissaoAutomatico} 
            onChange={(e)=>{setTransmissaoAutomatico(e.target.checked)}} 
             >
        </input>
          Automatico
     </div>
     
    <div className='f'>
        <label className='f'>Numero passegeiros</label>
        <br/>
        <input type='checkbox' className='f'></input> 1-4
        <input type='checkbox'className='f'></input> mais do que 4
     </div>
    
    <div className='f'>
        <label className='f'>gps</label>
        <br/>
        <input 
            type='checkbox'
            className='f'
            checked={gps}
            onChange={(e)=> setGps(e.target.checked)}
        >
        </input> 
        Sim 
    </div>

    <div className='f'>
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
    
      </div>
   </div>
   </div>
   )
}
