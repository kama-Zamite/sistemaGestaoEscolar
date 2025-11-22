import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Login.module.css";
import logo from "../img/Logo.png"
import Conteudo from "../img/Estad.png"
export default function Login() {
  const [nome, setNome] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();

    // if (!nome || !pw) {
    //   alert("Algum campo está vazio");
    //   return;
    // }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ nome }));
      navigate("/dashboard");
    }, 1200);
  }

  return (
    <div className={Styles.app}>
        <div className={Styles.LoginLift}>
          {/* <div>Conteudo</div>  */}
          <img className={Styles.Conteudo} src={Conteudo} />        
        </div>
        <div className={Styles.LoginRaght}>
          <div className={Styles.Logo}>
              <img className={Styles.logo} src={logo}/>  
              <h1>UNIVERSITY SGE</h1>
              <p className={Styles.LoginParagrafo}>STUDENT PANEL</p>
          </div>
          <form className={Styles.Form} onSubmit={handlesubmit}>
            <input
              className={Styles.input} 
              type="email" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu email"
            />
            <input 
              className={Styles.input} 
              type="password" 
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="DIgite sua password"
            />

            <div className={Styles.Remember}>
              <div className={Styles.RememberPassword}>
                <input type="checkbox" id="checkbox" />
                <a href="">Remember me</a> 
              </div>
              <p>Forgot Password?</p>
            </div>
            <div className={Styles.btn}>
              {/* <button className={Styles.btnSigin}>Sign in</button> */}
              <button className={Styles.btnSigin} type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Sign in"}
              </button>
            </div>
          </form>     
        </div>
    </div>
  );
}

{/* <h1>SGE</h1> */}
{/* <p>Acesse a sua conta</p> */}

{/* <form onSubmit={handlesubmit}>
  <div className={Styles.group}>
    <label htmlFor="nome">Usuário</label>
    <input
      type="text"
      id="nome"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      placeholder="Digite seu nome"
    />
  </div>

  <div className={Styles.group}>
    <label htmlFor="pw">Senha</label>
    <input
      type="password"
      id="pw"
      value={pw}
      onChange={(e) => setPw(e.target.value)}
      placeholder="Digite sua senha"
    />
  </div>

  <button type="submit" disabled={loading}>
    {loading ? "Entrando..." : "Entrar"}
  </button>

  <p className={Styles.link}>Esqueceu sua senha?</p>
</form> */}