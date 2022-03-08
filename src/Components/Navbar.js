import React from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import {  Link } from "react-router-dom";


function Navbar() {
    const {logoutUser,user } = useContext(AuthContext)

   const loggedin = () =>{
     return localStorage.getItem('authTokens') 
   }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">LIVRE</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      { user ? (  <li className="nav-item active">
          <a className="nav-link"  onClick={logoutUser}>Logout </a>
        </li>) : 
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        }
        <li className="nav-item dropdown">
        <Link className="nav-link" to="/"> Books </Link>
         </li>
         <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar