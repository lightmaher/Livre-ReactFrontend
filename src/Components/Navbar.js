import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faBars,faBook, faMessage,faUser, faAlignCenter,faArrowsRotate} from "@fortawesome/free-solid-svg-icons";
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

  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

// const closeMenu = () => setClick(false)
const [colors, setColors]=useState(false)
const changeColors = ()=>{
  if (window.scrollY >=90){
      setColors(true)
    } else {
    setColors(false)
  }
}
  window.addEventListener('scroll' ,changeColors)
  return(

<>

<div className={colors ? 'header header-bg con': 'header con'}>
  <div className="row navbar">
    <div className="col-4 ">
    <nav className="nav">
    <li className="nav-item liv"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></li>
    <Link className="nav-item liv" to="/">Livre</Link> 
     
     <div className="for">
     <form className="d-flex input-group w-auto ">
        <input
          
          type="search"
          style={{ height: "5vh",width:"7em", backgroundColor:"-moz-initial", marginRight:"0"}}
          className="form-control ser"
          placeholder="search"
          aria-label="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link
          className="btn btn-info"
          type="button"
          to={"/search/" + searchValue}
          
          style={{ color: "#2c9db7", width: "3.5em",  backgroundColor:"#2c9db7" ,height:"5vh" ,marginTop:"7%" , padding:"1%"}}
        >
          <span style={{ color: "#ffffff", fontSize:"1.4em" ,marginTop:"10%", fontWeight:"bolder" ,alignItem:"center"}}>
           
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
  <Link className="nav-link" to="/" style={{color:"#ffffff" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Home </Link> 
  </li>
  <li className="nav-item ">
  <Link className="nav-link" to="/categorys" 
  style={{color:"#ffffff" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Categories </Link>
  </li>
  <li className="nav-item ">
  <Link className="nav-link" to="/Books" 
  style={{color:"#ffffff" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Books </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/contactus" 
  style={{color:"#ffffff" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>Contactus</Link>  
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/Whoweare" 
  style={{color:"#ffffff" ,fontFamily:"cursive" ,fontWeight:"bolder"}}> who we are</Link>
  </li>
</ul>
    </div>
     
 <div className="col-4 "  >
    <ul className="nav " style={{marginRight:"1%" ,fontFamily:"cursive" ,fontWeight:"bolder"}}>
  {user ? (
   <>
  <li className="nav-item"> <Link className="nav-link" to="/main-profile"  style={{color:"#ece8e1", fontSize:"1.7vw"}}>
  <FontAwesomeIcon icon={faUser} /></Link></li>

  <li className="nav-item"> <Link className="nav-link" to="/messages"  style={{color:"#ece8e1", fontSize:"1.7vw"}}>          
  <FontAwesomeIcon icon={faMessage}/> </Link></li>

  <li className="nav-item"><Link className="nav-link" to="/transactions"  style={{color:"#ece8e1", fontSize:"1.7vw"}}>
  <FontAwesomeIcon icon={faArrowsRotate}/></Link></li>

  
  <li className="nav-item"><Link className="nav-link" to="/AddBook"  style={{color:"#ece8e1", fontSize:"1.7vw"}}>
  <FontAwesomeIcon icon={faBook}/></Link></li>
  </>
 ) : null}

    {!user ? (
   <>
  <li className="nav-item "><Link className="nav-link btn btn-light"  
  style={{color:"#2c9db7",margin:"7% 0% 2% 0%",width:"6em",fontSize:"90%",marginLeft:"150%" }} to="/register" >
                signup
              </Link></li>

              </>
 ) : null}
{/* style={{color:"GrayText", margin:"6%" ,fontWeight:"bolder", fontSize:"1.5vw"}}> */}
      {user ? (
     <li className="nav-item active">
      <a className="nav-link btn btn-info text-white " onClick={logoutUser} style={{color:"#fff",margin:"7% 0% 2% 0%",width:"6em",fontSize:"90%" }}>
           Logout
      </a>
      </li>
     ) : (
      <li className="nav-item ">
     <Link className="nav-link btn btn-info "  style={{color:"#fff",margin:"7% 0% 2% 7%",width:"6em",fontSize:"90%",marginLeft:"160%" }} to="/login " >
          Login
       </Link>
        </li>
  )}

{adminuser && (
    <li className="nav-item">
      <Link className="nav-link btn btn-light " to="/adminmanage" style={{color:"#2c9db7",margin:"7% 0% 2% 7%",width:"6em" ,fontSize:"90%"}}>
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