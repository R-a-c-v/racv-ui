import React , {useState, version} from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import { Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import logo from '/racv.png'
import lupa from '/lupa.png'
import empresa from '/empresa.png'
import audi from '../assets/audi.png'
import renault from '../assets/renault.png'
import ford from '../assets/ford.png'
import hundai from '../assets/hundai.png'
import wolvs from '../assets/wolvs.png'
import Toyota from '../assets/Toyota.png'

import { useEffect } from 'react'


export function HomeContent(props) {

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
      console.log("ddd",json)
      navigate("/pesquisa", { state: json }); // passa diretamente o json para a rota
   } catch (error) {
     console.log(error)
  }   
}

return (
    
    <div className={props.estado?'bodirazoes':''}>
      <div className={
      props.estado === undefined?
      'bodi-main':
       props.estado?
       'bodi-main':
      ''
    }>
            <p  className='titulo'>   O Portal rent a car de cabo verde</p >
              < img className='logoracvpesq'  src={logo} alt="RACV Logo"/>
              <br/>
              <label htmlFor="" className='levant_titulo' >Local de levantamento</label><br/>

            <form onSubmit={RequestServidor}>
              <select
                className="fitro-locais-geral"
                placeholder="Locais"
                value={locais}
                type='text'
                name='locais'
                onChange={(e) => setLocais(e.target.value)}
              >
              <option value="" disabled>Escolha lha</option>
              <option value="Santo Antão">Santo Antão</option>
              <option value="São Vicente">São Vicente</option>
              <option value="São Nicolau">São Nicolau</option>
              <option value="Sal">Sal</option>
              <option value="Boavista">Boavista</option>
              <option value="Maio">Maio</option>
              <option value="Santiago">Santiago</option>
              <option value="Fogo">Fogo</option>
              <option value="Brava">Brava</option>
              </select>  
              
                <button className='butao' type='submit'>Pesquisar</button>
            </form>
                      <img className='logos-home'  src={audi} alt="Audi Logo" />
            <img className='logos-home'  src={ford} alt="Audi Logo" />
            <img className='logos-home'  src={hundai} alt="Audi Logo" />
            <img className='logos-home'  src={renault} alt="Audi Logo" />
            <img className='logos-home'  src={wolvs} alt="Audi Logo" />
            <img className='logos-home'  src={Toyota} alt="Audi Logo" />
        
          </div>
  
    <div className={
      props.estado === undefined?
      'bodirazoes':
      props.estado?
      'bodirazoes':
      'bodirazoes-opacidade'
    }>
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
               <br/><br/><hr/>
            </div>
   </div>

);
}