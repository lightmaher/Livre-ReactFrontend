import React from 'react'
import { useState , useEffect  } from 'react'
import axios from 'axios';
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'

function Books() {
  const {user} = useContext(AuthContext)
  const [books , setbooks] = useState([])
    useEffect( () => {
    axios.get('http://127.0.0.1:8000/api/books').then(
      res => {
         setbooks(res.data)
         console.log(res)
      })
  },[])
    
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