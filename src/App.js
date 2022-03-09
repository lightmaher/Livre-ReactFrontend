import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login'
import Books from './pages/Books'

import Book from './pages/Book'
import AddBook from './pages/AddBook'
import {Registerform} from './pages/Registerform'
import { AuthProvider } from './Context/AuthContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';
import NotFound from './Components/NotFound';
import Adminmanage from './pages/Adminmanage';
import AddCategory from './Components/AddCategory';
import EditCategory from './Components/EditCategory';
import Profile from './pages/Profile';
import Otherprofile from './pages/Otherprofile';
import Transactions from './pages/Transactions';
import Messages from './pages/Messages';
import MessageForm from './pages/MessageForm';


function App() {
  
  return (
    <AuthProvider>
       <Navbar />
       <div className='container'>
      <Routes>
      <Route path="/" exact element={<Books />} />
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
      </Routes>
      </div>
      <ToastContainer />
    </AuthProvider>       

  );
}

export default App;
