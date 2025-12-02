import React from 'react';
import CarCard from './CarCard';
import AnuncCard from './AnuncCard';
import { useLocation } from 'react-router-dom';

export default function CarAnunciante({ dado }) {
  const {state } = useLocation() || {};

  console.log("data",state)
  // caso não exista props.dado
  if (!state) return <div>Nenhum anunciante encontrado</div>;

  return (  
    <div className='lista-anunc'>
      {state.map((anunciante, index) => (
        <AnuncCard
          key={`${anunciante.id_anunciante}-${index}`}
          anunciante={anunciante}
        />
      ))}
    </div>
  );

}
