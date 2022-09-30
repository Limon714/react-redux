import React from 'react'
import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className= 'link'>Visit our Home Page</NavLink>
      </div>
    </>
  );
}

export default About