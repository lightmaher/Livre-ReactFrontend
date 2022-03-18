import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer style={{backgroundColor:"rgb(46, 46, 46)",position:"fixed-bottom",width:"100%",bottom:"0%",color:"#ffffff",flexFlow:'wrap'}} >
        <div class="container">
          <div className="row">
            <div className="col-4" style={{marginTop: "3%"}}>
             <h1 style={{fontFamily: "Sansita Swashed",fontSize:"300%",color:"#2c9db7"}}>Livre</h1>
             <p style={{fontSize:"122%"}}>Your online book Library with Zero Cost. Get ready to exchange, donate or Much more!</p>
            </div>
            <div className="col-8" style={{textAlign: "center",marginTop: "1%"}}>
              <div className="row">
                <div className="col-8" style={{textAlign: ""}}>
                    <p style={{fontSize:"180%",color:"#2c9db7"}}>Customer Service</p>
                    <p style={{fontSize:"120%"}}><Link to='/whoweare'>Who We Are</Link></p> 
                    <p style={{fontSize:"120%"}}><Link to='/contactus'>  Contact Us  </Link></p> 
                    <p style={{fontSize:"120%"}}><Link to='/privacypolicy'>  Privacy policy </Link></p>  
                    <p style={{fontSize:"120%"}}><Link to='/termsofuse'> Terms of use  </Link></p>
                </div>        
                <div className="col-4">
                <p style={{fontSize:"180%",color:"#2c9db7"}}>Follow Us</p>
                <div>
                  <a> <FontAwesomeIcon  style={{fontSize:"150%",margin:"0 4%"}} icon={faFacebook} />  </a>
                  <a> <FontAwesomeIcon  style={{fontSize:"150%",margin:"0 4%"}} icon={faEnvelope} />  </a>
                  <a> <FontAwesomeIcon  style={{fontSize:"150%",margin:"0 4%"}} icon={faLinkedin} />  </a>
                </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"rgb(24, 24, 24)",height:"3.5vh",textAlign:"center",fontSize:"1.1vw"}}>CopyRight &copy; 2022 <Link to="/">@Livre.com</Link></div>
      </footer>

    </>
  );
}

export default Footer;
