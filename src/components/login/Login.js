import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {

// State para iniciar sesión
const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const OnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
   
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    console.log(user)
  }

 return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">

        <h1 style= {{textAlign: "center"}}>Iniciar Sesión</h1>
           <br/>
           <form onSubmit={onSubmit}>
           <h4 htmlFor="email" > Email </h4>
          <div className="campo-form">
      
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={OnChange}
            />
          </div>
          <h4 htmlFor="password">Contraseña </h4>
          <div className="campo-form">
            
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={OnChange}
            />
          </div>

          <input
            value='Enviar'
            type="submit"
            className="btn btn-primario btn-block"
            onClick={(e)=>handleLogin(e)}
          />
        </form>
          <Link to={"/register"} className="enlace-cuenta">No tenes cuenta? Registrate</Link>
          <Link to={"/forgot"} className="enlace-cuenta">Olvidaste tu contraseña?</Link>
      </div>
     
    </div>   
 )

}

export default Login