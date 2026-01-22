import { useState} from "react";
import { useNavigate,useLocation  } from "react-router-dom";
import "../styles/app.css";

export default function RegistroEmpresa() {

  const navigacao = useNavigate();
  const { registo } = useLocation() ;
  const data  = useLocation() ;

  // Estados para cada campo
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [email_sistema, setEmailSistema] = useState("");
  const [foto, setFoto] = useState("");
  const [ilha, setIlha] = useState("");
  const [descricao, setDescricao] = useState("");
  const [concelho, setConcelho] = useState("");
  const [horario_funcionamento, setHorarioFuncionamento] = useState("");
  const [tipo, setTipo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [audit_user, setAuditUser] = useState("");
  const [audit_timestamp, setAuditTimestamp] = useState("");
  
  console.log("11",data.state.dataLogin)
  console.log("11",data.state.user)

  // Função para enviar o formulário
  const autenticacaoEmpresa = async (e) => {
    e.preventDefault(); // evita reload da página
    setEmailSistema(data.state.email)
    setAuditUser(data.state.user)
    try {
      const res = await fetch("http://localhost:5001/anuncianteweb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          sexo,
          telefone,
          link,
          email,
          email_sistema: email_sistema,
          foto,
          ilha,
          descricao,
          concelho,
          horario_funcionamento,
          tipo,
          endereco,
          audit_user,
          audit_timestamp,
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert(
          "Conta criada com sucesso. Certifique-se de manter os seus dados de acesso em segurança."
        );
        navigacao("/");
      } else {
        alert(data.message || "Conta não foi criada com sucesso. Repetir o processo.");
      }
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao criar a conta.");
      navigacao("/");

    }
  };

    
  return (

    
    <div className="tela-btn">
      <div className="registo-empresa">
        <h2>Registo da Empresa</h2>

        <form onSubmit={autenticacaoEmpresa}>
          <div className="campo">
            <label htmlFor="nome">Nome da empresa </label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="linha-dupla">
            <div className="campo">
              <label htmlFor="nif">NIF </label>
              <input
                id="nif"
                type="text"
                name="nif"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">Email da empresa </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="linha-dupla">
            <div className="campo">
              <label htmlFor="telefone">Telefone </label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="website">Website oficial</label>
              <input
                id="website"
                type="url"
                name="website"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="campo">
            <label htmlFor="morada">Endereço </label>
            <input
              id="morada"
              type="text"
              name="morada"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
          <div className="campo">
            <label htmlFor="morada"> Ilha </label>
            <select
              id="morada"
              type="text"
              name="morada"
              value={ilha}
              onChange={(e) => setIlha(e.target.value)}
              required
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
          </div>
          <button type="submit">Registar</button>
        </form>
      </div>
    </div>
  );
}
