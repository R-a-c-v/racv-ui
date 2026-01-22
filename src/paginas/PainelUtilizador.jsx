import React from 'react'
import {useState} from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
import HomeHead from '../components/HomeHead' 
import HomeContentUser from '../components/HomeContentUser' 
import Registro from '../components/Registro' 


export default function  HomeUser() {

const [opacidadeHead , setOpacidadeHead] = useState(true)
    return(
    <div >    
        <HomeHead estado={opacidadeHead} setestado={setOpacidadeHead}/>
        <HomeContentUser/>
    </div>
)
}