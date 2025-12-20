import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import NavBar from '../Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import Welcome from '../Pages/Welcome';
import Loader from '../Components/Loader';


const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
    <div>
      <ToastContainer></ToastContainer>
    </div>
    <div>
      <NavBar/>
    </div>
    <BrowserRouter>
     {loading && <Loader />}
    <Routes>
      <Route path='/' element={<Register setLoading={setLoading}/>}></Route>
      <Route path="/welcome" element={<Welcome />} />

    

      <Route path='*' element={<NotFound/>}></Route>
      <Route path='/login' element={<Login setLoading={setLoading}/>}></Route>
       <Route path='/forgot-password' element={<ForgotPassword setLoading={setLoading}/>}></Route>
              <Route path='/reset-password/:id/:token' element={<ResetPassword setLoading={setLoading}/>}></Route>
    </Routes>
    </BrowserRouter>
     
      
    </>
  );
};

export default App;