import React from 'react'
import { fetchCars } from '../services/api'
import '../styles/app.css'
import { useLocation } from 'react-router-dom'
import HomeHead from './HomeHead'
import FiltroVeiculo from './FiltroVeiculo'
import CarList from './CarList'

export default function InicioPagina() {
  const location = useLocation();
  const { carrosPesquisa,  } = location.state || {};
  return (
    <div>  
      <HomeHead/> 
      <FiltroVeiculo />
   </div>
  )
}