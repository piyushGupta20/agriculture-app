import React from 'react'
import logo from '../Assets/images.png'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid d-flex justify-content-between p-3">
     <div>
        {/* <img src="./Assets/images.png" alt="error" width="100px"/> */}
        <Link to="/" className='nav-link fs-4'>
        <img src="https://static.allservicepoint.com/upload/Add/5cc7eac65df33.png" alt="" width = {50} />
     <a className="navbar-brand fs-2" href="#" >
        कृषि मित्र
        </a>
          </Link>
        
     </div>
     <div>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/" className='nav-link fs-4'>Home</Link>

          </li>
          <li className="nav-item">
             <Link to="/products" className='nav-link fs-4'>Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className='nav-link fs-4'>About</Link>
          </li>
          <li className="nav-item">
          <Link to="/signup" className='nav-link fs-4'>sign up</Link>
          </li>
          <li className="nav-item">
          <Link to="/user" className='nav-link fs-4'><i className="fa fa-user" aria-hidden="true"></i></Link>
          </li>
        </ul>
      </div>
     </div>
     
    </div>
  </nav>
  )
}

export default Navbar