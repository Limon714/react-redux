import React from 'react'
import User from './User'
const App = () => {
  return (
    <>
      <div>
        <h1>React Redux Running !!</h1>
        <User data={{name:'Limon', age:25}} />
      </div>
    </>
  )
}

export default App