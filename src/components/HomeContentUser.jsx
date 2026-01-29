import { useState } from 'react'
import '../styles/app.css'
import { useNavigate, useLocation } from "react-router-dom";

import audi from '../assets/audi.png'
import fotoUser from '../assets/user.png'
import renault from '../assets/renault.png'
import ford from '../assets/ford.png'
import hundai from '../assets/hundai.png' 

export default function HomeContentUser(props) {

  const user = useLocation()
  const navigate = useNavigate();

  const [locais, setLocais] = useState("");
  const [veiculo, setVeiculo] = useState("");

  const lista = JSON.parse(localStorage.getItem("dados")) || {}

  async function RequestServidor(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:5001/pesquisa_principal_inicio?veiculo=${veiculo}&locais=${locais}`
      );
      const json = await res.json();
      navigate("/pesquisa", { state: json });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={props.estado ? 'conteiner-home' : ''}>
      <div className={
        props.estado === undefined
          ? 'bodi-painel'
          : props.estado
          ? 'bodi-painel'
          : ''
      }>  

        <div className='container-user'>
          <div className="dashboard">
            <h1>Dashboard do Utilizador</h1>

            <div className="user-card">
              <img className="foto-use" src={fotoUser} alt="Foto do utilizador" />

              <div className="user-info">
                <h2>Rui Miguel Fortes</h2>
                <p><strong>ID:</strong> {lista.id_anunciante}</p>
                <p><strong>Email:</strong> {lista.email}</p>
                <p><strong>Empresa:</strong> {lista.ilha}</p>
                <p><strong>Tipo:</strong> {lista.audit_user}</p>
                <span className="badge">Conta Ativa</span>
              </div>
            </div>
          </div>
        </div>

        <p className='titulo-homeuser'>O Portal rent a car de cabo verde</p>

        <label className='levant-titulo'>Preferências</label>

        <form onSubmit={RequestServidor}>
          <select
            className="fitro-locais-user"
            value={locais}
            name='locais'
            onChange={(e) => setLocais(e.target.value)}
          >
            <option value="" disabled>Anuncio</option>
            <option value="Pesquisar">Pesquisar</option>
            <option value="actualizar">Actualizar</option>
            <option value="remover">Remover</option>
            <option value="inserir">Inserir</option>
          </select>  

          <button className='butao' type='submit'>Pesquisar</button>
        </form>

        <img className='logos-home' src={audi} alt="Audi Logo" />
        <img className='logos-home' src={ford} alt="Ford Logo" />
        <img className='logos-home' src={hundai} alt="Hundai Logo" />
        <img className='logos-home' src={renault} alt="Renault Logo" />

      </div>
    </div>
  );
}
