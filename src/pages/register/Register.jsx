import React, { useState } from 'react'
import { useRef } from 'react'
import "./register.scss"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
      setEmail(emailRef.current.value)
    };
    const handleFinish = () => {
      setPassword(passwordRef.current.value)
    };

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">


          <img className='logo' src="img/geeksfilx.png" alt="" />
          <button className="loginButton">Iniciar sesión</button>
        </div>
      </div>
      <div className="container">
        <h1>Todas las películas y series que desees, y mucho más.
</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
        <p>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>
        {!email ? (
            <div className="input">
              <input type="email" placeholder='Iniciar sesión' ref={emailRef}/>
              <button className="registerButton" onClick={handleStart}>Empezar</button>
            </div>
        ) : (<form className="input">
        <input type="password" placeholder='Contraseña' ref={passwordRef}/>
        <button className="registerButton" onClick={handleFinish}>Empezar</button>
      </form>)}
      </div>
    </div>
  )
}
