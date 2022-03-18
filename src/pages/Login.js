import React from 'react';
import {useState} from 'react';
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-solid-svg-icons";

import './login.css';

const Login = () => {
     const [passtype, setpasstype] = useState("password")
     const [loginform, setloginform] = useState({
      email : '',
      password : '',
  })
  const [errors, seterrors] = useState({
    email :null,
    password : null,
})
function update(e){
  if (e.target.name === "email"){
     setloginform({
         ...loginform,
         email : e.target.value
     })
    seterrors({
          ...errors ,
          email :
          null
    })
    }
     else if (e.target.name === "password"){
        setloginform({
            ...loginform,
            password : e.target.value
     })
     seterrors({
          ...errors,
          password: 
          e.target.value.length < 3 ? "password should have more than 3 charctricts" : null
     })
  }
}
let {loginUser} = useContext(AuthContext)
function showpass(e){
   
    if (e.target.checked === true){
     setpasstype("text")
      console.log(passtype)
    } else {
        setpasstype("password")
    }
}
  return (
      <div className="row" style={{ height: '100vh'}}>
        <div className=" col-5 text-white position-relative leftsection ">
          <div className='position-absolute top-50 start-50 translate-middle '>
            <h1>Livre</h1>
            <h3>Your online Library with Zero cost. Get ready to exchange
              , donate .. and MUCH MORE !</h3>
          </div>
        </div>
        <div class="col-4">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh'}}>
            <div>
                <h1 className='signin'>Login to LIVRE</h1>
                <form className='text-left p-2 rounded' onSubmit={(e) => loginUser(e)}>
                  <div className='form_text mt-2'>
                    <label htmlFor="email" className="form-label">
                    Email
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value={loginform.email}
                      name="email"
                      onChange={(e)=> update(e)}
                    />
                    <div class="text-danger text-left mt-1">
                      {errors.email}
                    </div>
                    <label htmlFor="password" class="form-label mt-2">
                      password 
                    </label>
                    <input
                      type={passtype}
                      class="form-control"
                      id="password"
                      name= "password"
                      placeholder="Enter your password"
                      onChange={(e)=> update(e)}
                    />
                     {/* <FontAwesomeIcon icon={faEye} /> */}
                     {/* <span onClick={ (e)=> showpass(e)}><FontAwesomeIcon icon={faEye} /></span> */}
                    <div class="text-danger">
                      {errors.password}
                    </div>
                    <input className='mt-2 m-2' type={'checkbox'}  onChange={ (e)=> showpass(e)} />  
                    <label htmlFor="password"> show password </label>
                  </div>
                  <button type='submit' className=' btn mt-3 login_edit' style={{backgroundColor:'#2c9db7',color:'#ffffff'}}>Login In</button>
                </form>              
            </div>
          </div>

        </div>
        <div className='col-2 offset-1'>
          <h6 className="register">Not a member? <Link style={{ color: '#2c9db7' }} to="/register"> Register now</Link></h6>
        </div>
      </div>  
       
  );
};
export default Login;
