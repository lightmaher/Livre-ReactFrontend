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
        <div style={{textAlign:"center", marginLeft:"35%",marginTop:"15%"}}>
        <a> <FontAwesomeIcon className="me-4" style={{fontSize:"400%" ,color:"#2c9db7"}} icon={faFacebook} />  </a>
        <a> <FontAwesomeIcon className="me-4" style={{fontSize:"400%", color:"#2c9db7"}} icon={faEnvelope} />  </a>
        <a> <FontAwesomeIcon className="me-4" style={{fontSize:"400%", color:"#2c9db7"}} icon={faLinkedin} />  </a>
      </div>

    </div>
    <div className="col-4 offset-2">
    <img style={{width:"50vw",height:"50vh"}} 
      src={require(`../Images/slider/contact.png`)}/>
      </div>
  </div>
  <div className="col-md-6" >
                <button
                  style={{
                    width: "30vw",
                    height: "15vh",
                    color: "#2c9db7",
                    fontWeight: "400",
                    fontSize: "2vw",
                    marginLeft:"60%"
                    
                  }}
                  type="button"
                  class="btn btn-outline-info btn-lg"
                >
                  contact livre
                </button>
              </div>
  
</div>


)}


export default Contactus;