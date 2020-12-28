import React,{useState, useContext, useEffect} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataContext'
import axios from 'axios'
import '../../styles.css'

const Login = ({history}) => {


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

const { message, clase } = notificacion
const [users, setUser] = useState({
    email: "",
    password: ""
  });
const [err, setError] = useState(false)

const { email, password } = users;

 const { setDataUser } = useContext( DataContext )


  const OnChange = (e) => {
    setUser({
      ...users,
      [e.target.name]: e.target.value,
    });
    setError(false)
    SetNot({
      message: "",
      clase: ""
  })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email || !password)
    return setError(true)
  };

  const handleLogin = () => {
    if(email && password){
      axios.post('http://localhost:4000/user/login', users)
        .then((user) => {
          SetNot({
            message: user.data.message,
            clase: "text-center text-success mb-1'"
        })  
            localStorage.setItem("token", user.data.token)
            localStorage.setItem("email", user.data.email)
            if(user.data.admin === 1){
              localStorage.setItem("admin", user.data.admin)
            }
            

            setDataUser({
                "id": user.data.id,
                "admin": user.data.admin,
                "email": user.data.email,
                "token": user.data.token
            })
            setMsj(true)
        })
        .catch((err) => {
          SetNot({
            message: err.response.data.message,
            clase: "text-center text-danger mb-1'"
        }) 
        // message = err.response.data.message
        console.log(err)
        setMsj(true)
        })
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
        {msj && <div className='mx-auto text-center'><span className={clase}>{message}</span></div>}
          <Link to={"/register"} className="enlace-cuenta">No tenes cuenta? Registrate</Link>
          <Link to={"/forgot"} className="enlace-cuenta">Olvidaste tu contraseña?</Link>
      </div>
     
    </div>   
 )

}

export default Login