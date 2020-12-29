import React,{useState} from 'react'
import axios from 'axios'
import '../../styles.css'

const Reset = ({id}) => {

const [user, setUser] = useState({
    password: "",
    passwordConfirm: ""
  });
const [err, setError] = useState(false)
const [msj,setMsj] = useState(false)
const [notificacion, SetNot] = useState({
    message: "",
    clase: ""
})

const { message, clase } = notificacion
const { password, passwordConfirm } = user;


  const OnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(false)
    SetNot({
        message:"",
        clase: ""
    }) 
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(!password || !passwordConfirm )
    return setError(true)
  };

  const handleSend = () => {
    if(password && passwordConfirm ){
      
        axios.post(`http://localhost:4000/user/reset/${id}`, user)
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

        <h1 style= {{textAlign: "center"}}>Cambiar contraseña</h1>
           <br/>
           <form onSubmit={onSubmit}>
           <h4 htmlFor="password" > Contraseña </h4>
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

          <h4 htmlFor="password" > Confirmar contraseña</h4>
          <div className="campo-form">
      
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirmar contraseña"
              value={passwordConfirm}
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

export default Reset