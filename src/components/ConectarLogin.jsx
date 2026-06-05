import { useState} from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import {useEffect} from 'react'
import "../styles/app.css";
import {useRef} from 'react'

import DivEspaco from "./DivEspaco";

export default function ConectarLogin() {

const navigacao = useNavigate();
const { registo } = useLocation() ;
const data  = useLocation() ;
const dados  = useLocation() ;
// Estados para cada campo
const fechar = useRef()
const location = useLocation()
const [mostrar , setMostrar] = useState(false)
const [password, setPassword] = useState(""); 
const [senha, setSenha] = useState("");  
const [novaSenha, setNovaSenha] = useState("");  
const [conflitoSenha, setConflitoSenha] = useState();
const [conflitoEmail, setConflitoEmail] = useState();
const [nome, setNome] = useState("");
const [sexo, setSexo] = useState("");
const [telefone, setTelefone] = useState("");
const [link, setLink] = useState("");
const [email, setEmail] = useState("");
const [anunciante, setAnunciante] = useState("");
const [email_sistema, setEmailSistema] = useState("");
const [foto, setFoto] = useState("");
const [checkarLog, setCheckarLog] = useState("");
const [messagem, setMessagem] = useState("");

const [tipo, setTipo] = useState("");
useEffect(() => {
    if (location.pathname === "/registrar") 
    {
        setMostrar(true);  // abre quando navega para /registro
    } 
    else 
    {
        setMostrar(false); // fecha quando muda para outra rota
    }
}, [location.pathname]);


function fecharJanela()
{
    setMostrar(false)
    navigacao("/")
}

async function carregarDados() 
{
    const token = localStorage.getItem("token");
    

    const res = await fetch("http://localhost:5000/painelinfo", {
    headers: {
        "Authorization": `Bearer ${token}`
    }});
    const resposta = await res.json()
    localStorage.setItem("dados", JSON.stringify(resposta.resposta))
}
                  

function requestLogin(e)
{  
    e.preventDefault()

    async function loginUser() 
    {   
        try
        {
            const resposta = await fetch(`http://localhost:5004/login?email=${email}&senha=${senha}`,{method: "POST"})
            const dataJson = await resposta.json()    
                    
            if (resposta.status == 201)
            {
               
                console.log()
                setCheckarLog(true)
                console.log(dataJson)
                setMessagem(dataJson.messagem)
                localStorage.setItem("token",dataJson.token)
                carregarDados()
                console.log("login",dataJson.token)
                navigacao("/painel")
            }
        }
        catch(error) 
        {
            console.log(error)
        }
    }

    loginUser()
}

return ( 
    <form onSubmit={requestLogin}>  
      <div className='tela-btn' ref={fechar} >   
        <button className='x-btn'  onClick={fecharJanela}>X</button> 
        <h1>Login</h1>
        <button className='facebook-btn'>Facebook</button>
        <button className='google-btn' >Google</button>
          
        <div className="campo">
            <label>Email</label> <br/>
            <input type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} required/>
            {conflitoEmail&&<div className={{ color:'red'}} >Emails repetidos</div>}
        </div>

        <div className="campo">
            <label>Password</label><br/>
            <input type="password" checked={senha} onChange={(e)=>(setSenha(e.target.value))} required />
        </div>
        {checkarLog&&<div>{messagem}</div>}
        <button type='submit'>Entrar</button>
        <p>Don't have an account?<br/> <a>Sign Up</a></p>
      </div>  
    </form>
  );
}
