import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'
import '../styles/app.css'
import logo from '/racv.png'
import uta from '/uta.png'


export default function HomeHead() {
  return (
    <nav>
        <ul className='fitro_head'>
            <img  src={logo} alt="RACV Logo" style={{ width: "170px", height: "50px" }}/>
            <li className='logo-trabalho'></li>
            <li> Por rmfortes@uta.cv</li>
            <li><button className='registar_btn'>Registar</button></li>
            <li> <button className='login_btn'>Login</button> </li>
            <li> Missão</li>
        </ul>   
     </nav>
  )
}