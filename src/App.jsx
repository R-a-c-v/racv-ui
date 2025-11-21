import React from 'react'
import CarList from './components/CarList'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import FiltroVeiculo from './components/FiltroVeiculo'
import HomeHead from './components/HomeHead'

import './styles/app.css'
import { HomeContent } from './components/HomeContent'

export default function App() {
  return (
    <div >

      <Routes>
        <Route   path="/pesquisa" element={
          <>  
              <HomeHead/> 
              <FiltroVeiculo/>
              <CarList />
          </>
          } 
        />
        <Route   path="/" element={
          <>  
              <HomeHead/> 
              <HomeContent/>
          </>
          } 
        />
      </Routes>
    </div>
  )
}
