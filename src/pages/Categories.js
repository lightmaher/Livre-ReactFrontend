import React from 'react'
import { useState , useEffect  } from 'react'
import {useContext} from 'react'
import {AuthContext} from '../Context/AuthContext'
import { axiosInstance } from '../utils/axiosInstance';

 export default function Categories(){
     const[category, setCategory] = useState([])
   
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






  //   useEffect( () => {
  //       axiosInstance
  //       .get('/categorys')
  //       .then((res) => setCategory(res.data))
  //       .catch((err) =>console.log(err))
  //       //   res => {
  //       //      setbooks(res.data)
  //       //      console.log(res)
  //       //   })
  //     },[])
  //    return (
  //        <div>
  //            <h1>list category</h1>
  //            <ul>
               
  //               {category.map(category, index) => {
  //                   return (
  //                       <link key={index} to={'/categoryDetails/${category.id}'}>
  //                     <li>{category.name}</li>
  //                   )      
  //               })}      
  //           </ul> 
            
  //        </div>
  //     )
  // }


//  export default Categories;