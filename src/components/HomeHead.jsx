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
    <div className='fitro_head'>
        <img className='logo-trabalho' src={logo} alt="RACV Logo"  />
        <img className='logo-uta' src={uta} alt="RACV Logo"  />
        <h6>Por rmfortes@uta.cv</h6>
     </div>
  )
}