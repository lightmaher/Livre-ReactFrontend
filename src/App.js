import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect  } from 'react'
import axios from 'axios';
function App() {
  const [books , setbooks] = useState([])
  useEffect( () => {
    axios.get('http://127.0.0.1:8000/api/books').then(
      res => {
        setbooks(res.data)
      })

  },[])
  
  return (
    <div className="App">
      {books.map(book => {
         return( 
           <li key={book.id}>
             Title:<br/>
             {book.title}<br/>
             Author:<br/>
             {book.author}<br/>
             Description:<br/>
             {book.description}<br/>
             </li>
         )
       })
      }
      
      {console.log(books)}
    </div>
  );
}

export default App;
