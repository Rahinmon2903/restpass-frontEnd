import React from 'react';
import { ToastContainer } from 'react-toastify';
import NavBar from '../Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';

const App = () => {
  return (
    <>
    <div>
      <ToastContainer></ToastContainer>
    </div>
    <div>
      <NavBar/>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
       <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
              <Route path='/reset-password/:id/:token' element={<ResetPassword/>}></Route>
    </Routes>
    </BrowserRouter>
     
      
    </>
  );
};

export default App;