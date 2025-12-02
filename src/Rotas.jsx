import React from 'react'
import CarList from './components/CarList'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FiltroVeiculo from './components/FiltroVeiculo'
import HomeHead from './components/HomeHead'
import AnuncCard from './components/AnuncCard'
import CarAnunciante from './components/CarAnunciatnte'
import Home from './paginas/Home'
import Login from './paginas/Login'
import Registar from './paginas/Registar'

import './styles/app.css'
import { HomeContent } from './components/HomeContent'

export default function Rotas() {
  return (
    <div >
      <Routes>
        <Route   path="/anunciante" element={<><HomeHead/><FiltroVeiculo/><CarAnunciante/></>}/>
        <Route   path="/pesquisa" element={<><HomeHead/><FiltroVeiculo/><CarList/></>}/>
        <Route   path="/" element={<Home/>}/>
        <Route   path="/Login" element={<Login/>}/>
        <Route   path="/registrar" element={<Registar/>}/>
      </Routes>
    </div>
  )
}
