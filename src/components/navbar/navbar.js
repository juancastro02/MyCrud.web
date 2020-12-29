import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { DataContext } from '../../context/DataContext'
import './navbar.css'

const Navbar = ({history}) => {
  
  const token = localStorage.getItem("token")
  const email = localStorage.getItem("email")
  const admin = localStorage.getItem("admin")
  const { dataUser } = useContext( DataContext )


  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    localStorage.removeItem("email");
    history.push('/login')

  }


    return (
 <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="https://static.wixstatic.com/media/4ee5b4_da8d00ffc4864c87bead48ea67f17589.png" width="60" height="44" className="imgWorld d-inline-block align-top" alt="" />
                   <span className='GreenSpan' >Green</span> <span className='BlackSpan' >World</span> 
                </Link>
  <button className="nav navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="nav collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      {
      email && <li className="nav-item active" style={{paddingTop: "10px", paddingRight: "10px"}} >
         <h5>Bienvenido { dataUser.email || email }</h5>
        </li>
      }
     
      <li className=" nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"></path></svg>
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to='/' >
              Home 
          </Link>
        {
          admin  &&  <Link className="dropdown-item" to='/create' >
          Crear un producto 
          </Link>
        }  

        {
          admin  &&  <Link className="dropdown-item" to='/update' >
          Modificar un producto 
          </Link>
        }  

        {
          admin  &&  <Link className="dropdown-item" to='/delete' >
          Eliminar un producto
          </Link>
        }  


        {
          !token &&  <Link className="dropdown-item" to='/login' >
          Login 
          </Link>
        }  
        {
          token &&  <Link className="dropdown-item" onClick={() => cerrarSesion()}  >
          Cerrar sesión
          </Link>
        } 

        </div>
      </li>
    </ul>
  </div>
</nav>

 </div>
    )
}

export default Navbar
