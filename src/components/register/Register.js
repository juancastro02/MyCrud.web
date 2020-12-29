import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

import '../../styles.css'

const Register = ({history}) => {

  const token = localStorage.getItem("token")

  useEffect(() => {
   
    if( token){
      history.push('/')
    }
    
  })

  const [msj,setMsj] = useState(false)
  const [notificacion, SetNot] = useState({
    message: "",
    clase: ""
  })  

const [users, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });
const [err, setError] = useState(false)
const [passwordErr, setPassword] = useState(false)  

const { email, password, passwordConfirm } = users;


const { message, clase } = notificacion

  const OnChange = (e) => {
    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });

    setError(false)
    setPassword(false)
    SetNot({
      message: "",
      clase: ""
  })
   
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
      axios.post('http://localhost:4000/user/create', users)
      .then((user) => {

        SetNot({
          message: user.data.message,
          clase: "text-center text-success mb-1'"
      }) 
      setMsj(true)
      })
      .catch((err) => {
        SetNot({
          message: err.response.data.message,
          clase: "text-center text-danger mb-1'"
      }) 
      // message = err.response.data.message
    
      setMsj(true)
      })
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
      {msj && <div className='mx-auto text-center'><span className={clase}>{message}</span></div>}
        <Link to={'/login'} className="enlace-cuenta">
               Tenes una cuenta? Inicia Sesión
        </Link>
      </div>
     
    </div>   
 )

}

export default Register