import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="container">
        <h1>This is Home Page</h1>
        <p>
          Lorem ipsum dolor sit,amet consectetur adipisicing elit. Perferendis
          eveniet ab tenetur quo illum id necessitatibus distinctio vel iste
          pariatur.
              </p>
              <NavLink to ="/about" className= 'link'> Visit our About Page</NavLink>
      </div>
    </>
  );
};

export default Home;
