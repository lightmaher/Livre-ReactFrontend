import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
<>
<footer class="footer py-3 bg-light">
  <div class="container">
    <div className="row">
    <div className="col-4">
          <span>
            <FontAwesomeIcon  icon={faEnvelope} />
            &nbsp;
            info@livre.net
            &nbsp; 
          </span>
          <span>
            <FontAwesomeIcon icon={faPhoneSquare} />
            &nbsp;01115434765
          </span>
        </div>
        <div className="col-4 text-center">
           <div className="container">
               <div className="row">
                    <div className="col-4">
                     <Link to='/privacypolicy' className="text-dark">  <span>  Privacy policy</span> </Link>  
                        </div>
                        <div className="col-4">
                        <Link to='/termsofuse' className="text-dark">  <span> Terms of use</span>  </Link>
                        </div>
                        <div className="col-4">
                        <Link to='/whoweare' className="text-dark"> <span>  Who We Are </span> </Link>  
                        </div>
                        </div>        
               </div>  
         </div>
         <div className="col-4  text-end">
          <span>
             <a> <FontAwesomeIcon className="me-3" icon={faLinkedin} />  </a>
             <a> <FontAwesomeIcon className="me-3" icon={faFacebook} />  </a>
             <a> <FontAwesomeIcon className="me-3" icon={faTwitter}  />  </a>
          </span>
           <span>CopyRight &copy; 2022 SG</span>
         </div>
    </div>
  </div>
</footer>
</>
  )
}

export default Footer
