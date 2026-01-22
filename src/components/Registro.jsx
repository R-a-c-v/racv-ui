import {useState} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useNavigate,useLocation} from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import RegistroEmpresa from '../components/RegistroEmpresa'
import '../styles/app.css'

export default function Registro( props){
const navigacao = useNavigate();
const { dataLogin} = useLocation() || {};
const fechar = useRef()
const divRef = useRef()
const location = useLocation()
const [mostrar , setMostrar] = useState(false)
const [tipo, setTipo] = useState("");  
const [password, setPassword] = useState("");  
const [email, setEmail] = useState("");  
const [senha, setSenha] = useState("");  
const [novaSenha, setNovaSenha] = useState("");  
const [auditUser, setAuditUser] = useState("");  
const [conflitoSenha, setConflitoSenha] = useState();
const [conflitoEmail, setConflitoEmail] = useState();

props.setestado(false)

 useEffect(() => {
    if (location.pathname === "/Login") {
    setMostrar(true);  // abre quando navega para /registro
  } else {
    setMostrar(false); // fecha quando muda para outra rota
  }
}, [location.pathname]);

function registroFuncao(e)
{
    e.preventDefault()
    async function autenticacao(e) 
    {
    
        setAuditUser(tipo) 
        try 
        {
            const res = await fetch(`http://localhost:5000/registar?senha=${senha}&email=${email}&senha_repetida=${novaSenha}&audit_user=${auditUser}`,{method: "POST"});
            
            const json = await res.json()
            
            if (res.status == 201)
            {
                if (tipo == "Empresa"){
                    navigacao("/registrar",{state:{email:email, user: tipo} } )
                }
                else if (tipo == "Individual"){
                    navigacao("/")
                    alert("Conta criada com sucesso. Certifique-se de manter os seus dados de acesso em segurança.")
                }
            }
            else if ( res.status < 200 || res.status > 300  )
            {
                if (json.email)
                {   
                    setConflitoEmail(true)  
                }
                else
                {
                    setConflitoEmail(false)  
                
                }
                
                if(json.senha)
                {   
                    setConflitoSenha(true)
                }
                else
                {
                    setConflitoSenha(false)    
                }
                
            }
            else
            {   
                alert("Conta não foi criada com sucesso.Repetir o processo")
            }
            
        }
        catch(error) 
        {
            console.error();
        }
    }
    autenticacao()
}
function fecharJanela(){
    setMostrar(false)
    navigacao("/")
}

return (
    <div>
    { mostrar && (
        <form onSubmit={registroFuncao}>  
            <div className='tela-btn' ref={fechar} >   
                <button className='x-btn'  onClick={fecharJanela}>X</button> 
                <h1>Registar</h1>
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

                <div className="campo">
                    <label>Confirme a sua senha</label><br/>
                    <input type="password"  value={novaSenha} onChange={(e)=>(setNovaSenha(e.target.value))}  required />
                    {conflitoSenha&&<div className={{ color:'red'}}>Senhas Não iguais</div>}
                </div>
                    <label>Tipo de conta </label><br/>

                <div className="campo">
                    <select value={tipo} onChange={(e)=>(setTipo(e.target.value))} required >
                        <option  value="" disabled>Escolhe</option>
                        <option value="Empresa">Empresa</option>  
                        <option value="Individual">Individual</option>  
                    </select>
                </div>
                <button type='submit'>Entrar</button>
                <p>Don't have an account?<br/> <a>Sign Up</a></p>
            </div>
            
        </form>)
 }
        
 </div>
)

}