import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Books from './pages/Books'
import Main from './pages/Main'
import {Registerform} from './pages/Registerform'
import { AuthProvider } from './Context/AuthContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       <div className='container'>
      <Routes>
      <Route path="/"     exact element={<Books />} />
      <Route path="/register"      element={<Registerform />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      </Routes>
      </div>
      <ToastContainer />
      </AuthProvider>       

  );
}

export default App;
