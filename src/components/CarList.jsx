import React from 'react'
import useFetch from '../hooks/useFetch'
import { fetchCars } from '../services/api'
import CarCard from './CarCard'
import DivEspaco from './DivEspaco'

export default function CarList() {
  const { data: cars, loading, error } = useFetch(fetchCars, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Erro ao carregar: {error.message}</div>
  if (!cars || cars.length === 0) return <div>Nenhum carro encontrado</div>

  return (
    <div>
      {cars.map((carro) => (
        // 1. A Key mudou para a DIV (o pai) e usa o ID
        <div key={carro.id}> 
          
          {/* 2. Passamos o objeto 'carro' para dentro do componente */}
          <CarCard car={carro} /> 
          
        </div>
      ))}
    </div>
  )
}