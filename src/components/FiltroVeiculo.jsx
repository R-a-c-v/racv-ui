import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/app.css';
import sa from '/sa.jpeg'

import CarList from "../components/CarList";
import CarCard from './CarCard';

export default function FiltroVeiculo() {
  const { state } = useLocation() || {};
  const { cotacao } = useLocation() || {};
  const [moeda, setMoeda] = useState(""); // "euros", "dolares" ou "escudos"
  const anunciantes = "Teus Anuncios"
  const anuncios = "Anunciantes"

  const navigate = useNavigate();

  // Estados do filtro
  const [primeiraRender, setPrimeiraRender] = useState(true);
  const [primeiraPesquisa, setPrimeiraPesquisa] = useState(true);

  const [veiculo, setVeiculo] = useState("");
  const [local, setLocal] = useState("");
  const [ilha, setIlha] = useState("");
  const [cambio,setCambio] = useState("")
  const [resultado, setResultado] = useState("");
  const [dados, setDados] = useState("");
  const [escudos, setEscudos] = useState(false);
  const [euros, setEuros] = useState(false);
  const [dolares, setDolares] = useState(false);
  const [localLevantamento, setLocalLevantamento] = useState(false);
  const [transmissaoManual, setTransmissaoManual] = useState("");
  const [transmissaoAutomatico, setTransmissaoAutomatico] = useState("");
  const [numeroPassageiroUm, setNumeroPassageiroUm] = useState("");
  const [numeroPassageiroQuatro, setNumeroPassageiroQuatro] = useState("");
  const [arCondicionado, setArcondicionado] = useState("");
  const [precoMin, setPrecoMin] = useState(0);
  const [precoMax, setPrecoMax] = useState(0);
  const [anunciante, setAnunciante] = useState("");
  const token = localStorage.getItem("token");
   
  // -----------------------------------
  // SEUS useEffect EXISTENTES
  // -----------------------------------

useEffect(()=>
  {
    if (primeiraPesquisa) {
      
      setLocal(state.localizacao[0].ilha)
      console.log("Local",local)
      setResultado(state.localizacao.length)
      setPrimeiraPesquisa(false)
         // não executa na primeira render
  }},[])
useEffect(() => {
  
  async function filtragemAnuncios() {
      if (primeiraRender) {
        setPrimeiraRender(false);
        return ; // não executa na primeira render
      }
      

      try {
        let ilha = local
       
        const rest = await fetch(`http://localhost:5002/filtragem?local=${ilha}&automatico=${transmissaoAutomatico}&manual=${transmissaoManual}&passageiro_um=${numeroPassageiroUm}&passageiro_quatro=${numeroPassageiroQuatro}&ar_condicionado=${arCondicionado}&preco_min=${precoMin}&preco_max=${precoMax}&euros=${euros}`);
        const json = await rest.json();
        setResultado(json.localizacao.length);
        
        json.localizacao.map((carro,index)=>
          {
            json.marca[index].preco  = parseFloat(json.marca[index].preco / CambioValor(moeda)).toFixed(0) + ""
          }
        )

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
  moeda,
  precoMax,
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
function CambioValor(moeda){
if (moeda=="euros")
{
  return 110
}

if (moeda=="dolares")
{
  return 90   
}

return 1 
}
function RequestServidorCambio(){
    async function filtragemAnuncios() {
   
      try {
        
        const ilha = local
        const rest = await fetch(`http://localhost:5001/filtragem?local=${ilha}&automatico=${transmissaoAutomatico}&manual=${transmissaoManual}&passageiro_um=${numeroPassageiroUm}&passageiro_quatro=${numeroPassageiroQuatro}&ar_condicionado=${arCondicionado}&preco_min=${precoMin}&preco_max=${precoMax}&euros=${euros}`);
        const json = await rest.json();
        
        setResultado(json.localizacao.length);
        navigate("/pesquisa", { state: json }); 

      } catch (error) {
        console.log(error)
      }
  }
      filtragemAnuncios()

}
  async function RequestServidor(e) {
    
    //if (token)
    //{


    //}
    
    //else
    //{
      e.preventDefault();
      try {
        const res = await fetch(`http://localhost:5002/pesquisa_principal_inicio?veiculo=${veiculo}&locais=${local}`);
        const json = await res.json();
        setResultado(json.localizacao.length);
        navigate("/pesquisa", { state: json }); 
      } catch (error) {
        console.error("Erro na pesquisa:", error);
      }
    //}
  }
  async function RequestAnunciantes(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/pesquisa_filtragem_inicio?ilha=${local}`);
      const json = await res.json();
      navigate("/anunciante", {state : json})
      setResultado(json.length)
    } catch (error) {
      console.error("Erro na pesquisa:", error);
    }
  }
  // Função para buscar anunciantes
  function pesquisaIlha(){
   return <form onSubmit={RequestServidor} className='quadro-filtro'>
      <section>
        <select
          className="filtro-ilha"
          name="local"
          value={local}
          onChange={e => setLocal(e.target.value)}
        >
          <option value="" disabled>Ilha</option>
          <option value="Santo Antão">Santo Antão</option>
          <option value="São Vicente">São Vicente</option>
          <option value="São Nicolau">São Nicolau</option>
          <option value="Sal">Sal</option>
          <option value="Boa Vista">Boa vista</option>
          <option value="Maio">Maio</option>
          <option value="Santiago">Santiago</option>
          <option value="Fogo">Fogo</option>
          <option value="Brava">Brava</option>
        </select>
        <button className='butao' type='submit'>Pesquisar</button>
      </section>
  </form>
}
 function ilhaPesquisada(){
  
  return  (
    <div>
    <span 
      style={{           
        position: 'absolute',
        top: '180px',
        left: '260px',
        color: 'white',
        fontSize: '30px',
        fontWeight: 'bold',
        textShadow: '1px 1px 3px black'
      }}>
    
      {local } 
   </span>
  <img className='img-ilha-levantamento' src={sa} alt="sa"></img> 
</div>  
)
 }

return (
    <div className='quadro-filtro'>
      
      <div className='btn-pesq'>
      <br />
      <br />

        <div className="entidades-levantamento">
          <p className='filt text-titulo'>Local Levantamento</p>
          <br></br>
          <p className=' text-titulo'></p>
          <p className='text-titulo'>
             {localLevantamento?pesquisaIlha():ilhaPesquisada()}
          </p>
          <button className="modificar-btn"onClick={()=>{setLocalLevantamento(!localLevantamento)}} >Modificar </button>
        </div>   
        <div className='filtro-card'>

          {/* Preço */}
        <form>
          <div className='f'>
            <label className='text-titulo'>Preço</label>
            <hr/><br />

            <label className='checkbox-btn'>Euros</label>
            <input
              type='checkbox'
              name='moeda'
              checked={moeda === "euros"}
              onChange={() => setMoeda("euros")}
              className='checkbox-btn'
            />
            <br/>

            <label className='checkbox-btn'>Dólares</label>
            <input
              type='checkbox'
              name='moeda'
              checked={moeda === "dolares"}
              onChange={() => setMoeda("dolares")}
              className='checkbox-btn'
            />
            <br/>

            <label className='checkbox-btn'>Escudos</label>
            <input
              type='checkbox'
              name='moeda'
              checked={moeda === "escudos"}
              onChange={() => setMoeda("escudos")}
              className='checkbox-btn'
            />
            <br/>
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
              <option value={0} >Até</option>
              <option value={1000} >{parseFloat(1000 / CambioValor(moeda)).toFixed(1)}$</option>
              <option value={5000}>{parseFloat(5000 / CambioValor(moeda)).toFixed(1)}$</option>
              <option value={6000 }>{parseFloat(6000 / CambioValor(moeda)).toFixed(1)}$</option>
              <option value={7000 }>{parseFloat(7000 / CambioValor(moeda)).toFixed(1)}$</option>
              <option value={8000 }>{parseFloat(8000 / CambioValor(moeda)).toFixed(1)}$</option>
              <option value={10000}>{parseFloat(10000 / CambioValor(moeda)).toFixed(1)}$</option>
            </select>

          </div>

        </div>
      </div>

      {/* Formulário de pesquisa */}
      <div className='filtragem-radio'>

         <button  className="anuncio-btn" onClick={RequestServidor}>Anuncios</button>        
         <button className="anunciantes-btn" onClick={RequestAnunciantes}>{token?anunciantes:anuncios}</button>              
 
      </div>
      
      
      <br />
      <br />

      <div>{resultado} Resultados encontrados</div>
      <hr />
      
      <br />
    </div>
  );
}
