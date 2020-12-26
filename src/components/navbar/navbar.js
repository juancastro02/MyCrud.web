import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
 <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="https://static.wixstatic.com/media/4ee5b4_da8d00ffc4864c87bead48ea67f17589.png" width="60" height="44" className="imgWorld d-inline-block align-top" alt="" />
                   <span className='GreenSpan' >Green</span> <span className='BlackSpan' >World</span> 
                </Link>
  <button class="nav navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="nav collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
     
      <li class=" nav-item dropdown">
        <Link class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fillRule="evenodd" d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"></path></svg>
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <Link class="dropdown-item" to='/' >
              Home 
          </Link>
          <Link class="dropdown-item" to='/login' >
              Login 
          </Link>

        </div>
      </li>
    </ul>
  </div>
</nav>

 </div>
    )
}

export default Navbar
