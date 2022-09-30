import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routerdom/Home";
import About from "./Routerdom/About";
import Navbar from "./Routerdom/Navbar";
import './App.css'
import Contact from "./Routerdom/Contact";
import Company from "./Routerdom/NestedRouting/Company";
import Channel from "./Routerdom/NestedRouting/Channel";
import Blog from "./Routerdom/NestedRouting/Blog";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />}>
              <Route path="blog" element={<Blog />} />
            </Route>
            <Route path="/contact/" element={<Contact />}>
              <Route path="company" element={<Company />} />
              <Route path="channel" element={<Channel />} />
              <Route path="blog" element={<Blog />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
