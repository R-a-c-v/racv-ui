import React from 'react'
import logo from '/rentcar.png'
import '../styles/app.css'
export default function  AnuncCard({ anunciante,nome,ilha,link}) {
  return (
    <div className="car-card">
      <div>
      <img
        src={logo}
        className="car-img"  
      />
      <h4 className="div-marca"> {anunciante.nome}</h4>
      </div>
      <div className="car-bodi">
        <p>Ilha: {anunciante.ilha}</p><br/>
        <p>Endereço: {anunciante.endereco}</p><br/>
        <p>Email: {anunciante.email}</p><br/>

      </div>
      <div className="car-link">
        <h4>Fornecido : </h4>
        <h4>{anunciante.nome}</h4><br/>
        <button className="butao-link">Link</button>
      </div>
    
    </div>
  )
}
/*xmxm*/