import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Routerdom/Home';
import About from './Routerdom/About';
import Navbar from './Routerdom/Navbar';
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={ <Home/> }  />
            <Route path="/about" element={ <About/> }  />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App