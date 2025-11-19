import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import logo from '/racv.png'
import uta from '/uta.png'

export function HomeContent(){
  return(
         
        <div className='body-main'>
                <input className="filtro-geral" placeholder='Veiculos' type='text' name='veiculo' ></input>
        <label for="desc"></label>
        
        <input className="fitro-locais-geral" placeholder='Locais' type='text' name='veiculo'></input>
        
        <button className='butao'>Pesquisar</button>
      
        </div>
  )
    
}