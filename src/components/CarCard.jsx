import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'
export default function  CarCard({ car,nome,ilha,link}) {
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
        <p>Assentos: {car.numero_passageiro}</p>
        <p>Transmissao: {car.transmissao}</p>
        <p>Modelo: {car.modelo}</p>

      </div>
      <div className="car-link">
        <h4>Fornecido : </h4>
        <h4>{car.marca}</h4>
        <button className="butao-link">Link</button>
      </div>
     
      <div className="car-link">
        <h4 >{car.preco}$</h4>
        <h4>Diaria</h4>
      </div>
  
    </div>
  )
}
