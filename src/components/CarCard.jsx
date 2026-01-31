import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
function cambio(){
   
}
export default function  CarCard({ car, anunciante, nome,ilha,link}) {
   return (
    <div className="car-card">
      <div>   
      <img
        src={car.fotografia}
        alt={`${car.make} ${car.model}`}
        className="car-img"
      />
      <h4 className="div-marca"> {car.marca}</h4>
      </div>
      <div className="car-bodi">
        <p><span className='titulo_anunc'>Assentos</span>: {car.numero_passageiro?car.numero_passageiro:"S/N"}</p><br/>
        <p><span className='titulo_anunc'>Transmissao</span>: {car.transmissao?car.transmissao:"S/N"}</p><br/>
        <p><span className='titulo_anunc'>Modelo</span>: {car.modelo?car.modelo:"S/N"}</p><br/>
        <p><span className='titulo_anunc'>Ar Condicionado</span>: {car.ar_condicionado ?car.ar_condicionado : "S/N" }</p><br/>
      </div>
      <div className="car-link">
        <h4>Empresa:</h4>
        <h4>{anunciante}</h4><br/>
         <a href={car.link} target={car.link} rel="noopener noreferrer" className="butao-link">Mostrar</a>
      </div>
     
      <div className="car-link">
        <h4 >{car.preco? car.preco :"S/N"} $</h4>
        <p>Diaria</p>
      </div>
  
    </div>
  )
}
