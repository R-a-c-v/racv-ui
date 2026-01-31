import React from 'react'
import logo from '/rentcv.jpg'
import '../styles/app.css'
export default function  AnuncCard({ anunciante,nome,ilha,link}) {
  return (
    <div className="anunc-card">
      <div>
      <img
        src={logo}
        className="anunc-img"  
      />
      <h4 className="div-marca"> {anunciante.nome}</h4>
      </div>
      <div className="car-bodi">
        <p> <span className='titulo_anunc'>Ilha</span>: {anunciante.ilha}</p><br/>
        <p><span className='titulo_anunc'>Endereço</span>: {anunciante.endereco}</p><br/>
        <p><span className='titulo_anunc'>Horario</span>: {anunciante.horario_funcionamento}</p><br/>
        <p><span className='titulo_anunc'>Email</span>: {anunciante.email}</p><br/>
        <p><span className='titulo_anunc'>Telefone</span>: {anunciante.telefone}</p><br/>

      </div>
      <div className="car-link">
       <h4>Empresa: </h4>{anunciante.nome}<br/>
        <br/><a href={anunciante.link} target={anunciante.link} rel="noopener noreferrer" className="butao-link">Mostrar</a>
      </div>
    
    </div>
  )
}
/*xmxm*/
/*xmxm*/