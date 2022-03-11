import React, { useState } from 'react'
import {useEffect} from 'react'
import { axiosInstance } from '../utils/axiosInstance';
function Whoweare() {
    useEffect(() => {
      axiosInstance.get('profile').then(
          res => setprofile(res.data)
      )
    }, [])
    const [profile, setprofile] = useState({})
  return (
      <>
      
        <div>Profile</div>
        { profile !== {}  ? ( <>
        <h3> {profile.email} </h3>
        <h3> {profile.username} </h3>
        <h3> {profile.phone} </h3>
        </>
        ) : (
         <h2> please login to see your profile </h2>
        ) 
        }
      </>
  )
}

export default Whoweare;