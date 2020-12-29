import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './data.css'
import '../Home/Home.css'

const Data = ({id}) => {

    const [product, setproduct] = useState([])

    const getData = () => {
        axios.get(`http://localhost:4000/product/${id}`)
        .then((producto) => {
            setproduct(producto.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getData()
    })

    return ( 
        <div className='backgroung' style={{paddingTop: "5rem"}} >
<div className="card mb-3 contenedorCard"  >

  <img className="card-img-top " style={{width: "20rem", height: "20rem"}} src={product[0] && product[0].imagen} alt=".." />
  <div className="card-body">
    <h5 className="card-title">{product[0] && product[0].nombre}</h5>
    <p className="card-text">{product[0] && product[0].descripcion}</p>
    <p className="card-text">{product[0] && product[0].tipo_moneda + " " +product[0].valor}</p>
    <p className="card-text"><small className="text-muted">Categoria: {product[0] && product[0].categoria}</small></p>
    <Link to='/' >
    <button type="button" className="btn btn-danger boton">Volver</button>
    </Link>
  </div>

</div>
        </div>
    )
}

export default Data