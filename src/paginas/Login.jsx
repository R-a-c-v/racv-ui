import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
import HomeHead from '../components/HomeHead' 
import {HomeContent} from '../components/HomeContent' 
import Registro from '../components/Registro' 
 
export default function  Home() {
return(
    <div className='bloco' >    
        <HomeHead/>
        <Registro  />
        <HomeContent/>
    </div>
)
}