import React from 'react'
import CarList from './components/CarList'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FiltroVeiculo from './components/FiltroVeiculo'
import HomeHead from './components/HomeHead'
import Home from './paginas/Home'

import './styles/app.css'
import { HomeContent } from './components/HomeContent'

export default function Rotas() {
  return (
    <div >
      <Routes>
        <Route   path="/pesquisa" element={<><HomeHead/><FiltroVeiculo/><CarList/></>}/>
        <Route   path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}
