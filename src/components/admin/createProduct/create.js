import React,{useState, useEffect} from 'react'

import axios from 'axios'
import '../admin.css'

const CreateProduct = ({history}) => {



  const admin = localStorage.getItem("admin")

  useEffect(() => {
    if(  !admin ){
      history.push('/')
    }
  })

const [product, setProduct] = useState({
  nombre: "",
  descripcion: "",
  valor: 0,
  tipo_moneda: "",
  categoria: "",
  imagen: ""
  });

const [err, setError] = useState(false)
const [msj,setMsj] = useState(false)
const [notificacion, SetNot] = useState({
    message: "",
    clase: ""
})

const { message, clase } = notificacion
const { nombre, descripcion, valor, tipo_moneda, categoria, imagen } = product;

  const OnChange = (e) => {
    setProduct({
      ...product,
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
    if(!nombre || !descripcion || !valor || !tipo_moneda || !categoria || !imagen )
    return setError(true)
  };

  const handleSend = () => {
    if(nombre && descripcion && valor && tipo_moneda && categoria && imagen){

      const data = {
        nombre: nombre,
        descripcion: descripcion,
        valor: Number(valor),
        tipo_moneda: tipo_moneda,
        categoria: categoria,
        imagen: imagen
      }

        axios.post('http://localhost:4000/product', data)
        .then((product) => {
            SetNot({
                message: product.data.message,
                clase: "text-center text-success mb-1'"
            }) 
            setProduct({ 
              nombre: "",
              descripcion: "",
              valor: 0,
              tipo_moneda: "",
              categoria: "",
              imagen: ""
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
    <div className="formAdmin">
      <div className="contenedor-formaAdmin sombra-dark">

        <h1 style= {{textAlign: "center"}}> Crear productos </h1>
           <br/>
           <form onSubmit={onSubmit}>
           <h4 htmlFor="text" > Nombre del producto</h4>
          <div className="campo-form">
      
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="nombre"
              value={nombre}
              onChange={OnChange}
            />
          </div>

          <h4 htmlFor="text" > Descripcion del producto</h4>
          <div className="campo-form">
      
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              placeholder="descripcion"
              value={descripcion}
              onChange={OnChange}
            />
          </div>

          <h4 htmlFor="number" > Precio del producto en USD</h4>
          <div className="campo-form">
      
            <input
              type="number"
              id="valor"
              name="valor"
              placeholder="valor"
              value={valor}
              onChange={OnChange}
            />
          </div>

          <h4 htmlFor="text" > Tipo de moneda </h4>
          
          <span>La conversión de la moneda se hace automaticamente</span>
          <br/>
          <br/>
          <div className="campo-form">
      
        
  <input class="form-check-input" type="radio" onChange={OnChange} name="tipo_moneda" id="USD" value="USD"/>
  <label class="form-check-label" for="USD"> USD </label>


  <input class="form-check-input" type="radio" onChange={OnChange} name="tipo_moneda" id="EUR" value="EUR" />
  <label class="form-check-label" for="EUR"> EUR </label>
          </div>

          <h4 htmlFor="text" > Categoria del producto </h4>
          
          <div className="campo-form">
      
        
  <input class="form-check-input" type="radio" onChange={OnChange} name="categoria" id="Fruta" value="Fruta"/>
  <label class="form-check-label" for="Fruta"> Fruta </label>


  <input class="form-check-input" type="radio" onChange={OnChange} name="categoria" id="Verdura" value="Verdura" />
  <label class="form-check-label" for="Verdura"> Verdura </label>
          </div>

          <h4 htmlFor="text" > URL de la imagen del producto</h4>
          <div className="campo-form">
      
            <input
              type="text"
              id="imagen"
              name="imagen"
              placeholder="imagen"
              value={imagen}
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

export default CreateProduct