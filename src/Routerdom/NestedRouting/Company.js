import React from 'react'
import { useLocation } from 'react-router-dom';
const Company = () => {
  const Locative = useLocation();
  console.log(Locative)
  return (
    <>
      <div>
        <h2>This is Company Page </h2>
      </div>
    </>
  );
}

export default Company