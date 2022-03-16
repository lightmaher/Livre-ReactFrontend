import React from "react";
import Form from 'react-bootstrap/Form'


function Contactus(){
    return(
<div className="container" style={{margin:"10%"}}>
  <div className="row">
    <div className="col">
    <h3   
        style={{ margin:"7% 5%",fontFamily: "Bulmer MT Std",fontStyle: "italic", 
        fontWeight: "600 regular",fontSize: "6vw",lineHeight:"90px", color: "#2c9db7",
        textTransform: "capitalize",textStyle: "Bulmer MT Std"
        }}>Contactus</h3>
    </div>
    <div className="col">
    <img  
      src={require(`../Images/slider/contact.png`)}/>
      </div>
  </div>
  
</div>

)}


export default Contactus;