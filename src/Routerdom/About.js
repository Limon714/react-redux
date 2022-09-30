import React from 'react'
import { Link, Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className='container'>
        <h1>This is About Page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          eveniet ab tenetur quo illum id necessitatibus distinctio vel iste
          pariatur.
        </p>
        
        <Link to="blog"  > <span>Blog Page</span></Link>
        <Outlet/>
      </div>
    </>
  );
}

export default About