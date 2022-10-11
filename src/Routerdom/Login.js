import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navi = useNavigate();
  const LoginPage = () => {
      localStorage.setItem("login", true);
       Navi("/");
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      Navi("/");
    }
  });
  return (
    <>
      <div>
        <h1> Welcome to Login Page</h1>
        <br />
        <input type="text" placeholder="Enter your Name" />
        <br />
        <br />
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your Email Address"
        />
        <br />
        <br />
        <button onClick={LoginPage}>Submit</button>
      </div>
    </>
  );
};

export default Login;
