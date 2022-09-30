import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const Navi = useNavigate();
    const { Component } = props;
    
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            Navi('/login');
        }
    })
  return (
      <div>
         
          <Component />
    </div>
  )
}

export default Protected