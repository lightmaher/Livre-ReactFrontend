import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import {Registerform} from './pages/Registerform';
import Contactus from './pages/Contactus';
import Categories from './pages/Categories';
import Search from './pages/Search';
import CategoryDetails from './pages/CategoryDetails' ;
import Whoweare from './pages/Whoweare';
// import Images from './Images';
// import {Privacypolicy} from './pages/Privacypolicy'

import { AuthProvider } from './Context/AuthContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import Subscription from './Components/Subscription';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       <div className='container'>
      <Routes>
      <Route path="/"     exact element={<Home/>} />
      <Route path="/books" exact element={<Books/>} />
      <Route path="/register" exact element={<Registerform />} />
      <Route path="/login"exact element={<Login />} />
      <Route path="/profile" exact element={<Profile />} />
      <Route path="/category" exact element={<Categories />} />
      <Route path="/contactus" exact element={<Contactus />} />
      <Route path="/whoweare" exact element={<Whoweare />} />
      <Route path="/search/:resulte" exact element={<Search />} />
      <Route path="/subscription/:id" exact element={<Subscription/>} />
      <Route path={"/details/:id?"} exact component={CategoryDetails} />
      </Routes>
      </div>
      <ToastContainer />
      </AuthProvider>       

  );
}

export default App;
