import React, {useState, useContext} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataContext'
import './Register.css'

const Register = () => {

const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });
const [err, setError] = useState(false)
const [passwordErr, setPassword] = useState(false)  

const { email, password, passwordConfirm } = user;

const { RegisterUser } = useContext( DataContext )

  const OnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setError(false)
    setPassword(false)
   
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email || !password || !passwordConfirm)
    return setError(true)
    if(password !== passwordConfirm)
    return setPassword(true)
  };

  const handleCreate = () => {
    if(email && password && passwordConfirm && password === passwordConfirm){
      RegisterUser(user)
    }
  }

 return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">

        <h1 style= {{textAlign: "center"}}>Crear una cuenta</h1>
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
              placeholder="Password"
              value={password}
              onChange={OnChange}
            />
          </div>

          <h4 htmlFor="password"> Repetir contraseña </h4>
          <div className="campo-form">
            
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Repetir contraseña"
              value={passwordConfirm}
              onChange={OnChange}
            />
          </div>

          <input
            value='Enviar'
            type="submit"
            className="btn btn-primario btn-block"
            onClick={(e)=>handleCreate(e)}
          />
        </form>
        <br/>
      {err && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>Los campos son obligatorios</span></div>}
      {passwordErr && <div className='mx-auto text-center' ><span className='text-center text-danger mb-1'>Las contraseñas no coinciden</span></div>}
        <Link to={'/login'} className="enlace-cuenta">
               Tenes una cuenta? Inicia Sesión
        </Link>
      </div>
     
    </div>   
 )

}

export default Register