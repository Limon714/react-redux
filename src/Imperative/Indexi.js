import React, { useState,forwardRef,useImperativeHandle } from 'react'

const Indexi = (props, ref) => {
    const [count, setCount] = useState(0);
   
  useImperativeHandle(ref, () => ({
    FirstClick,
    yell: () => {
      alert(count)
    }
  }))
    const FirstClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
          <button onClick={FirstClick}>First Click</button>
          <h1>Number of Count : {count}</h1>
    </div>
  )
}

export default forwardRef(Indexi)
