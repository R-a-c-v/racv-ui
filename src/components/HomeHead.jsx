import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import logo from '/racv.png'
import uta from '/uta.png'
import { useNavigate, useLocation } from 'react-router-dom';

export default function  HomeHead(props) {
  const  sessaoUser = localStorage.getItem("dados")
  const anuncios = "Anúncios";
  const Login = "Login";
  const notificacao = "Notificações";
  const regstiro = "Regstiro";
  const x = "";


  const url = useNavigate();

  function requestLogin(){

    url("/Login")
  }
  
  function requestRegistar(){
    if (sessaoUser)
    {
      async function RequestServidor(e)
      {
       // e.preventDefault(); // evita reload da página
        try {
            const res = await fetch(`http://localhost:5001/pesquisa_principal_inicio?veiculo=${""}&locais=${""}`);
            const json = await res.json(); // pega os dados
            console.log("ddd",json)
            url("/pesquisa", { state: json }); // passa diretamente o json para a rota
        } catch (error) {
          console.log(error)
        }   
    
      } 
      RequestServidor()
    
    }
    else
    {
      url("/registrar")   
    }
  }
  
  function home()
  {
    console.log("kdk")
    url("/")      
  }
  
  function sair(){
    localStorage.clear()
    url("/")    
  }
  
  return (
    <nav className='fitro-head'>
        <ul className= {
          props.estado === undefined?
          'fitro-head'     
          :props.estado?
          'fitro-head': 
          'bodirazoes-opacidade' 
        }>
            <button onClick={home} className='rac-btn'><img  src={logo} alt="RACV Logo" onClick={home} style={{ width: "170px", height: "50px", marginLeft:"50px", marginTop:"8px" }}/></button>
                        { sessaoUser?
            <li> <button className='login_btn' type='submit' onClick={sair}>Sair</button></li>
            :x
            }
            <li> Por rmfortes@uta.cv</li>
            <li> Missão</li>

        </ul>   
     </nav>
  )
}