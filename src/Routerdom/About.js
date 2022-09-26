import React from 'react'
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div>
        <h1>This is About Page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          eveniet ab tenetur quo illum id necessitatibus distinctio vel iste
          pariatur.
        </p>
        <Link to="/">Visit our Home Page</Link>
      </div>
    </>
  );
}

export default About