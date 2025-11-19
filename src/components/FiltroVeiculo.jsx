import React from 'react'
import logo from '/foto.jpeg'
import '../styles/app.css'

export default function  FiltroVeiculo({  }) {
  return (
    <section >
        <label for="desc"></label>
        <input className="filtro-pesq" placeholder='Veiculos' type='text' name='veiculo' ></input>
        <label for="desc"></label>
        <input className="fitro-locais" placeholder='Locais' type='text' name='veiculo'></input>
        <button className='butao'>Pesquisar</button>
        <p className='text-filtros'>FILTROS</p>
        
        <select className='categ-ilha' defaultValue="">
            <option value="" disabled>Escolha uma ilha</option>
            <option value="São Antão">São Antão</option>
            <option value="São Vicente">São Vicente</option>
            <option value="São Nicolau">São Nicolau</option>
            <option value="Sal">Sal</option>
            <option value="Boavista">Boavista</option>
            <option value="Maio">Maio</option>
            <option value="Santiago">Santiago</option>
            <option value="Fogo">Fogo</option>
            <option value="Brava">Brava</option>
            </select>
            <label htmlFor="precoMin">Preço mínimo:</label>
            <select id="precoMin" className='categ-precoMin' defaultValue="">
            <option value="" disabled>De</option>
            <option value="10">10€</option>
            <option value="100">100€</option>
            <option value="1000">1000€</option>
            <option value="10000">10000€</option>
            </select>

            <label htmlFor="precoMax">Preço máximo:</label>
            <select id="precoMax" className='categ-precoMax' defaultValue="">
            <option value="" disabled>Até</option>
            <option value="10">10€</option>
            <option value="100">100€</option>
            <option value="1000">1000€</option>
            <option value="10000">10000€</option>
            </select>
        <button className='butao'>Filtrar</button>

        <hr></hr>

  
    </section>

)
}
