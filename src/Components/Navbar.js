import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faBars,faBook, faMessage,faUser, faAlignCenter} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState([]);
  const [resulte, setResulte] = useState(
    []
  );
  const params = useParams();
  console.log(resulte);
  const { logoutUser, user } = useContext(AuthContext);
  const loggedin = () => {
    return localStorage.getItem("authTokens");
  };
  const [adminuser, setAdminuser] = useState(false);
  useEffect(() => {
    axiosInstance.get("/profile").then((res) => {
      console.log(res.data.is_admin);
      setAdminuser(res.data.is_admin);
    });
    
  }, []);
  return(

<>
<div className="container-fluid con">
  <div className="row navbar fixed-top navbar-light bg-light">
    <div className="col-4">
    <nav className="nav">
    <li className="nav-item liv"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></li>
    <Link className="nav-item liv" to="/">Livre</Link> 
     
     <div className="for">
     <form className="d-flex input-group w-auto ">
        <input
          
          type="search"
          style={{ height: "2em" ,width:"7em", backgroundColor:"-moz-initial", marginRight:"0"}}
          className="form-control ser"
          placeholder="search"
          aria-label="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link
          className="btn btn"
          type="button"
          to={"/search/" + searchValue}
          
          style={{ color: "#2c9db7", width: "3.5em",  backgroundColor:"#f8f9fA" ,height:"4.8vh" ,marginTop:"7%" , marginLeft:"3%", padding:"1%"}}
        >
          <span style={{ color: "#2c9db7", fontSize:"1.5em" ,marginTop:"0%", fontWeight:"bolder" ,alignItem:"center"}}>
           
           <FontAwesomeIcon icon={faMagnifyingGlass} />
           
           </span>
        </Link>
      </form>
      </div>
      </nav>
    </div>

  <div className="col-4">
  <ul className="nav justify-content-center" >
  <li className="nav-item"  >
  <Link className="nav-link" to="/" style={{color:"#2c9db7" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Home </Link> 
  </li>
  <li className="nav-item ">
  <Link className="nav-link" to="/category" style={{color:"#2c9db7" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Categories </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/contactus" style={{color:"#2c9db7" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Contactus</Link>  
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/Who we are" style={{color:"#2c9db7" ,fontFamily:"cursive" ,fontWeight:"bolder"}}> who we are</Link>
  </li>
</ul>
    </div>
     
 <div className="col-4"  >
    <ul className="nav justify-content-end" style={{marginRight:"1%" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>
  {user ? (
   <>
  <li className="nav-item"> <Link className="nav-link" to="/main-profile"  style={{color:"#2c9db7", fontSize:"1.9vw"}}>
  <FontAwesomeIcon icon={faUser} /></Link></li>

  <li className="nav-item"> <Link className="nav-link" to="/messages"  style={{color:"#2c9db7", fontSize:"2vw"}}>          
  <FontAwesomeIcon icon={faMessage}/> </Link></li>

  <li className="nav-item"><Link className="nav-link" to="/transactions"  style={{color:"#2c9db7", fontSize:"2vw"}}>
  <FontAwesomeIcon icon={faBook}/></Link></li>
  </>
 ) : null}

    {!user ? (
   <>
  <li className="nav-item"><Link className="nav-link btn btn-info btn-lg"  style={{color:"#ffffff", marginTop:"7%"}} to="/register" >
                signup
              </Link></li>

              </>
 ) : null}
{/* style={{color:"GrayText", margin:"6%" ,fontWeight:"bolder", fontSize:"1.5vw"}}> */}
      {user ? (
     <li className="nav-item active">
      <a className="nav-link" onClick={logoutUser} >
           Logout
      </a>
      </li>
     ) : (
      <li className="nav-item btn btn">
     <Link className="nav-link btn btn-secondary btn-lg "  style={{color:"#ffffff" }} to="/login " >
          Login
       </Link>
        </li>
  )}

{adminuser && (
    <li className="nav-item">
      <Link className="nav-link" to="/adminmanage" style={{color:"#2c9db7" }}>
        Manage
      </Link>
    </li>
  )}  
</ul>
    </div> 
   </div>
</div>
</>
)}