import React from 'react'
import {useState} from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
import HomeHead from '../components/HomeHead' 
import {HomeContent} from '../components/HomeContent' 
import RegistroEmpresa from '../components/RegistroEmpresa' 
import ConectarLogin from '../components/ConectarLogin' 

export default function  Home() {
const [opacidadeHead , setOpacidadeHead] = useState(true)
    
return(
    <div >
        <HomeHead estado={opacidadeHead} setestado={setOpacidadeHead} />
        <ConectarLogin estado={opacidadeHead} setestado={setOpacidadeHead} />
        <HomeContent estado={opacidadeHead} setestado={setOpacidadeHead} />
    </div>
)
}