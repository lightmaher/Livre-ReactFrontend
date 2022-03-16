import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer style={{backgroundColor:"#2c9db7",position:"fixed",width:"100%",bottom:"0%",color:"#ffffff",height:"30vh"}} >
        <div class="container">
          <div className="row" style={{marginTop:"2%"}}>
            <div className="col-4">
             <h1 style={{fontFamily: "Sansita Swashed",fontSize:"300%"}}>Livre</h1>
             <p style={{fontSize:"122%"}}>Your online book Library to you with Zero Cost ready for exchange or donate or more and more</p>
            </div>
            <div className="col-5 offset-2">
              <div className="row">
                <div className="col-6">
                    <p style={{fontSize:"180%"}}>Customer Service</p>
                    <p style={{fontSize:"120%"}}><Link to='/whoweare'>Who We Are</Link></p> 
                    <p style={{fontSize:"120%"}}><Link to='/contactus'>  Contact Us  </Link></p> 
                    <p style={{fontSize:"120%"}}><Link to='/privacypolicy'>  Privacy policy </Link></p>  
                    <p style={{fontSize:"120%"}}><Link to='/termsofuse'> Terms of use  </Link></p>
                </div>        
                <div className="col-4 offset-2" >
                <p style={{fontSize:"180%"}}>Follow Us</p>
                  <a> <FontAwesomeIcon className="me-4" style={{fontSize:"150%"}} icon={faFacebook} />  </a>
                  <a> <FontAwesomeIcon className="me-4" style={{fontSize:"150%"}} icon={faEnvelope} />  </a>
                  <a> <FontAwesomeIcon className="me-4" style={{fontSize:"150%"}} icon={faLinkedin} />  </a>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"#08768f",height:"5vh",textAlign:"center",fontSize:"105%"}}>CopyRight &copy; 2022 SG</div>
      </footer>

    </>
  );
}

export default Footer;
