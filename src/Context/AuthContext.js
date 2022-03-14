import React from 'react'
import { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../utils/axiosInstance';


export const AuthContext = React.createContext()



export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    let [profile, setprofile] = useState({})

    const history = useNavigate()

    let loginUser = async (e )=> {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            axiosInstance.get('profile').then( res=>{
                    if (res.data.is_blocked == true){
                        localStorage.removeItem('authTokens');
                        toast.error("You are blocked !", {
                            position: toast.POSITION.TOP_CENTER
                          });
                         setUser(null)
                    } else {
                        toast.success("successfully logged in !", {
                            position: toast.POSITION.TOP_CENTER
                          })
                        history('/')
                    }

            })
        }else{
            toast.error("Email or password are Incorrect !", {
                position: toast.POSITION.TOP_CENTER
              });
        }
    }

    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        history('/login')
    }



    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }


   
    return(
        <AuthContext.Provider value={contextData} >
            { children}
        </AuthContext.Provider>
    )
}
