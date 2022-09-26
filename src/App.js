import React, { useRef } from 'react'
import ForwardRef from './Imperative/ForwardRef'

const App = () => {
  const InputRef = useRef(null);
  
 const UpdateInput = () => {
    InputRef.current.value = "1000";
    InputRef.current.style.color = "blue";
    InputRef.current.style.backgroundColor = "yellow";
    InputRef.current.style.textAlign = "center";
    InputRef.current.style.padding = "20px";
    InputRef.current.focus();
  }

  return (
    <div>
      <ForwardRef ref={InputRef} />
      <button onClick={UpdateInput}>Update Input Field</button>
    </div>
  )
}

export default App
