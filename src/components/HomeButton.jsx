import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import logo from '/racv.png'
import uta from '/uta.png'


export default function missao () {
  return (
    
        <div className='bodirazoes'>
          <br/>
            <p  className='titulo_um'> RACV <img className='logoracv'  src={logo} alt="RACV Logo"  />
            <br/><br/><hr/>
            <br/>
    
            </p >
                   <div className='quadro_conteudo_esq'> 
                    <p className='font-racv'>
                      <img className='logo-lupa' src={empresa} alt="RACV Logo"  />
                    Todas as ilhas cobertas
                    </p> 
                    <br/>
                     Compara preços e carros de empresas locais em todas as ilhas. verifica o teu carro em apenas alguns cliques para aluguer
                   </div>
    
                   <div className='quadro_conteudo_dir'>
                      <p className='font-racv'> 
                          <img className='logo-lupa' src={lupa} alt="RACV Logo"  />
                           Apoia os negócios locais
                     </p>
                     <br/>
                     Trabalhamos apenas com rent-a-cars pequenas, independentes e até familiares, para apoiar a economia local em Cabo Verde.
                   </div>
                  <div className='quadro_conteudo_esq'> 
                    <p className='font-racv'>
                      <img className='logo-lupa' src={empresa} alt="RACV Logo"  />
                    Todas as ilhas cobertas
                    </p> 
                    <br/>
                     Compara preços e carros de empresas locais em todas as ilhas. verifica o teu carro em apenas alguns cliques para aluguer
                   </div>
    
     
                   <div className='quadro_conteudo_dir'>
                      <p className='font-racv'> 
                          <img className='logo-lupa' src={lupa} alt="RACV Logo"  />
                           Apoia os negócios locais
                     </p>
                     <br/>
                     Trabalhamos apenas com rent-a-cars pequenas, independentes e até familiares, para apoiar a economia local em Cabo Verde.
                   </div>
                   <br/><br/><hr className='linhahr'/>
                </div>
  )
}