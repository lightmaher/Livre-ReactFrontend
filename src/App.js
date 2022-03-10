import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Books from './pages/Books';
import Book from './pages/Book'
import AddBook from './pages/AddBook'
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
import NotFound from './Components/NotFound';
import Adminmanage from './pages/Adminmanage';
import AddCategory from './Components/AddCategory';
import EditCategory from './Components/EditCategory';
import Profile from './pages/Profile';
import Subscription from './Components/Subscription';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Otherprofile from './pages/Otherprofile';
import Transactions from './pages/Transactions';
import Messages from './pages/Messages';
import MessageForm from './pages/MessageForm';


function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       
      <Routes>
    
      <Route path="/"     exact element={<Home/>} />

      <Route path="/books" exact element={<Books/>} />

      <Route path="/register"      element={<Registerform />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adminmanage" element={<Adminmanage />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/editcategory/:id"  element={<EditCategory />} />
      <Route path="*" element={<NotFound />} />      
      <Route path="/main-profile" element={<Profile />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/profile/:id" element={<Otherprofile />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/message/:id" element={<MessageForm />} />
      <Route path="/category" exact element={<Categories />} />
      <Route path="/contactus" exact element={<Contactus />} />
      <Route path="/whoweare" exact element={<Whoweare />} />
      <Route path="/search/:resulte" exact element={<Search />} />
      <Route path="/subscription/:id" exact element={<Subscription/>} />
      <Route path={"/details/:id?"} exact component={CategoryDetails} />
      </Routes>
      
      <ToastContainer />
    </AuthProvider>       

  );
}

export default App;
