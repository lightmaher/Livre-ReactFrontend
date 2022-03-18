import { React, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { axiosInstance } from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faBook,
  faMessage,
  faUser,
  faAlignCenter,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState([]);
  const [resulte, setResulte] = useState([]);
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

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  // const closeMenu = () => setClick(false)
  const [colors, setColors] = useState(false);
  const changeColors = () => {
    if (window.scrollY >= 90) {
      setColors(true);
    } else {
      setColors(false);
    }
  };
  window.addEventListener("scroll", changeColors);
  return (
    <>
      <div className={colors ? "header header-bg con" : "header con"}>
        <div className="row navbar">
          <div className="col-3 ">
            <nav className="nav">
              <li className="nav-item liv">
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
              </li>
              <Link className="nav-item liv" to="/">
                Livre
              </Link>
              <div className="dropdown">
                <button
                  style={{
                    width: "7vw",
                    color: "#fff",
                    margin: "1vw",
                    fontSize: "1.3VW",
                  }}
                  className="btn btn-bg dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Menu
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    width: "16vw",
                    textAlign: "center",
                    margin: "0",
                    height: "30vh",
                    fontSize: "1.2vw",
                    backgroundColor: "#303030",
                  }}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      style={{
                        color: "#fff",
                        fontFamily: "cursive",
                        fontWeight: "bolder",
                      }}
                    >
                      Home{" "}
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/categorys"
                      style={{
                        color: "#fff",
                        fontFamily: "cursive",
                        fontWeight: "bolder",
                      }}
                    >
                      Categories{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/Books"
                      style={{
                        color: "#fff",
                        fontFamily: "cursive",
                        fontWeight: "bolder",
                      }}
                    >
                      Books{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="dropdown-item"
                      to="/contactus"
                      style={{
                        color: "#fff",
                        fontFamily: "cursive",
                        fontWeight: "bolder",
                      }}
                    >
                      Contactus
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="dropdown-item"
                      to="/Whoweare"
                      style={{
                        color: "#fff",
                        fontFamily: "cursive",
                        fontWeight: "bolder",
                      }}
                    >
                      {" "}
                      who we are
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          {/* <ul className="nav justify-content-center" >
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
</ul> */}
          {/* </div> */}
          <div className="col-5">
            <div className="for">
              <form className="d-flex input-group w-auto ">
                <input
                  type="search"
                  style={{
                    height: "5vh",
                    width: "12em",
                    backgroundColor: "-moz-initial",
                    marginRight: "0",
                    fontSize: "1.5VW",
                  }}
                  className="form-control ser"
                  placeholder="search"
                  aria-label="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Link
                  className="btn btn-info"
                  type="button"
                  to={"/search/" + searchValue}
                  style={{
                    color: "#2c9db7",
                    width: "6em",
                    backgroundColor: "#2c9db7",
                    height: "5vh",
                    marginTop: "3%",
                  }}
                >
                  <span
                    style={{
                      color: "#ffffff",
                      fontSize: "1.6em",
                      marginTop: "10%",
                      fontWeight: "bolder",
                      alignItem: "center",
                    }}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </Link>
              </form>
            </div>
          </div>

          <div className="col-3 justify-content-md-end">
            <ul
              className="nav "
              style={{
                marginRight: "1%",
                fontFamily: "cursive",
                fontWeight: "bolder",
              }}
            >
              {user ? (
                <>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className="nav-link"
                      to="/main-profile"
                      style={{ color: "#ece8e1", fontSize: "1.6vw" }}
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </Link>
                  </li>

                  <li className="nav-item">
                    {" "}
                    <Link
                      className="nav-link"
                      to="/messages"
                      style={{ color: "#ece8e1", fontSize: "1.6vw" }}
                    >
                      <FontAwesomeIcon icon={faMessage} />{" "}
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/transactions"
                      style={{ color: "#ece8e1", fontSize: "1.6vw" }}
                    >
                      <FontAwesomeIcon icon={faArrowsRotate} />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/AddBook"
                      style={{ color: "#ece8e1", fontSize: "1.6vw" }}
                    >
                      <FontAwesomeIcon icon={faBook} />
                    </Link>
                  </li>
                </>
              ) : null}

              {!user ? (
                <>
                  <li className="nav-item ">
                    <Link
                      className="nav-link btn btn-light"
                      style={{
                        color: "#2c9db7",
                        margin: "0% 2% 1% 8%",
                        width: "10em",
                        fontSize: "1.6vw%",
                        marginLeft: "50%",
                        height: "5vh",
                      }}
                      to="/register"
                    >
                      signup
                    </Link>
                  </li>
                </>
              ) : null}
              {/* style={{color:"GrayText", margin:"6%" ,fontWeight:"bolder", fontSize:"1.5vw"}}> */}
              {user ? (
                <li className="nav-item active">
                  <a
                    className="nav-link btn btn-info text-white "
                    onClick={logoutUser}
                    style={{
                      color: "#fff",
                      margin: "5% 0% 3% 3%",
                      width: "8em",
                      fontSize: "1vw",
                    }}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                <li className="nav-item ">
                  <Link
                    className="nav-link btn btn-info "
                    style={{
                      color: "#fff",
                      margin: "0% 2% 1% 8%",
                      width: "8em",
                      fontSize: "1vw",
                      marginLeft: "50%",
                      height: "5vh",
                    }}
                    to="/login "
                  >
                    Login
                  </Link>
                </li>
              )}
              {user ? (
                user.is_admin ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-light "
                      to="/adminmanage"
                      style={{
                        color: "#2c9db7",
                        margin: "7% 0% 2% 7%",
                        width: "10em",
                        fontSize: "90%",
                      }}
                    >
                      Manage
                    </Link>
                  </li>
                ) : null
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
