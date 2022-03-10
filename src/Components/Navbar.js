import {React,  useState ,useEffect } from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faUser} from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './Navbar.css';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { axiosInstance } from '../utils/axiosInstance';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

export default function Navbar() {
    const {logoutUser,user } = useContext(AuthContext)
    const loggedin = () =>{
      return localStorage.getItem('authTokens') 
    }
    const [adminuser, setAdminuser] = useState(false); 
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    useEffect(() => {
      axiosInstance.get("/profile").then(
        (res) => { 
          console.log(res.data.is_admin)
          setAdminuser(res.data.is_admin)
        }
      )
    }, [])
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  return (
    <div>
      <h1>hello</h1>
    </div>



//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <Link className="navbar-brand" to="/">LIVRE</Link>
//     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
  
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav mr-auto">
//       { user ?  <li className="nav-item active">
//           <a className="nav-link"  onClick={logoutUser}> Logout </a>
//         </li> : 
//         <><li className="nav-item">
//               <Link className="nav-link" to="/login">Login</Link>
//             </li><li className="nav-item">
//                 <Link className="nav-link" to="/register">Register</Link>
//               </li></>
//         }
//         <li className="nav-item dropdown">
//         <Link className="nav-link" to="/books"> Books </Link>
//          </li>
         
//         {adminuser && (
//           <li className="nav-item">
//           <Link className="nav-link" to="/adminmanage">Manage</Link>
//         </li>
//         )}
//         { user ? 
//         <>
//          <li className="nav-item dropdown">
//         <Link className="nav-link" to="/addbook"> Add Book </Link>
//          </li>
//         <li className="nav-item">
//               <Link className="nav-link" to="/messages"> Messages</Link>
//             </li><li className="nav-item">
//                 <Link className="nav-link" to="/main-profile">Profile</Link>
//               </li><li className="nav-item">
//                 <Link className="nav-link" to="/transactions">Transactions</Link>
//               </li></>  : null
//         }
//       </ul>
//     </div>
//   </nav>
   )
 }


