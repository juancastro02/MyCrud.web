import React,{useState, useContext} from 'react'
import { DataContext } from '../../../context/DataContext'
import axios from 'axios'
import '../admin.css'

const UpdateProduct = () => {

const [product, setProduct] = useState({
  id: "",  
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

const { products } = useContext( DataContext )

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

  const handleSearch = (id, nombre, descripcion, valor, tipo_moneda, categoria, imagen) => {

    let valorMoneda;
    

    axios.get('https://api.exchangeratesapi.io/latest')
    .then((res) => {

        let valorEuro = res.data.rates.USD
          
       if( tipo_moneda === 'USD' )  valorMoneda = valor
       if( tipo_moneda === 'EUR' )  valorMoneda = Math.round((valor * valorEuro + Number.EPSILON) * 100) / 100 


       setProduct({
           id: id,
           nombre: nombre,
           descripcion: descripcion,
           tipo_moneda: tipo_moneda,
           valor: Number(valorMoneda),
           categoria: categoria,
           imagen: imagen
       })


    })

  }

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

        axios.put(`http://localhost:4000/product/${product.id}`, data)
        .then((product) => {
            SetNot({
                message: product.data.message,
                clase: "text-center text-success mb-1'"
            }) 
            setProduct({
              id: "",  
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
    <div style={{paddingTop: "0"}} className="formAdmin">
<table class="table">
  <thead style={{backgroundColor: "black", color: "white"}} class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Categoria</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody style={{backgroundColor: "white", color: "black"}} >
    
    {products[0] && products.map((producto) => (

    <tr key={producto.id} >
      <th scope="row">{producto.id}</th>
      <td>{producto.nombre}</td>
      <td>{producto.tipo_moneda + " " + producto.valor}</td>
      <td>{producto.categoria}</td>
      <td> <button type="button" onClick={() => handleSearch(producto.id, producto.nombre, producto.descripcion, producto.valor, producto.tipo_moneda, producto.categoria, producto.imagen)} class="btn-admin btn-warning">Modificar</button> </td>
    </tr>
    ))}

  </tbody>
</table>


      <div className="contenedor-formaAdmin sombra-dark">

        <h1 style= {{textAlign: "center"}}> Modificar productos </h1>
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
        
  <input  class="form-check-input" type="radio" onChange={OnChange} name="tipo_moneda" id="USD" value="USD"/>
  <label class="form-check-label" for="USD"> USD </label>


  <input   class="form-check-input" type="radio" onChange={OnChange} name="tipo_moneda" id="EUR" value="EUR" />
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

export default UpdateProduct