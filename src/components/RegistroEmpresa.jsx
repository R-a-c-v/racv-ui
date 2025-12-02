import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";

export default function RegistroEmpresa() {
  const navigacao = useNavigate();

  // Estados para cada campo
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [link, setLink] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [ilha, setIlha] = useState("");
  const [descricao, setDescricao] = useState("");
  const [concelho, setConcelho] = useState("");
  const [horario_funcionamento, setHorarioFuncionamento] = useState("");
  const [tipo, setTipo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [audit_user, setAuditUser] = useState("");
  const [audit_timestamp, setAuditTimestamp] = useState("");

  // Função para enviar o formulário
  const autenticacaoEmpresa = async (e) => {
    e.preventDefault(); // evita reload da página

    try {
      const res = await fetch("http://localhost:5000/autenticacao", {
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
    }
  };

  return (
    <div className="tela-btn">
      <div className="registo-empresa">
        <h2>Registo da Empresa</h2>

        <form onSubmit={autenticacaoEmpresa}>
          <div className="campo">
            <label htmlFor="nome">Nome da empresa</label>
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
              <label htmlFor="nif">NIF</label>
              <input
                id="nif"
                type="text"
                name="nif"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>

            <div className="campo">
              <label htmlFor="email">Email da empresa</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="linha-dupla">
            <div className="campo">
              <label htmlFor="telefone">Telefone</label>
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
              />
            </div>
          </div>

          <div className="campo">
            <label htmlFor="morada">Endereço</label>
            <input
              id="morada"
              type="text"
              name="morada"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="documento">Documento da empresa (certidão / alvará)</label>
            <input
              id="documento"
              type="file"
              name="documento"
              onChange={(e) => setFoto(e.target.files[0])}
            />
          </div>

          <button type="submit">Registar</button>
        </form>
      </div>
    </div>
  );
}
