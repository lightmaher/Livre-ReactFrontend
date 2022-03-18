import React from "react";
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";


function Contactus(){
    return(
<div className="container" style={{margin:"10%"}}>
  <div className="row">
    <div className="col-4">
    <h3   
        style={{ margin:"7% 5%",fontFamily: "Bulmer MT Std",fontStyle: "italic", 
        fontWeight: "600 regular",fontSize: "5vw",lineHeight:"90px", color: "#2c9db7",
        textTransform: "capitalize",textStyle: "Bulmer MT Std"
        }}>ContactUs</h3>
        <div style={{textAlign:"center",marginTop:"15%"}}>
        <a> <FontAwesomeIcon style={{fontSize:"400%" ,color:"#2c9db7",margin:"0 4%"}} icon={faFacebook} />  </a>
        <a> <FontAwesomeIcon style={{fontSize:"400%", color:"#2c9db7",margin:"0 4%"}} icon={faEnvelope} />  </a>
        <a> <FontAwesomeIcon style={{fontSize:"400%", color:"#2c9db7",margin:"0 4%"}} icon={faLinkedin} />  </a>
      </div>

    </div>
    <div className="col-4 offset-2">
    <img style={{width:"50vw",height:"50vh"}} 
      src={require(`../Images/slider/contact.png`)}/>
      </div>
  </div>
  <div className="col-md-6" >
                <a
                  href="mailto:info@livre.com"
                  style={{
                    width: "30vw",
                    height: "15vh",
                    color: "#2c9db7",
                    fontWeight: "400",
                    fontSize: "4vw",
                    marginLeft:"60%",
                    marginTop:"10%",
                    fontFamily: "Bulmer MT Std",
                    borderRadius : "15px",
                    border : "solid 6px #2c9db7",

                  }}
                  type="button"
                  class="btn btn-outline-info btn-lg"
                >
                  Contact Livre
                </a>
              </div>
  
</div>


)}
export default Contactus;