import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import logo from '/racv.png'
import uta from '/uta.png'
import { useNavigate, useLocation } from 'react-router-dom';

export default function   HomeHead() {
  const url = useNavigate();

  function requestLogin(){
    url("/Login")    
  }
  
  function requestRegistar(){
    url("/registar")    
  }
  return (
    <nav>
        <ul className='fitro-head'>
            <img  src={logo} alt="RACV Logo" style={{ width: "170px", height: "50px" }}/>
            <li className='logo-trabalho'></li>
            <li> Por rmfortes@uta.cv</li>
            <li><button className='registar_btn'onClick={requestRegistar}>Registar</button></li>
            <li> <button className='login_btn' type='submit' onClick={requestLogin}>Login</button> </li>
            <li> Missão</li>
        </ul>   
     </nav>
  )
}