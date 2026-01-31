import React from 'react';
import CarCard from './CarCard';
import AnuncCard from './AnuncCard';
import { useLocation } from 'react-router-dom';

export default function CarList({ dado }) {
  const { state } = useLocation() || {};
  const { cotacao } = useLocation() || {};
   
  // fallback caso state seja undefined
  const localizacao = state?.localizacao || [];

  // verificar se props.dado é um array válido
  // verificar se props.dado é um array válido
  const hasDado =   Array.isArray(dado) ;
  if (hasDado) {
    return (
      <div className='lista-anunc'>
        {dado.map((anunc, index) => (
          <AnuncCard
            key={`${anunc.nome}-${index}`}
            anunciante={anunc}
          />
        ))}
      </div>
    );
  }

  // caso não exista props.dado
  if (localizacao.length === 0) return <div>Nenhum carro encontrado</div>;

  return (
    <div className='lista-anunc'>
      {localizacao.map((carro, index) => (
        <CarCard
          key={`${carro.modelo}-${index}`}
          car={state?.marca?.[index]}
          nome={carro.nome}
          ilha={carro.ilha}
          link={carro.link}
          anunciante={state.localizacao[index].nome}
        />
      ))}
    </div>
  );
}
