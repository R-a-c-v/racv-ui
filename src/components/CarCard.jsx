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
        src={logo}
        alt={`${car.make} ${car.model}`}
        className="car-img"
      />
      <h4 className="div-marca"> {car.marca}</h4>
      </div>
      <div className="car-bodi">
        <p>Assentos: {car.numero_passageiro?car.numero_passageiro:"S/N"}</p><br/>
        <p>Transmissao: {car.transmissao?car.transmissao:"S/N"}</p><br/>
        <p>Modelo: {car.modelo?car.modelo:"S/N"}</p><br/>
        <p>Ar Condicionado:{car.ar_condicionado ?car.ar_condicionado : "S/N" }</p><br/>
      </div>
      <div className="car-link">
        <h4>Empresa:</h4>
        <h4>{anunciante}</h4><br/>
         <a href={car.link} className="butao-link">Mostrar</a>
      </div>
     
      <div className="car-link">
        <h4 >{car.preco? car.preco :"S/N"} $</h4>
        <h4>Diaria</h4>
      </div>
  
    </div>
  )
}
