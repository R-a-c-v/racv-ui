import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
import HomeHead from '../components/HomeHead' 
import {HomeContent} from '../components/HomeContent' 
import RegistroEmpresa from '../components/RegistroEmpresa' 
 
export default function  Home() {
return(
    <div >
        <HomeHead/>
        <RegistroEmpresa/>
        <HomeContent/>
    </div>
)
}