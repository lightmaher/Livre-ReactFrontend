import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Books from './pages/Books'
import Book from './pages/Book'
import AddBook from './pages/AddBook'
import {Registerform} from './pages/Registerform'
import { AuthProvider } from './Context/AuthContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import Otherprofile from './pages/Otherprofile';
import Transactions from './pages/Transactions';


function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       <div className='container'>
      <Routes>
      <Route path="/"     exact element={<Books />} />
      <Route path="/register"      element={<Registerform />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main-profile" element={<Profile />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/profile/:id" element={<Otherprofile />} />
      <Route path="/transactions" element={<Transactions />} />

      </Routes>
      </div>
      <ToastContainer />
      </AuthProvider>       

  );
}

export default App;
