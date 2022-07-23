import "./login.scss"

export default function Login() {

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
          <img className='logo' src="img/geeksfilx.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Iniciar sesión</h1>
          <input type="email" placeholder="Correo electrónico o número de teléfono"/>
          <input type="password" placeholder="Contraseña"/>
          <button className="loginButton">Iniciar sesión</button>
          <span>¿Todavía sin Netflix? <b>Suscríbete ya.</b></span>
          <small>
          Esta página utiliza Google reCAPTCHA para garantizar que no eres un robot. <b>Más información</b>.
          </small>
        </form>
      </div>
    </div>
  )
}


