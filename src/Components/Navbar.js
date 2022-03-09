import React, { useState ,useEffect } from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import {  Link } from "react-router-dom";
import { axiosInstance } from '../utils/axiosInstance';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'


function Navbar() {
    const {logoutUser,user } = useContext(AuthContext)
    const loggedin = () =>{
      return localStorage.getItem('authTokens') 
    }
    const [adminuser, setAdminuser] = useState(false); 
    
    useEffect(() => {
      axiosInstance.get("/profile").then(
        (res) => { 
          console.log(res.data.is_admin)
          setAdminuser(res.data.is_admin)
        }
      )
    }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">LIVRE</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      { user ?  <li className="nav-item active">
          <a className="nav-link"  onClick={logoutUser}> Logout </a>
        </li> : 
        <><li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li><li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li></>
        }
        <li className="nav-item dropdown">
        <Link className="nav-link" to="/"> Books </Link>
         </li>
         
        {adminuser && (
          <li className="nav-item">
          <Link className="nav-link" to="/adminmanage">Manage</Link>
        </li>
        )}
        { user ? 
        <>
         <li className="nav-item dropdown">
        <Link className="nav-link" to="/addbook"> Add Book </Link>
         </li>
        <li className="nav-item">
              <Link className="nav-link" to="/messages"> Messages</Link>
            </li><li className="nav-item">
                <Link className="nav-link" to="/main-profile">Profile</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/transactions">Transactions</Link>
              </li></>  : null
        }
      </ul>
    </div>
  </nav>
  )
}

export default Navbar;
