import React from 'react'
import {Link} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>This is a Product Page !</h1>
      <br />
      <Link to="Products/12">
      
        <span>Product Details</span>
      </Link>
    </div>
  );
}

export default Products
