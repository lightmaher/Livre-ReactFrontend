import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
// import { MDBCol, MDBIcon } from "mdbreact";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
function Navbar() {
  const { logoutUser, user } = useContext(AuthContext);
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {user ? (
            <li class="nav-item active">
              <a class="nav-link" onClick={logoutUser}>
                Logout{" "}
              </a>
            </li>
          ) : (
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          <li class="nav-item">
            <Link class="nav-link" to="/Admin">
              Admin panel
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link" to="/">
              {" "}
              Books{" "}
            </Link>
          </li>
          <li class="nav-item">
            <FloatingLabel
              controlId="floatingInput"
              label="Search"
              className="mb-3"
            >
              <Form.Control type="search" placeholder="search"  />
            </FloatingLabel>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
