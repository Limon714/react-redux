import React from 'react'
import { useParams } from 'react-router-dom';

const ProductSingle = () => {
    const {Params} = useParams;
    console.log("🚀 ~ file: ProductSingle.js ~ line 6 ~ ProductSingle ~ Params", Params)
    
  return (
    <div>
      <h1>This is a Product Single Page !</h1>
    </div>
  );
}

export default ProductSingle
