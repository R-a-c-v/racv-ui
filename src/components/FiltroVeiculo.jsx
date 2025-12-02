import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/app.css';
import CarList from "../components/CarList";

export default function FiltroVeiculo() {
  const { state } = useLocation() || {};
  const navigate = useNavigate();

  // Estados do filtro
  const [primeiraRender, setPrimeiraRender] = useState(true);

  const [veiculo, setVeiculo] = useState("");
  const [local, setLocal] = useState("");
  const [ilha, setIlha] = useState("");
  const [cambio,setCambo] = useState("")
  const [resultado, setResultado] = useState("");
  const [dados, setDados] = useState("");
  const [escudos, setEscudos] = useState("");
  const [euros, setEuros] = useState("");
  const [dolares, setDolares] = useState("");
  const [transmissaoManual, setTransmissaoManual] = useState("");
  const [transmissaoAutomatico, setTransmissaoAutomatico] = useState("");
  const [numeroPassageiroUm, setNumeroPassageiroUm] = useState("");
  const [numeroPassageiroQuatro, setNumeroPassageiroQuatro] = useState("");
  const [arCondicionado, setArcondicionado] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [anunciante, setAnunciante] = useState("");
  
  // -----------------------------------
  // SEUS useEffect EXISTENTES
  // -----------------------------------
useEffect(() => {
  
  async function filtragemAnuncios() {
      if (primeiraRender) {
      setPrimeiraRender(false);
      return; // não executa na primeira render
      }

      try {
        const ilha = "Santo Antão"
        const rest = await fetch(`http://localhost:5002/filtragem?local=${ilha}&automatico=${transmissaoAutomatico}&manual=${transmissaoManual}&passageiro_um=${numeroPassageiroUm}&passageiro_quatro=${numeroPassageiroQuatro}&ar_condicionado=${arCondicionado}&preco_min=${precoMin}&preco_max=${precoMax} `);
        const json = await rest.json();
        setResultado(json.localizacao.length);
        console.log("olime",json.localizacao.length)
        navigate("/pesquisa", { state: json }); 

      } catch (error) {
      console.log(error)
      }
    
  }
 filtragemAnuncios () 
 
}, [
  transmissaoManual,
  transmissaoAutomatico,
  numeroPassageiroUm,
  numeroPassageiroQuatro,
  arCondicionado,
  precoMin,
  precoMax
]);

  // -----------------------------------
  // Novo useEffect para navegar quando anunciante mudar
  // -----------------------------------
  useEffect(() => {
    if (anunciante) {
      navigate("/pesquisa", { state: anunciante });
    }
  }, [anunciante, navigate]);

  // -----------------------------------
  // Função para pesquisar veículos
  // -----------------------------------
  async function RequestServidor(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5002/pesquisa_principal_inicio?veiculo=${veiculo}&locais=${local}`);
      const json = await res.json();
      setResultado(json.localizacao.length);
      console.log(resultado)
      navigate("/pesquisa", { state: json }); 
    } catch (error) {
      console.error("Erro na pesquisa:", error);
    }
  }
  async function RequestAnunciantes(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/anunciante`);
      const json = await res.json();
      console.log("/anunciante",json)
      navigate("/anunciante", {state : json})
      setResultado(json.length)
    } catch (error) {
      console.error("Erro na pesquisa:", error);
    }
  }
  // -----------------------------------
  // Função para buscar anunciantes
  // -----------------------------------
  

  // -----------------------------------
  // JSX
  // -----------------------------------
  return (
    <div className='quadro-filtro'>
      <div className='btn-pesq'>
        <p className='filt text-titulo'>Filtros</p>
        <div className='filtro-card'>

          {/* Preço */}
      <form onSubmit={RequestServidor}>
        <div className='f'>
          <label className='text-titulo'>Preço</label>
          <hr /><br />

          <label className='checkbox-btn'>
            Euros
            <input type='radio' name='moeda' value='EUR' className='checkbox-btn' />
          </label>
          <br />

          <label className='checkbox-btn'>
            Dólares
            <input type='radio' name='moeda' value='USD' className='checkbox-btn' />
          </label>
          <br />

          <label className='checkbox-btn'>
            Escudos
            <input type='radio' name='moeda' value='CVE' className='checkbox-btn' />
          </label>
          <br />
        </div>
      </form>

        

          <br />

          {/* Transmissão */}
          <div className='f'>
            <label className='text-titulo'>Transmissão</label>
            <hr /><br />
            <label className='checkbox-btn'>Manual</label>
            <input type='checkbox' checked={transmissaoManual} onChange={(e) => setTransmissaoManual(e.target.checked)} /><br />
            <label className='checkbox-btn'>Automático</label>
            <input type='checkbox' checked={transmissaoAutomatico} onChange={(e) => setTransmissaoAutomatico(e.target.checked)} />
          </div>
          <br/>

          {/* Passageiros */}
          <div className='f'>
            <label className='text-titulo'>Número de passageiros</label>
            <hr /><br />
            <label className='checkbox-btn' >1-4</label>
            <input type='checkbox' className='checkbox-btn' value={numeroPassageiroUm} onChange={(e)=>{setNumeroPassageiroUm(e.target.checked)}} /><br />
            <label className='checkbox-btn'>Mais de 4</label>
            <input type='checkbox' className='checkbox-btn' value={numeroPassageiroQuatro} onChange={(e)=>{setNumeroPassageiroQuatro(e.target.checked)}}/><br />
          </div>
          <br />

          {/* GPS */}
          <div className='f'>
            <label className='text-titulo'>Ar Condicionado</label>
            <hr /><br />
            <label className='checkbox-btn'>Sim</label>
            <input type='checkbox' checked={arCondicionado} onChange={(e) => setArcondicionado(e.target.checked)} /><br />
          </div>
          <br />

          {/* Preço mínimo/máximo */}
          <div className='f'>
            <label className='text-titulo'>Preço</label>
            <hr /><br />
            <select className='categ-precoMin ' value={precoMin} onChange={e => setPrecoMin(e.target.value)}>
              <option value="" disabled selected hidden>De</option>
              <option value="10">10€</option>
              <option value="100">100€</option>
              <option value="1000">1000€</option>
              <option value="10000">10000€</option>
            </select>

            <select className='categ-precoMax' value={precoMax} onChange={e => setPrecoMax(e.target.value)}>
              <option value="" disabled selected hidden>Até</option>
              <option value="10">10€</option>
              <option value="100">100€</option>
              <option value="1000">1000€</option>
              <option value="10000">10000€</option>
            </select>
          </div>

        </div>
      </div>

      {/* Formulário de pesquisa */}
      <div className='filtragem-radio'>
        <form onSubmit={RequestServidor} className='quadro-filtro'>
          <section>
            <select
              className="filtro-ilha"
              name="local"
              value={local}
              onChange={e => setLocal(e.target.value)}
            >
              <option value="" disabled>Escolha uma ilha</option>
              <option value="Santo Antão">Santo Antão</option>
              <option value="São Vicente">São Vicente</option>
              <option value="São Nicolau">São Nicolau</option>
              <option value="Sal">Sal</option>
              <option value="Boavista">Boavista</option>
              <option value="Maio">Maio</option>
              <option value="Santiago">Santiago</option>
              <option value="Fogo">Fogo</option>
              <option value="Brava">Brava</option>
            </select>
            <button className='butao' type='submit'>Pesquisar</button>
          </section>
        </form>
      <div className="entidades-quadro">
         <button  className="anuncio-btn" onClick={RequestServidor}>Anuncio</button>        
         <button className="anunciantes-btn" onClick={RequestAnunciantes}>Anunciantes</button>        
      </div>
 
      </div>
      <br />
      <br />
      <br />
      <br />

      <div>{resultado} Resultados encontrados</div>
      <hr />
    </div>
  );
}
