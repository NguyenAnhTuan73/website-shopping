import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Announcement from './Components/Announcement';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Components/Product';


function App() {
  return (
      <Router>
      <Navbar/>
      <Announcement/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route  path='/register' element={<Register/>} />
        <Route  path='/products' element={<Products/>} />
      </Routes>
      </Router>
      
  )
}

export default App;
