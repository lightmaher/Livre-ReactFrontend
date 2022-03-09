import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import Books from './pages/Books'
import {Registerform} from './pages/Registerform'
import { AuthProvider } from './Context/AuthContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';
import NotFound from './Components/NotFound';
import Adminmanage from './pages/Adminmanage';
import AddCategory from './Components/AddCategory';
import EditCategory from './Components/EditCategory';


function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       <div className='container'>
        <Routes>
          <Route path="/"     exact element={<Books />} />
          <Route path="/register"      element={<Registerform />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminmanage" element={<Adminmanage />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/editcategory/:id"  element={<EditCategory />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
      <ToastContainer />
    </AuthProvider>       

  );
}

export default App;
