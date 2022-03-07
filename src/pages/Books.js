import React from 'react'
import { useState , useEffect  } from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { axiosInstance } from '../utils/axiosInstance';

function Books() {
  const {user} = useContext(AuthContext)
  const [books , setbooks] = useState([])
  //   useEffect( () => {
  //   axiosInstance.get('books').then(
  //     res => {
  //        setbooks(res.data)
  //        console.log(res)
  //     })
  // },[])
  useEffect( () => {
    axiosInstance.get('books').then(
      res => {
         setbooks(res.data)
         console.log(res)
      })
  },[books])
  return (
    <div>
      { user ? (
        <> 
        <h3>  this is user Id { user.user_id} </h3>
        </>) : null
      }
    {books.map(book => {
       return( 
         <li key={book.id}> 
           {book.title}
         </li>
       )
     })
    }
  </div>
  )
}
export default Books