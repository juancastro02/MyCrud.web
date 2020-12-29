import React,{useState, useContext, useEffect} from 'react'
import { DataContext } from '../../../context/DataContext'
import axios from 'axios'
import '../admin.css'

const DeleteProduct = ({history}) => {



  const admin = localStorage.getItem("admin")

  useEffect(() => {
    if( !admin ){ 
      history.push('/')
    }
  })


// const [msj,setMsj] = useState(false)
const [producto, setproducto] = useState({
    id: ""
})
const [notificacion, SetNot] = useState({
    message: "",
    clase: ""
})

const { message, clase } = notificacion
const { products } = useContext( DataContext )


  const handleSend = () => {

        axios.delete(`http://localhost:4000/product/${producto.id}`)
        .then((product) => {
            SetNot({
                message: product.data.message,
                clase: "text-center text-success mb-1'"
            }) 
          

        })
        .catch((err) => {
            SetNot({
                message: err.response.data.message,
                clase: "text-center text-danger mb-1'"
            }) 

        })
     
  }


  const handleSearch = (id) => {

    setproducto({
        id: id
    })
  }

 return (
    <div style={{paddingTop: "0"}} className="formTabla">
<table className="table">
  <thead style={{backgroundColor: "black", color: "white"}} className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody style={{backgroundColor: "white", color: "black"}} >
    
    {products[0] && products.map((producto) => (

    <tr key={producto.id} >
      <th scope="row">{producto.id}</th>
      <td>{producto.nombre}</td>
      <td>{producto.tipo_moneda + " " + producto.valor}</td>
      <td> 
      <button type="button" onClick={() => handleSearch(producto.id)} className="btn-admin btn-danger" data-toggle="modal" data-target="#exampleModal">
        Eliminar
      </button>
      </td>
    </tr>


    ))}

  </tbody>
</table>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Estas seguro de eliminar este producto?</h5>

      </div>
      <div className="modal-body">
        Se eliminara todos los datos del producto de la base de datos.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Volver</button>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#showModal" data-dismiss="modal" onClick={handleSend} >Si, eliminar</button>
      </div>
    </div>
  </div>
</div>





<div className="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="showModal" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">

      <div className="modal-body">
   <span className={clase}>{message}</span>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
     
    </div>   
 )

}

export default DeleteProduct