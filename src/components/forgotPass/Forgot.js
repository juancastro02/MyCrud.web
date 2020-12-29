import React,{useState} from 'react'
import axios from 'axios'
import '../../styles.css'

const ForgotPass = () => {

const [user, setUser] = useState({
    email: ""
  });
const [err, setError] = useState(false)
const [msj,setMsj] = useState(false)
const [notificacion, SetNot] = useState({
    message: "",
    clase: ""
})

const { message, clase } = notificacion
const { email } = user;

  const OnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(false)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!email )
    return setError(true)
  };

  const handleSend = () => {
    if(email){
      
        axios.post('http://localhost:4000/user/forgot', user)
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

        <h1 style= {{textAlign: "center"}}>Ingrese su email </h1>
           <br/>
           <form onSubmit={onSubmit}>
           <h4 htmlFor="email" > Email</h4>
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
         
          <input
            style={{backgroundColor: "black", color: "white"}}
            value='Enviar'
            type="submit"
            className="btn btn-primario btn-block"
            onClick={(e)=>handleSend(e)}
          />
        </form>
        <br/>
        {err && <div className='mx-auto text-center'><span className='text-center text-danger mb-1'>Los campos son obligatorios</span></div>}
 {msj && <div className='mx-auto text-center'><span className={clase}>{message}</span></div>}
      </div>
     
    </div>   
 )

}

export default ForgotPass