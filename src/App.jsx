import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Regist from './pages/Regist';
import Navbar from './Componenets/Navbar';
import Home from "./pages/Login";
import ProtectedRoute from './Componenets/ProtectedRoute';
import Dashbord from './pages/Dashbord';
import About from './pages/About';
import Main from './pages/Main';
import Login from './pages/Login';

function App() {
  return (
    
 
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Main/>
    }></Route>
    <Route path='/Login' element={
      <Login/>
    }></Route>
    <Route path='/Regist' element={<Regist/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Dashbord' element={
      <ProtectedRoute>
      <Dashbord/></ProtectedRoute>
    } ></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
