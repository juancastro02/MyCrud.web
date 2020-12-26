import React,{useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataContext'
import './Login.css'

const Login = () => {
const [user, setUser] = useState({
    email: "",
    password: ""
  });
const [err, setError] = useState(false)

const { email, password } = user;

const { LoginUser } = useContext( DataContext )

  const OnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(false)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email || !password)
    return setError(true)
  };

  const handleLogin = () => {
    if(email && password){
      LoginUser(user)
    }
    
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
        <br/>
        {err && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>Los campos son obligatorios</span></div>}
          <Link to={"/register"} className="enlace-cuenta">No tenes cuenta? Registrate</Link>
          <Link to={"/forgot"} className="enlace-cuenta">Olvidaste tu contraseña?</Link>
      </div>
     
    </div>   
 )

}

export default Login