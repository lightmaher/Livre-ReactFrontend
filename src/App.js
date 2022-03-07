import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Books from './pages/Books'
import {Registerform} from './pages/Registerform'
import {Category} from './pages/Categories'
import {Privacypolicy} from './pages/Privacypolicy'

import { AuthProvider } from './Context/AuthContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       <div className='container'>
      <Routes>
      <Route path="/"     exact element={<Books />} />
      <Route path="/register"      element={<Registerform />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category" element={<Categories />} />
      <Route path="/privacy" element={<Privacypolicy />} />
      </Routes>
      </div>
      <ToastContainer />
      </AuthProvider>       

  );
}

export default App;
