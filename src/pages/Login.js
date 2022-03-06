import React from 'react';
import {useState} from 'react';
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'


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
// const submitForm = (e)=>{
//     e.preventDefault(); 
//  console.log(loginform)
// }
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
    <>
      <div className="container d-flex justify-content-center  align-items-center justify-content-center " style={{ height: '80vh' }}>
        <form className='col-7 text-center border p-3 rounded' onSubmit={(e) => loginUser(e)}>
          <div>
            <label htmlFor="email" class="form-label">
             Email
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="you@example.com"
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
              onChange={(e)=> update(e)}
            />
            <div class="text-danger">
               {errors.password}
            </div>
            <input className='mt-2 m-2' type={'checkbox'}  onChange={ (e)=> showpass(e)} />  
            <label htmlFor="password"> show password </label>
          </div>
          <button type='submit' className='btn btn-primary mt-3'  > Login In</button>
        </form>
      </div>
    </>
  );
};
export default Login;
