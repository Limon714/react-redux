import React from "react";
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="container">
        <h1>This is Contact Page</h1>
        <p>
          Lorem ipsum dolor sit,amet consectetur adipisicing elit. Perferendis
          eveniet ab tenetur quo illum id necessitatibus distinctio vel iste
          pariatur.
        </p>
        <Link to="company"  > <span>Company Page </span> </Link>
        <Link to="channel"  > <span>Channel Page</span></Link>
        <Link to="blog"  > <span>Blog Page</span></Link>
        <Outlet/>
      </div>
    </>
  );
};

export default Contact;
