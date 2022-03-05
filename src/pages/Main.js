import React from 'react'
import {useEffect} from 'react'
import {axiosInstance} from '../utils/axiosInstance';
function Main() {
    useEffect(() => {
        axiosInstance.get('profile').then(
           res => {
               console.log(res.data)
           }
       )
    }, [])
    
  return (
      <>
       <div>main</div>
       <h2> this is main page</h2>
      </>
   
  )
}

export default Main