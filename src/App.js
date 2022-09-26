import React,{useRef} from 'react'
import Indexi from './Imperative/Indexi'
const App = () => {
  const heyRef = useRef(null);
  const AddCounter = () => {
    heyRef.current.yell()
  }
  return (
    <>

      <div>
        <Indexi ref= {heyRef} />
        <button onClick={AddCounter}>Get The Number</button>
      </div>
    </>
  )
}

export default App
