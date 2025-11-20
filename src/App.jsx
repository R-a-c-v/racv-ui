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
        <Route   path="/" element={
          <>  
              <HomeHead/> 
              <FiltroVeiculo/>
              <CarList />
          </>
          } 
        />
        <Route   path="/inicio" element={
          <>  
              <HomeHead/> 
              <HomeContent/>
          </>
          } 
        />
        <Route   path="/pesquisa" element={
          <>  
              <HomeHead/> 
              <HomeContent/>

              
          </>
          } 
        />  
       <Route Link to="/inicio" element= {<div>
              <HomeHead/> 
              <FiltroVeiculo/>
              <CarList /> 
           </div>}/>
      </Routes>
    </div>
  )
}
