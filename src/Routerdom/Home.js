import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <h1>This is Home Page</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          eveniet ab tenetur quo illum id necessitatibus distinctio vel iste
          pariatur.
              </p>
              <Link to ="/about">Visit our About Page</Link>
      </div>
    </>
  );
};

export default Home;
