import React from 'react';
import CarCard from './CarCard';
import { useLocation } from 'react-router-dom';

export default function CarList() {
  const { state } = useLocation() || {};

  // fallback caso state seja undefined
  const localizacao = state?.localizacao || [];
  const marcas = state?.marca || [];

  if (!localizacao.length) return <div>Nenhum carro encontrado</div>;
  //console.log("olime localizacao",state.localizacao[0])
  //console.log("olime marca ",state.marca[0])
  return (
    <div>
  
        {localizacao.map((carro, index) => (
        <CarCard
          key={`${carro.modelo}-${index}`} // chave única
          car={state.marca[index] }
          nome={state.localizacao[index].nome }
          ilha={state.localizacao[index].ilha }
          link={state.localizacao[index].link }
          //anunciante={state.localizacao[index] }
         // anunciante={carro.carro}
        />
      ))}
    </div>
  );
}
